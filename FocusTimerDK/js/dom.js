import {
    formatTimer
  } from "./formatData.js"
  
  function updateTimerDisplay(minutes, seconds) {
    let minutesDisplay = document.querySelector('.minutes')
    let secondsDisplay = document.querySelector('.seconds')
  
    minutesDisplay.textContent = formatTimer(minutes)
    secondsDisplay.textContent = formatTimer(seconds)
  }
  
  function updateButtonState(buttonActive) {
    let forestButton = document.querySelector('.forest')
    let rainButton = document.querySelector('.rain')
    let cafeButton = document.querySelector('.cafe')
    let fireplaceButton = document.querySelector('.fireplace')
  
    forestButton.classList.remove('active')
    rainButton.classList.remove('active')
    cafeButton.classList.remove('active')
    fireplaceButton.classList.remove('active')
  
    if (buttonActive) {
      buttonActive.classList.add('active')
    }
  }
  
  function darkModePlay() {
    let sun = document.querySelector('.sun')
    let moon = document.querySelector('.moon')
  
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
    document.documentElement.classList.toggle('dark')
  }
  
  export {
    updateTimerDisplay,
    updateButtonState,
    darkModePlay
  }