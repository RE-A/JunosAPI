import sys, os, datetime
sys.path.append(os.path.dirname(__file__))
import pymysql
import sensor_new
import db_secret

# DB initiate
conn = pymysql.connect(**db_secret.DB_DATA)
cur = conn.cursor()

measure_data = sensor_new.measure()

temperature_data = f'\'{measure_data["temperature"]}\'' or 'NULL'
humidity_data = f'\'{measure_data["humidity"]}\'' or 'NULL'

sql = f"INSERT INTO tempandhum  (temperature, humidity, createdAt) " \
      f"VALUES ({temperature_data}, {humidity_data}, '{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}')"

cur.execute(sql)
conn.commit()
conn.close()


