import Controls from "./controls.js"

let controls = Controls()
let playButton = document.querySelector('.play')
let stopButton = document.querySelector('.stop')
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let forestButton = document.querySelector('.forest')
let rainButton = document.querySelector('.rain')
let cafeButton = document.querySelector('.cafe')
let fireplaceButton = document.querySelector('.fireplace')
let rangeForest = document.querySelector('.range-forest')
let rangeRain = document.querySelector('.range-rain')
let rangeCafe = document.querySelector('.range-cafe')
let rangeFireplace = document.querySelector('.range-fireplace')
let darkButton = document.querySelector('.dark-mode')

playButton.addEventListener('click', controls.play)

stopButton.addEventListener('click', controls.stop)

plusButton.addEventListener('click', controls.handleAddFiveMinutes)

minusButton.addEventListener('click', controls.handleDecrementFiveMinutes)

forestButton.addEventListener('click', function () {
  controls.handleForestSound(forestButton)
})

rainButton.addEventListener('click', function () {
  controls.handleRainSound(rainButton)
})

cafeButton.addEventListener('click', function () {
  controls.handleCafeSound(cafeButton)
})

fireplaceButton.addEventListener('click', function () {
  controls.handleFireplaceSound(fireplaceButton)
})

rangeForest.addEventListener('click', function (event) {
  event.stopImmediatePropagation()
  controls.handleVolumeForestSound(rangeForest)
})

rangeRain.addEventListener('click', function (event) {
  event.stopImmediatePropagation()
  controls.handleVolumeRainSound(rangeRain)
})

rangeCafe.addEventListener('click', function (event) {
  event.stopImmediatePropagation()
  controls.handleVolumeCafeSound(rangeCafe)
})

rangeFireplace.addEventListener('click', function (event) {
  event.stopImmediatePropagation()
  controls.handleVolumeFireplaceSound(rangeFireplace)
})

darkButton.addEventListener('click', function () {
  controls.darkMode()
})