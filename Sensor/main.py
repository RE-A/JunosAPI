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
created_date = {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

sql = f"INSERT INTO TempAndHum  (temperature, humidity, createdAt, updatedAt) " \
      f"VALUES ({temperature_data}, {humidity_data}, '{created_date}', '{created_date}')"

cur.execute(sql)
conn.commit()
conn.close()


