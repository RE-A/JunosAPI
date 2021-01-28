import adafruit_dht
from board import D4
# D4 = 연결한 GPIO 핀 중 데이터를 전송하는 핀의 이름.
# 참조 https://raspi.tv/2014/rpi-gpio-quick-reference-updated-for-raspberry-pi-b
# Rpi B+ 사용중.

dht_device = adafruit_dht.DHT11(D4)

def Fahrenheit_to_Celsius(f):
    return (f-32) * 5 / 9

def measure():
    temperature = Fahrenheit_to_Celsius(dht_device.temperature)
    humidity = dht_device.humidity
    # 오류가 생길시 각각 None을 리턴함
    if not temperature:
        temperature =
    return {'temperature':temperature, 'humidity':humidity}


if __name__ == "__main__":
    # 테스트
    print(measure())



