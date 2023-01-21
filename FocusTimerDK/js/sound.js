import {
    updateButtonState
  } from "./dom.js"
  
  function Sounds() {
    let isForestSoundOn = false
    let isRainSoundOn = false
    let isCafeSoundOn = false
    let isFireplaceSoundOn = false
    let alarmSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    let forestSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Floresta.wav?raw=true")
    let rainSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Chuva.wav?raw=true")
    let cafeSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Cafeteria.wav?raw=true")
    let fireplaceSound = new Audio("https://github.com/goislimat/gisele-challenge-files/blob/main/Lareira.wav?raw=true")
  
    function alarm() {
      alarmSound.play()
    }
  
    function verifyStatusSounds(sound, statusSound, buttonActive) {
      if (statusSound) {
        pauseAllSounds()
        updateButtonState()
        return false
      }
  
      pauseAllSounds()
      sound.play()
      sound.loop = true
      updateButtonState(buttonActive)
      return true
    }
  
    function pauseAllSounds() {
      forestSound.pause()
      isForestSoundOn = false
  
      rainSound.pause()
      isRainSoundOn = false
  
      cafeSound.pause()
      isCafeSoundOn = false
  
      fireplaceSound.pause()
      isFireplaceSoundOn = false
    }
  
    function volumeSound(sound, rangeSound) {
      sound.volume = rangeSound.value
    }
  
    function forestSoundPlay(forestButton) {
      isForestSoundOn = verifyStatusSounds(forestSound, isForestSoundOn, forestButton)
    }
  
    function rainSoundPlay(rainButton) {
      isRainSoundOn = verifyStatusSounds(rainSound, isRainSoundOn, rainButton)
    }
  
    function cafeSoundPlay(cafeButton) {
      isCafeSoundOn = verifyStatusSounds(cafeSound, isCafeSoundOn, cafeButton)
    }
  
    function fireplaceSoundPlay(fireplaceButton) {
      isFireplaceSoundOn = verifyStatusSounds(fireplaceSound, isFireplaceSoundOn, fireplaceButton)
    }
  
    function volumeForestSound(rangeForest) {
      volumeSound(forestSound, rangeForest)
    }
  
    function volumeRainSound(rangeRain) {
      volumeSound(rainSound, rangeRain)
    }
  
    function volumeCafeSound(rangeCafe) {
      volumeSound(cafeSound, rangeCafe)
    }
  
    function volumeFireplaceSound(rangeFireplace) {
      volumeSound(fireplaceSound, rangeFireplace)
    }
  
    return {
      alarm,
      forestSoundPlay,
      rainSoundPlay,
      cafeSoundPlay,
      fireplaceSoundPlay,
      volumeForestSound,
      volumeRainSound,
      volumeCafeSound,
      volumeFireplaceSound
    }
  }
  
  export default Sounds