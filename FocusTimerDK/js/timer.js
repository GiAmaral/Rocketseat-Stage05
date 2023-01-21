import {
    updateTimerDisplay
  } from "./dom.js"
  
  function Timer(alarm) {
    let minutes = 25
    let seconds = 0
    let savedMinutes = minutes
    let savedSeconds = seconds
    let isTimerOn = false
    let timerClock
  
    updateTimerDisplay(minutes, seconds)
  
    function countdown() {
      decrementOneSecond()
  
      updateTimerDisplay(minutes, seconds)
  
      if (hasNoTimeLeft()) {
        alarm()
        stop()
      }
    }
  
    function decrementOneSecond() {
      --seconds
      if (seconds < 0) {
        --minutes
        if (minutes >= 0) {
          seconds = 59
        }
      }
    }
  
    function hasNoTimeLeft() {
      return seconds < 0 || minutes < 0
    }
  
    function resetTimer() {
      minutes = savedMinutes
      seconds = savedSeconds
    }
  
    function isTimerRunning() {
      return isTimerOn
    }
  
    function updateSavedMinutes() {
      if (!isTimerRunning()) {
        savedMinutes = minutes
      }
    }
  
    function addFiveMinutes() {
      minutes = minutes + 5
  
      updateTimerDisplay(minutes, seconds)
      updateSavedMinutes()
    }
  
    function decrementFiveMinutes() {
      minutes = minutes - 5
      if (minutes <= 0) {
        minutes = 0
      }
  
      updateTimerDisplay(minutes, seconds)
      updateSavedMinutes()
    }
  
    function start() {
      timerClock = setInterval(countdown, 1000);
      isTimerOn = true
    }
  
    function stop() {
      clearInterval(timerClock)
      resetTimer()
      updateTimerDisplay(minutes, seconds)
      isTimerOn = false
    }
  
    return {
      start,
      stop,
      addFiveMinutes,
      decrementFiveMinutes,
      isTimerRunning
    }
  }
  
  export default Timer