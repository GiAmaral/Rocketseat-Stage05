function Timer(updateDisplay, alarm) {
    let minutes = 25
    let seconds = 0
    let timerClock
    let savedMinutes = minutes
    let savedSeconds = seconds
    let isTimerOn = false
  
    updateDisplay(...formatTimer())
  
    function formatTimer() {
      const formattedMinutes = String(minutes).padStart(2, '0')
      const formattedSeconds = String(seconds).padStart(2, '0')
  
      return [formattedMinutes, formattedSeconds]
    }
  
    function decrementOneSecond() {
      --seconds
      if (seconds < 0) {
        seconds = 59
        --minutes
      }
    }
  
    function reset() {
      minutes = savedMinutes
      seconds = savedSeconds
    }
  
    function countdown() {
      decrementOneSecond()
  
      if (minutes == 0 && seconds == 0) {
        stop()
  
        alarm()
      }
  
      updateDisplay(...formatTimer())
    }
  
    function isRunning() {
      return isTimerOn
    }
  
    function start() {
      timerClock = setInterval(countdown, 1000)
      isTimerOn = true
    }
  
    function stop() {
      clearInterval(timerClock)
      reset()
      isTimerOn = false
  
      updateDisplay(...formatTimer())
    }
  
    function updateSavedMinutes() {
      if (!isTimerOn) {
        savedMinutes = minutes
      }
    }
  
    function addFiveMinutes() {
      minutes = minutes + 5
  
      updateSavedMinutes()
      updateDisplay(...formatTimer())
    }
  
    function subFiveMinutes() {
      minutes = minutes - 5
  
      if (minutes < 0) {
        minutes = 0
      }
  
      updateSavedMinutes()
      updateDisplay(...formatTimer())
    }
  
    return {
      start,
      stop,
      addFiveMinutes,
      subFiveMinutes,
      isRunning
    }
  }
  
  export default Timer;