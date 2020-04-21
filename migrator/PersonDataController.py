from BaseController import BaseController
import Helper
import json

class PersonalDataController(BaseController):
    def __init__(self):
        pass

    def migrate(self, url, db_controller):
        # self.local_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\persons-with-significant-control-snapshot-2020-04-18.zip'
        # self.unzipped_path = 'F:\\task\\webscrapping\\UKGovernment\\data\\persons-with-significant-control-snapshot-2020-04-18'
        BaseController.migrate(self, url, db_controller)
        pass

    def parse_file(self, file_name):
        BaseController.parse_file(self, file_name)
        with open(file_name, 'rt', encoding='UTF-8') as fd:
            for line in fd:
                data = json.loads(line, encoding='UTF-8')
                company_number = ''
                address_line_1 = ''
                address_line_2 = ''
                country = ''
                locality = ''
                postal_code = ''
                premises = ''
                region = ''
                ceased_on = ''
                country_of_residence = ''
                date_of_birth_month = ''
                date_of_birth_year = ''
                etag = ''
                kind = ''
                links_self = ''
                name = ''
                forename = ''
                middle_name = ''
                surename = ''
                name_title = ''
                nationality = ''
                natures_of_control = ''
                notified_on = ''

                if 'company_number' in data:
                    company_number = data['company_number']
                if 'data' in data:
                    if 'address' in data['data']:
                        if 'address_line_1' in data['data']['address']:
                            address_line_1 = data['data']['address']['address_line_1']
                        if 'address_line_2' in data['data']['address']:
                            address_line_2 = data['data']['address']['address_line_2']
                        if 'country' in data['data']['address']:
                            country = data['data']['address']['country']
                        if 'locality' in data['data']['address']:
                            locality = data['data']['address']['locality']
                        if 'postal_code' in data['data']['address']:
                            postal_code = data['data']['address']['postal_code']
                        if 'premises' in data['data']['address']:
                            premises = data['data']['address']['premises']
                        if 'region' in data['data']['address']:
                            region = data['data']['address']['region']
                    if 'ceased_on' in data['data']:
                        ceased_on = data['data']['ceased_on']
                    if 'country_of_residence' in data['data']:
                        country_of_residence = data['data']['country_of_residence']
                    if 'date_of_birth' in data['data']:
                        if 'month' in data['data']['date_of_birth']:
                            date_of_birth_month = data['data']['date_of_birth']['month']
                        if 'year' in data['data']['date_of_birth']:
                            date_of_birth_year = data['data']['date_of_birth']['year']
                    if 'etag' in data['data']:
                        etag = data['data']['etag']
                    if 'kind' in data['data']:
                        kind = data['data']['kind']
                    if 'links' in data['data']:
                        if 'self' in data['data']['links']:
                            links_self = data['data']['links']['self']
                    if 'name' in data['data']:
                        name = data['data']['name']
                    if 'name_elements' in data['data']:
                        if 'forename' in data['data']['name_elements']:
                            forename = data['data']['name_elements']['forename']
                        if 'middle_name' in data['data']['name_elements']:
                            middle_name = data['data']['name_elements']['middle_name']
                        if 'surename' in data['data']['name_elements']:
                            surename = data['data']['name_elements']['surename']
                        if 'title' in data['data']['name_elements']:
                            name_title = data['data']['name_elements']['title']
                        if 'nationality' in data['data']['name_elements']:
                            nationality = data['data']['name_elements']['nationality']
                    if 'natures_of_control' in data['data']:
                        natures_of_control = json.dumps(data['data']['natures_of_control'])
                    if 'notified_on' in data['data']:
                        notified_on = data['data']['notified_on']

                self.db_controller.insertPersonData((company_number, address_line_1, address_line_2, country, locality,
                                                     postal_code, premises, region, ceased_on, country_of_residence, date_of_birth_month,
                                                     date_of_birth_year, etag, kind, links_self, name, forename, middle_name,
                                                     surename, name_title, nationality, natures_of_control, notified_on))
