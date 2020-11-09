input.onButtonPressed(Button.A, function () {
    basic.showString("scale up")
    music.playMelody("C5 B A G F E D C ", 140)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A")
    music.playTone(440, music.beat(BeatFraction.Breve))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("scale down")
    music.playMelody("C D E F G A B C5 ", 140)
})
