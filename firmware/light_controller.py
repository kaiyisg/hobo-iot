import RPi.GPIO as GPIO #This imports the GPIO Library into Python so we can use the GPIO Pins on the Pi.

#http://www.instructables.com/id/Raspberry-Pi-Home-Automation-Control-lights-comput/?ALLSTEPS

GPIO.setmode(GPIO.BCM)
GPIO.setup(2, GPIO.OUT) #We are using GPIO 2 as our first pin, 
GPIO.output(2, False)