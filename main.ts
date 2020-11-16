input.onButtonPressed(Button.A, function () {
    basic.showString("G")
    music.playTone(392, music.beat(BeatFraction.Breve))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("A")
    music.playTone(440, music.beat(BeatFraction.Breve))
    basic.clearScreen()
})
