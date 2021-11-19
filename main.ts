basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P3,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
