function Sounds() {
    let forestSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Floresta.wav?raw=true")
    let rainSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Chuva.wav?raw=true")
    let coffeSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Cafeteria.wav?raw=true")
    let fireplaceSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Lareira.wav?raw=true")
    let alarmSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    let isForestSoundOn = false
    let isRainSoundOn = false
    let isCoffeSoundOn = false
    let isFireplaceSoundOn = false
  
    function pauseAllSounds() {
      forestSound.pause()
      isForestSoundOn = false
  
      rainSound.pause()
      isRainSoundOn = false
  
      coffeSound.pause()
      isCoffeSoundOn = false
  
      fireplaceSound.pause()
      isFireplaceSoundOn = false
    }
  
    function toogleSound(currentSoundState, sound) {
      if (currentSoundState) {
        pauseAllSounds()
  
        return false
      }
  
      pauseAllSounds()
      sound.play()
      sound.loop = true
      return true
    }
  
    function forest() {
      isForestSoundOn = toogleSound(isForestSoundOn, forestSound)
  
      return isForestSoundOn
    }
  
    function rain() {
      isRainSoundOn = toogleSound(isRainSoundOn, rainSound)
  
      return isRainSoundOn
    }
  
    function coffe() {
      isCoffeSoundOn = toogleSound(isCoffeSoundOn, coffeSound)
  
      return isCoffeSoundOn
    }
  
    function fireplace() {
      isFireplaceSoundOn = toogleSound(isFireplaceSoundOn, fireplaceSound)
  
      return isFireplaceSoundOn
    }
  
    function alarm() {
      alarmSound.play()
    }
  
    return {
      forest,
      rain,
      coffe,
      fireplace,
      alarm
    }
  }
  
  export default Sounds