input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(1)
})
basic.showIcon(IconNames.Heart)
