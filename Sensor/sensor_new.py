"""
Adafruit_DHT 라이브러리는 윈도우즈에선 설치 자체가 불가능함.
"""


import sys
import Adafruit_DHT

def measure():
    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    return {'humidity': humidity, 'temperature': temperature}

if __name__ == "__main__":
    # 테스트
    print(measure())