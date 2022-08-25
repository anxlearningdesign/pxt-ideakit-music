//% color="#af1015" weight=200 block="Idea Kits:Music"
namespace IdeaKitsMusic {
  //% block="touch pin  %number"
  export function showNumber(pin: DigitalPin) {
    pins.setPull(pin, PinPullMode.PullDown)
    return pins.digitalReadPin(pin)
  }
}