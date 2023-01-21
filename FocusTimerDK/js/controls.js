import Timer from "./timer.js"
import Sounds from "./sound.js"
import {
  darkModePlay
} from "./dom.js"

function Controls() {
  let sounds = Sounds()
  let timer = Timer(sounds.alarm)

  function play() {
    if (!timer.isTimerRunning()) {
      timer.start()
    }
  }

  function stop() {
    timer.stop()
  }

  function handleAddFiveMinutes() {
    timer.addFiveMinutes()
  }

  function handleDecrementFiveMinutes() {
    timer.decrementFiveMinutes()
  }

  function handleForestSound(forestButton) {
    sounds.forestSoundPlay(forestButton)
  }

  function handleRainSound(rainButton) {
    sounds.rainSoundPlay(rainButton)
  }

  function handleCafeSound(cafeButton) {
    sounds.cafeSoundPlay(cafeButton)
  }

  function handleFireplaceSound(fireplaceButton) {
    sounds.fireplaceSoundPlay(fireplaceButton)
  }

  function handleVolumeForestSound(rangeForest) {
    sounds.volumeForestSound(rangeForest)
  }

  function handleVolumeRainSound(rangeRain) {
    sounds.volumeRainSound(rangeRain)
  }

  function handleVolumeCafeSound(rangeCafe) {
    sounds.volumeCafeSound(rangeCafe)
  }

  function handleVolumeFireplaceSound(rangeFireplace) {
    sounds.volumeFireplaceSound(rangeFireplace)
  }

  function darkMode() {
    darkModePlay()
  }

  return {
    play,
    stop,
    handleAddFiveMinutes,
    handleDecrementFiveMinutes,
    handleForestSound,
    handleRainSound,
    handleCafeSound,
    handleFireplaceSound,
    handleVolumeForestSound,
    handleVolumeRainSound,
    handleVolumeCafeSound,
    handleVolumeFireplaceSound,
    darkMode
  }
}

export default Controls