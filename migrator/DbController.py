import Helper
import mysql.connector
from mysql.connector import errorcode

class DbController(object):
    def __init__(self):
        self.cnx = None
        pass

    def connectDB(self):
        try:
            self.cnx = mysql.connector.connect(user='root', password='', host='127.0.0.1', database='legaldb')
            # self.cnx = mysql.connector.connect(user='root', password='o9J1DLukLy:E', host='127.0.0.1', database='legaldb')
            Helper.Log('Database connection success')
            return True
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                Helper.Log("Something is wrong with your user name or password")
            elif err.errno == errorcode.ER_BAD_DB_ERROR:
                Helper.Log("Database does not exist")
            else:
                Helper.Log('Database error %s' % str(err))
            return False

    def disconnectDB(self):
        if self.cnx:
            self.cnx.close()
        pass

    def insertCompanyData(self, record_data):
        try:
            cursor = self.cnx.cursor(buffered=True)

            add_company_query = ("INSERT INTO tbl_company (CompanyName, CompanyNumber,RegAddress_CareOf,RegAddress_POBox,"
                              "RegAddress_AddressLine1, RegAddress_AddressLine2,RegAddress_PostTown,RegAddress_County,"
                              "RegAddress_Country,RegAddress_PostCode,CompanyCategory,CompanyStatus,CountryOfOrigin,"
                              "DissolutionDate,IncorporationDate,Accounts_AccountRefDay,Accounts_AccountRefMonth,"
                              "Accounts_NextDueDate,Accounts_LastMadeUpDate,Accounts_AccountCategory,Returns_NextDueDate,"
                              "Returns_LastMadeUpDate,Mortgages_NumMortCharges,Mortgages_NumMortOutstanding,"
                              "Mortgages_NumMortPartSatisfied,Mortgages_NumMortSatisfied,SICCode_SicText_1,SICCode_SicText_2,"
                              "SICCode_SicText_3,SICCode_SicText_4,LimitedPartnerships_NumGenPartners,LimitedPartnerships_NumLimPartners,"
                              "URI,PreviousName_1_CONDATE,PreviousName_1_CompanyName,PreviousName_2_CONDATE,PreviousName_2_CompanyName,"
                              "PreviousName_3_CONDATE, PreviousName_3_CompanyName,PreviousName_4_CONDATE, PreviousName_4_CompanyName,PreviousName_5_CONDATE,"
                              "PreviousName_5_CompanyName,PreviousName_6_CONDATE,PreviousName_6_CompanyName,PreviousName_7_CONDATE,"
                              "PreviousName_7_CompanyName,PreviousName_8_CONDATE,PreviousName_8_CompanyName,PreviousName_9_CONDATE,"
                              "PreviousName_9_CompanyName,PreviousName_10_CONDATE,PreviousName_10_CompanyName,ConfStmtNextDueDate,ConfStmtLastMadeUpDate) "
                              "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,"
                              "%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)")

            cursor.execute(add_company_query, record_data)
            company_no = cursor.lastrowid
            self.cnx.commit()
            Helper.Log('Last added company id %s' % company_no)
            cursor.close()
        except Exception as e:
            Helper.Log('Exception in insertCompanyData function ==> %s' % str(e))
            pass

    def insertPersonData(self, record_data):
        try:
            cursor = self.cnx.cursor(buffered=True)

            add_person_query = ("INSERT INTO tbl_person (company_number,address_line_1,address_line_2,country,locality,"
                                "postal_code,premises,region,ceased_on,country_of_residence,date_of_birth_month,"
                                "date_of_birth_year,etag,kind,links_self,name,forename,middle_name,surname,name_title,"
                                "nationality,natures_of_control,notified_on) "
                                "VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)")

            cursor.execute(add_person_query, record_data)
            person_no = cursor.lastrowid
            self.cnx.commit()
            Helper.Log('Last added person id %s' % person_no)
            cursor.close()
        except Exception as e:
            Helper.Log('Exception in insertCompanyData function ==> %s' % str(e))
            pass

    def createAccountTableIfNonExist(self, table_name):
        try:
            cursor = self.cnx.cursor(buffered=True)
            check_table_query = 'SELECT 1 FROM `{0}` LIMIT 1'.format(table_name)
            should_create_table = False
            try:
                cursor.execute(check_table_query, {})
            except Exception as e:
                error_msg_pattern = '{0}\' doesn\'t exist'.format(table_name)
                if str(e).endswith(error_msg_pattern):
                    should_create_table = True

            if should_create_table:
                create_table_query = 'CREATE TABLE `{0}` (' \
                                     '`id` int(11) NOT NULL AUTO_INCREMENT, ' \
                                     '`zip_name` varchar(255) NOT NULL, ' \
                                     '`run_process` varchar(255) DEFAULT NULL, ' \
                                     '`company_number` varchar(255) DEFAULT NULL, ' \
                                     '`balance_date` varchar(8) DEFAULT NULL, ' \
                                     '`current_assets_value` varchar(255) DEFAULT NULL, ' \
                                     '`previous_assets_value` varchar(255) DEFAULT NULL, ' \
                                     '`current_creditors_value` varchar(255) DEFAULT NULL, ' \
                                     '`previous_creditors_value` varchar(255) DEFAULT NULL, ' \
                                     'PRIMARY KEY (`id`)) ' \
                                     'ENGINE=InnoDB DEFAULT CHARSET=utf8'.format(table_name)
                cursor.execute(create_table_query, {})
                self.cnx.commit()
            cursor.close()
        except Exception as e:
            Helper.Log('Exception in createAccountTable function ==> %s' % str(e))

    def insertAccountData(self, table_name, record_data):
        try:
            cursor = self.cnx.cursor(buffered=True)
            add_account_query = ("INSERT INTO {0} (zip_name, run_process, company_number, balance_date, "
                                 "current_assets_value, previous_assets_value, current_creditors_value, "
                                 "previous_creditors_value) "
                                "VALUES (%s,%s,%s,%s,%s,%s,%s,%s)".format(table_name))
            cursor.execute(add_account_query, record_data)
            account_no = cursor.lastrowid
            self.cnx.commit()
            cursor.close()
        except Exception as e:
            Helper.Log('Exception in insertAccountData function ==> %s' % str(e))
            pass
