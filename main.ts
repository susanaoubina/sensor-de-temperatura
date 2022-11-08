let Temperatura = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Temperatura = input.temperature()
    if (Temperatura >= 21) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
