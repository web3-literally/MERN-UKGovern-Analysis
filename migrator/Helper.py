from datetime import datetime

def Log(msg):
    now = datetime.now()
    print('{0} ===> {1}'.format(now.strftime('%Y-%m-%d 5H:5M:%S'), msg))
