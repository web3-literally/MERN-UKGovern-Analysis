
from AccountDataController import AccountDataController
from CompanyDataController import CompanyDataController
from DbController import DbController
import Global
import Helper
import os
from PersonDataController import PersonalDataController

if __name__ == "__main__":
    Helper.Log('Starting UK Government data migration tool ver1.0...')

    Global.init(__file__)

    company_data_url = 'http://download.companieshouse.gov.uk/BasicCompanyDataAsOneFile-2020-04-01.zip'
    personal_data_url = 'http://download.companieshouse.gov.uk/persons-with-significant-control-snapshot-2020-04-18.zip'
    account_data_url = 'http://download.companieshouse.gov.uk/Accounts_Bulk_Data-2020-04-25.zip'

    dbController = DbController()
    if dbController.connectDB():
        # companyDataController = CompanyDataController()
        # companyDataController.migrate(company_data_url, dbController)
        #
        # personalDataController = PersonalDataController()
        # personalDataController.migrate(personal_data_url, dbController)

        accountDataController = AccountDataController()
        accountDataController.migrate(account_data_url, dbController)

    dbController.disconnectDB()

    Helper.Log('Finished UK Government data migration tool ver1.0...')
