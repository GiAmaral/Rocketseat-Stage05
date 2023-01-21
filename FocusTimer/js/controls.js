import Timer from "./timer.js"
import Sounds from "./sound.js"

function Controls(updateDisplay) {
  let sounds = Sounds()
  let timer = Timer(updateDisplay, sounds.alarm)

  function play() {
    if (!timer.isRunning()) {
      timer.start()
    }
  }

  function stop() {
    timer.stop()
  }

  function addFiveMinutes() {
    timer.addFiveMinutes()
  }

  function subFiveMinutes() {
    timer.subFiveMinutes()
  }

  function handleForestSound() {
    return sounds.forest()
  }

  function handleRainSound() {
    return sounds.rain()
  }

  function handleCoffeSound() {
    return sounds.coffe()
  }

  function handleFireplaceSound() {
    return sounds.fireplace()
  }

  return {
    play,
    stop,
    addFiveMinutes,
    subFiveMinutes,
    handleForestSound,
    handleRainSound,
    handleCoffeSound,
    handleFireplaceSound
  }
}

export default Controls