
guage = 0
roll = 0
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

def on_forever():
    global roll
    strip.clear()
    roll = input.compass_heading()
    guage = Math.map(roll, -90, 90, 0, 12)
    gauge = Math.round(guage)
    strip.set_pixel_color(gauge, neopixel.colors(NeoPixelColors.BLUE))
    strip.show()
basic.forever(on_forever)
