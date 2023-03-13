radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        basic.showArrow(ArrowNames.North)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "down") {
        basic.showArrow(ArrowNames.South)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "left") {
        basic.showArrow(ArrowNames.West)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "right") {
        basic.showArrow(ArrowNames.East)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.setGroup(1)
xiamiBoard.initXiaMiBoard()
WSJoyStick.JoyStickInit()
xiamiBoard.OLEDshowUserText("Jedziemy!", 0, 0)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendString("up")
    }
    if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("down")
    }
    if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("left")
    }
    if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("right")
    }
})
