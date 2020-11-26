input.onButtonPressed(Button.A, function () {
    compteur += -1
})
input.onButtonPressed(Button.B, function () {
    compteur += 1
})
let compteur = 0
basic.forever(function () {
    basic.showNumber(compteur)
})
