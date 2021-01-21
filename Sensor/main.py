import sys, os, datetime
sys.path.append(os.path.dirname(__file__))
import pymysql
import sensor
import db_secret

# DB initiate
conn = pymysql.connect(**db_secret.DB_DATA)
cur = conn.cursor()

measure_data = sensor.measure()
sql = f"INSERT INTO tempandhum  (temperature, humidity, createdAt) " \
      f"VALUES ('{measure_data['temperature']}','{measure_data['humidity']}', '{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}')"

cur.execute(sql)
conn.commit()


