let gauge = 0
let guage = 0
let roll = 0
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    roll = input.rotation(Rotation.Roll)
    guage = Math.map(roll, -90, 90, 0, 12)
    gauge = Math.round(guage)
    strip.setPixelColor(gauge, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
