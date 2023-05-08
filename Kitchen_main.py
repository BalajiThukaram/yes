import machine
import time
import dht
import network
from picozero import pico_led
from umqtt.simple import MQTTClient
# Define the input pins for the PIR and DHT11 sensors
pir_pin = machine.Pin(16, machine.Pin.IN)
dht_pin = machine.Pin(20, machine.Pin.IN)

# Create a DHT11 object for reading temperature and humidity
dht11 = dht.DHT11(dht_pin)
#MQTT

MQTT_SERVER = "34.125.188.155"
MQTT_CLIENT_ID = "pico-sensor"
MQTT_USERNAME = b"pico"
MQTT_PASSWORD = b"1234"
MQTT_TOPIC_TEMP = "kitchen/temperature"
MQTT_TOPIC_HUMIDITY = "kitchen/humidity"
MQTT_TOPIC_PIR = "kitchen/motion"

ssid = 'BSACIST'
password = 'bsacist@23'
def connectWifi():
    #Connect to WLAN
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, password)
    while wlan.isconnected() == False:
        print('Waiting for connection...')
        time.sleep(1)
    ip = wlan.ifconfig()[0]
    print(f'Connected on {ip}')
    pico_led.on()
    return "Connected"
connectWifi()
mqtt_client = MQTTClient(MQTT_CLIENT_ID, MQTT_SERVER, user= b'pico', password= b'1234')
mqtt_client.connect()

while True:
    pir_state = pir_pin.value()
    dht11.measure()
    temperature_celsius = dht11.temperature()
    humidity = dht11.humidity()
    if pir_state == 1:
        mqtt_client.publish(MQTT_TOPIC_PIR, "Motion detected")
        mqtt_client.publish(MQTT_TOPIC_TEMP, "{:.1f}".format(temperature_celsius))
        mqtt_client.publish(MQTT_TOPIC_HUMIDITY, "{}".format(humidity))
        print("Temperature: {:.1f} C".format(temperature_celsius))
        print("Humidity: {} %".format(humidity))
        print("PIR sensor triggered!")
    else:
        mqtt_client.publish(MQTT_TOPIC_PIR, "Motion Not detected")
    time.sleep(1)
