basic.forever(function () {
    pins.i2cWriteNumber(
    32,
    19,
    NumberFormat.Int8LE,
    true
    )
    serial.writeValue("x", pins.i2cReadNumber(32, NumberFormat.Int8LE, true))
})
