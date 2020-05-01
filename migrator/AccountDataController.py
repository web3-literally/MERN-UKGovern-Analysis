from BaseController import BaseController
from bs4 import BeautifulSoup
import Helper
import os
from xbrl import XBRLParser, GAAP, GAAPSerializer

class AccountDataController(BaseController):
    def __init__(self):
        self.table_name = 'tbl_account_'
        self.zip_name = ''
        self._soup = None
        pass

    def migrate(self, url, db_controller):
        # self.local_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\Accounts_Bulk_Data-2020-04-25.zip'
        # self.unzipped_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\Accounts_Bulk_Data-2020-04-25'
        self.parse_zip_name(url)
        BaseController.migrate(self, url, db_controller)
        pass

    # get database table name from the link
    def parse_zip_name(self, zip_link):
        try:
            self.zip_name = os.path.basename(zip_link)
            start_index = zip_link.rfind('Accounts_Bulk_Data-')
            last_index = zip_link.rfind('.zip')

            if start_index == -1 or last_index == -1 or start_index + 19 > last_index:
                self.table_name = 'tbl_account_nondate'
            else:
                date_string = zip_link[(start_index + 19):last_index]
                date_string = ''.join(date_string.split('-'))[:6]
                self.table_name = 'tbl_account_{0}'.format(date_string)
        except Exception as e:
            Helper.Log('Exception in parse_zip_name function {0}'.format(str(e)))

    def parse_file_name(self, file_path):
        try:
            file_name = os.path.basename(file_path)
            first_index = file_name.find('_')
            second_index = file_name.find('_', first_index + 1)
            third_index = file_name.find('_', second_index + 1)
            dot_index = file_name.rfind('.')
            if first_index == -1 or second_index == -1 or third_index == -1 or dot_index == -1:
                return '', '', ''
            run_process = file_name[:second_index]
            company_number = file_name[second_index + 1:third_index]
            balance_date = file_name[third_index + 1:dot_index]
            return run_process, company_number, balance_date
        except Exception as e:
            Helper.Log('Exception in parse_file_name function {0}'.format(str(e)))

    def extract_current_assets(self):
        if (self._soup):
            tr_tag = None
            current_value = ''
            previous_value = ''

            # Get <td>Cash at bank and in hand</td>
            current_asset_tag = self._soup.find("td", text="cash at bank and in hand")
            if current_asset_tag != None:
                tr_tag = current_asset_tag.parent
            # Get <td>Current Assets</td>
            else:
                current_asset_tag = self._soup.find("td", text="current assets")
                if current_asset_tag != None:
                    tr_tag = current_asset_tag.parent
                # Get <td><div>Current assets</div></td>
                else:
                    current_asset_tag = self._soup.find("div", text="current assets")
                    if current_asset_tag != None:
                        tr_tag = current_asset_tag.parent
                        if tr_tag != None:
                            tr_tag = tr_tag.parent

            if tr_tag != None:
                children = tr_tag.findChildren('ix:nonfraction', recursive=True)
                if len(children) > 0:
                    current_value = children[0].text
                if len(children) > 1:
                    previous_value = children[1].text
            return current_value, previous_value

    def extract_creditors(self):
        if (self._soup):
            tr_tag = None
            current_value = ''
            previous_value = ''

            # Get <td>Creditors: Amounts Falling Due Within One Year</td>
            current_creditors_tag = self._soup.find("td", text="creditors: amounts falling due within one year")
            if current_creditors_tag != None:
                tr_tag = current_creditors_tag.parent
            # Get <td><div>Creditors: Amounts falling due within one year</div></td>
            else:
                current_creditors_tag = self._soup.find("div", text="creditors: amounts falling due within one year")
                if current_creditors_tag != None:
                    tr_tag = current_creditors_tag.parent
                    if tr_tag != None:
                        tr_tag = tr_tag.parent

            if tr_tag != None:
                children = tr_tag.findChildren('ix:nonfraction', recursive=True)
                if len(children) > 0:
                    current_value = children[0].text
                if len(children) > 1:
                    previous_value = children[1].text
            return current_value, previous_value

    def parse_file(self, file_name):
        try:
            BaseController.parse_file(self, file_name)
            self.db_controller.createAccountTableIfNonExist(self.table_name)
            if file_name.endswith('.html'):     # inline XBRL format
                with open(file_name, mode='r', encoding='utf-8') as fd:
                    file_content = fd.read()
                    self._soup = BeautifulSoup(file_content.lower(), 'html.parser')

                    # First get current assets value
                    run_process, company_number, balance_date = self.parse_file_name(file_name)
                    current_ca_value, previous_ca_value = self.extract_current_assets()
                    current_cd_value, previous_cd_value = self.extract_creditors()
                    self.db_controller.insertAccountData(self.table_name,
                                         (self.zip_name, run_process, company_number, balance_date,
                                          current_ca_value, previous_ca_value, current_cd_value, previous_cd_value))
                pass
            elif file_name.endswith('.xml'):    # XBRL format
                # xbrl_parser = XBRLParser()
                # xbrl = xbrl_parser.parse(file_name)
                pass
        except Exception as e:
            Helper.Log('Exception in parse_file function'.format(str(e)))
