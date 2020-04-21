import Helper
import os

def init(main_script):
    global top_level_path
    global data_path

    top_level_path = os.path.dirname(os.path.realpath(main_script))
    data_path = os.path.join(top_level_path, 'data')