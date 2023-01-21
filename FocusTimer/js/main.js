import Controls from "./controls.js"

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let playButton = document.querySelector('.play')
let stopButton = document.querySelector('.stop')
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let forestButton = document.querySelector('.forest')
let rainButton = document.querySelector('.rain')
let coffeButton = document.querySelector('.coffe')
let fireplaceButton = document.querySelector('.fireplace')

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = minutes
  secondsDisplay.textContent = seconds
}

let controls = Controls(updateDisplay)

playButton.addEventListener('click', controls.play)
stopButton.addEventListener('click', controls.stop)
plusButton.addEventListener('click', controls.addFiveMinutes)
minusButton.addEventListener('click', controls.subFiveMinutes)

function removeActiveStateButtons() {
  forestButton.classList.remove('active')
  rainButton.classList.remove('active')
  coffeButton.classList.remove('active')
  fireplaceButton.classList.remove('active')
}

forestButton.addEventListener('click', function () {
  removeActiveStateButtons()
  let isForestSoundOn = controls.handleForestSound()
  if (isForestSoundOn) {
    forestButton.classList.add('active')
  }
})

rainButton.addEventListener('click', function () {
  removeActiveStateButtons()
  let isRainSoundOn = controls.handleRainSound()
  if (isRainSoundOn) {
    rainButton.classList.add('active')
  }
})

coffeButton.addEventListener('click', function () {
  removeActiveStateButtons()
  let isCoffeSoundOn = controls.handleCoffeSound()
  if (isCoffeSoundOn) {
    coffeButton.classList.add('active')
  }
})

fireplaceButton.addEventListener('click', function () {
  removeActiveStateButtons()
  let isFireplaceSoundOn = controls.handleFireplaceSound()
  if (isFireplaceSoundOn) {
    fireplaceButton.classList.add('active')
  }
})