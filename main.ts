//% color="#af1015" weight=200 block="Idea Kits:Music"
namespace IdeaKitsMusic {
  let detection = 900;
  let soundLoop = 10;
  let onTouchLoop = 10;
  let key = 0;

  enum Note {
    //% blockIdentity=music.noteFrequency enumval=262
    C = 262,
    //% block=C#
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F = 349,
    //% block=F#
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G = 392,
    //% block=G#
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B = 494,
    //% blockIdentity=music.noteFrequency enumval=131
    C3 = 131,
    //% block=C#3
    //% blockIdentity=music.noteFrequency enumval=139
    CSharp3 = 139,
    //% blockIdentity=music.noteFrequency enumval=147
    D3 = 147,
    //% blockIdentity=music.noteFrequency enumval=156
    Eb3 = 156,
    //% blockIdentity=music.noteFrequency enumval=165
    E3 = 165,
    //% blockIdentity=music.noteFrequency enumval=175
    F3 = 175,
    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    FSharp3 = 185,
    //% blockIdentity=music.noteFrequency enumval=196
    G3 = 196,
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    GSharp3 = 208,
    //% blockIdentity=music.noteFrequency enumval=220
    A3 = 220,
    //% blockIdentity=music.noteFrequency enumval=233
    Bb3 = 233,
    //% blockIdentity=music.noteFrequency enumval=247
    B3 = 247,
    //% blockIdentity=music.noteFrequency enumval=262
    C4 = 262,
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp4 = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D4 = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb4 = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E4 = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F4 = 349,
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp4 = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G4 = 392,
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp4 = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A4 = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb4 = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B4 = 494,
    //% blockIdentity=music.noteFrequency enumval=523
    C5 = 523,
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    CSharp5 = 555,
    //% blockIdentity=music.noteFrequency enumval=587
    D5 = 587,
    //% blockIdentity=music.noteFrequency enumval=622
    Eb5 = 622,
    //% blockIdentity=music.noteFrequency enumval=659
    E5 = 659,
    //% blockIdentity=music.noteFrequency enumval=698
    F5 = 698,
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    FSharp5 = 740,
    //% blockIdentity=music.noteFrequency enumval=784
    G5 = 784,
    //% block=G#5
    //% blockIdentity=music.noteFrequency enumval=831
    GSharp5 = 831,
    //% blockIdentity=music.noteFrequency enumval=880
    A5 = 880,
    //% blockIdentity=music.noteFrequency enumval=932
    Bb5 = 932,
    //% blockIdentity=music.noteFrequency enumval=988
    B5 = 988,
  }

  const touchpin = [
    AnalogPin.P3,
    AnalogPin.P4,
    AnalogPin.P1,
    AnalogPin.P10,
    AnalogPin.P2,
  ];

  //% block="Set sensitivity %value" value.defl=900 value.min=0 value.max=1024
  export function servoMax(value: number) {
    detection = value;
  }

  //% block="Set key %value" value.defl=0 value.min=0 value.max=1024
  export function setKey(value: number) {
    key = value;
  }

  //% block="init pin"
  export function pinInit() {
    pins.setPull(DigitalPin.P3, PinPullMode.PullDown);
    pins.setPull(DigitalPin.P4, PinPullMode.PullDown);
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown);
    pins.setPull(DigitalPin.P10, PinPullMode.PullDown);
    pins.setPull(DigitalPin.P2, PinPullMode.PullDown);
  }

  //% block="touch %pin"
  export function touch(pin: AnalogPin): boolean {
    const reading = pins.analogReadPin(pin);
    if (reading > detection) {
      return true;
    } else {
      return false;
    }
  }

  //% block="on touch"
  export function onTouch(): boolean {
    const allpin = touchpin
      .map((pin) => {
        const chktouch = touch(pin);
        return chktouch;
      })
      .filter((item) => item == true);
    if (allpin.length > 0) {
      onTouchLoop = 0;
    } else {
      onTouchLoop++;
    }
    return onTouchLoop < 10 ? true : false;
  }

  //% block="read %pin"
  export function read(pin: AnalogPin): number {
    return pins.analogReadPin(pin);
  }

  //% block="sound sensor %pin"
  export function soundSensor(pin: DigitalPin): number {
    const readpin = pins.digitalReadPin(pin);
    if (readpin === 1) {
      soundLoop = 0;
    } else {
      soundLoop++;
    }
    return soundLoop < 10 ? 1 : 0;
  }

  //%block="buzzer (Hz)|%note=device_note"
  //% useEnumVal=1
  export function buzzer(frequency: number): void {
    music.ringTone(frequency + key);
  }
  //%block="stop sound"
  export function stopSound() {
    music.stopAllSounds()
  }
}
