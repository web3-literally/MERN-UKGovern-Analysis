from BaseController import BaseController
import csv

class CompanyDataController(BaseController):
    def __init__(self):
        pass

    def migrate(self, url, db_controller):
        # self.local_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\BasicCompanyDataAsOneFile-2020-04-01.zip'
        # self.unzipped_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\BasicCompanyDataAsOneFile-2020-04-01'
        BaseController.migrate(self, url, db_controller)
        pass

    def parse_file(self, file_name):
        BaseController.parse_file(self, file_name)
        with open(file_name, 'rt', encoding='UTF-8') as fd:
            datareader = csv.reader(fd)
            row = next(datareader)          # Skip the header row
            for row in datareader:
                self.db_controller.insertCompanyData(tuple(row))
                pass
