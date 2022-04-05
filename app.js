var mil = 00
var sec = 00
var min = 00
var hr = 00
var freeze

function start() {
  freeze = setInterval(watch, 10)
}

function stop() {
  clearInterval(freeze)
}

function reset() {
  clearInterval(freeze)
  mil = 0
  sec = 0
  min = 0
  hr = 0
  document.getElementById('timer').innerText = '00:00:00:00'
}

function twoDigits(digit) {
  if (digit < 10) {
    return '0' + digit
  } else {
    return digit
  }
}

function watch() {
  mil++

  if (mil == 100) {
    sec++
    mil = 0

    if (sec == 60) {
      min++
      sec = 0
    }
    if (min == 60) {
      hr++
      min = o
    }
  }

  document.getElementById('timer').innerText =
    twoDigits(hr) +
    ':' +
    twoDigits(min) +
    ':' +
    twoDigits(sec) +
    ':' +
    twoDigits(mil)
}
