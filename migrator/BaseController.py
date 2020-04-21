import Global
import Helper
import os
from pathlib import Path
from os import listdir
from os.path import isfile, join
import random
import shutil
import string
import urllib.request
import zipfile

class BaseController(object):
    def __init__(self):
        self.online_link = ''
        self.local_path = ''
        self.unzipped_path = ''
        self.db_controller = None
        pass

    def migrate(self, url, db_controller):
        self.online_link = url
        self.db_controller = db_controller
        self.local_path = self.download_file()
        if not self.local_path:
            return

        self.unzipped_path = self.unzip_file()
        if not self.unzipped_path:
            return

        self.parse_directory()

        shutil.rmtree(self.unzipped_path)

    def download_file(self):
        try:
            # Make directory to download file
            Path(Global.data_path).mkdir(parents=True, exist_ok=True)
            local_path = os.path.join(Global.data_path, self.online_link.split('/')[-1])
            Helper.Log('%s ==> %s downloading... Please wait' % (self.online_link, Global.data_path))

            urllib.request.urlretrieve(self.online_link, local_path)

            # with requests.get(self.online_link, stream=True) as r:
            #     r.raise_for_status()
            #     with open(local_path, 'wb') as f:
            #         for chunk in r.iter_content(chunk_size=8192):
            #             if chunk:  # filter out keep-alive new chunks
            #                 f.write(chunk)
            #                 # f.flush()
            Helper.Log('Download finished ==> %s' % local_path)
            return local_path
        except Exception as e:
            Helper.Log('Exception when downloading ==> %s' % str(e))
            return ''

    def randomString(self, stringLength=4):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(stringLength))

    def unzip_file(self):
        try:
            # Get path to unzip downloaded file, add random string if directory is already exist
            dot_index = self.local_path.rfind('.')
            unzip_dirpath = self.local_path
            if dot_index > -1:
                unzip_dirpath = self.local_path[:dot_index]

            while os.path.exists(unzip_dirpath):
                unzip_dirpath += self.randomString()

            Path(unzip_dirpath).mkdir(parents=True, exist_ok=True)

            # Unzip downloaded file
            with zipfile.ZipFile(self.local_path, 'r') as zip_ref:
                Helper.Log('Unzipping %s ==> %s' % (self.local_path, unzip_dirpath))
                zip_ref.extractall(unzip_dirpath)
                Helper.Log('Unzip finished ==> %s' % unzip_dirpath)
                return unzip_dirpath
        except Exception as e:
            Helper.Log('Exception when unzip ==> %s' % str(e))
            return ""

    def parse_directory(self):
        Helper.Log('Parsing files in the unzipped path ==> %s' % self.unzipped_path)
        for f in listdir(self.unzipped_path):
            abs_path = join(self.unzipped_path, f)
            if isfile(abs_path):
                Helper.Log(abs_path)
                self.parse_file(abs_path)

    def parse_file(self, file_name):
        pass
