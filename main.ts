/**
 * PIN14 = Controller on(1) Off (0)
 * 
 * Motor1 forward:
 * 
 * P13 - HIGH
 * 
 * P12 - LOW
 * 
 * Speed PWM: P1
 * 
 * Motor2 forward:
 * 
 * P16 - HIGH
 * 
 * P15 - LOW
 * 
 * Speed PWM: P2
 * 
 * Motor1 Backward:
 * 
 * P13 - LOW
 * 
 * P12 - HIGH
 * 
 * Speed PWM: P1
 * 
 * Motor2 Backward:
 * 
 * P16 - LOW
 * 
 * P15 - HIGH
 * 
 * Speed PWM: P2
 */
input.onButtonPressed(Button.A, function () {
    FWD_Left()
})
function FWD_Left () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P1, 0)
}
function RWD_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P2, 0)
}
input.onButtonPressed(Button.AB, function () {
    REV_Left()
    RWD_Right()
})
input.onButtonPressed(Button.B, function () {
    FWD_Right()
})
function FWD_Right () {
    pins.analogWritePin(AnalogPin.P2, 150)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function REV_Left () {
    pins.analogWritePin(AnalogPin.P1, 150)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P1, 0)
}
basic.showIcon(IconNames.Asleep)
pins.digitalWritePin(DigitalPin.P14, 1)