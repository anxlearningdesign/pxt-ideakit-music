//% color="#af1015" weight=200 block="Idea Kits:Music"
namespace IdeaKitsMusic {

  //% block="set touch pin  %pin"
  export function setTouchPin(pin: DigitalPin) {
    pins.setPull(pin,PinPullMode.PullDown)
  }

  //% block="touch  %pin"
  export function showNumber(pin: AnalogPin) {
    return pins.analogReadPin(pin)
  }
}