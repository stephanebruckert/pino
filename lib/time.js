'use strict'

function getNoTime () {
  return ''
}

function getTime () {
  return ',"time":' + Date.now()
}

function getSlowTime () {
  return ',"time":"' + (new Date()).toISOString() + '"'
}

function getHrTime () {
  var hr = process.hrtime()
  return ',"time": "[' + hr[0] + ',' + hr[1] + ']"'
}

module.exports = {
  getNoTime: getNoTime,
  getTime: getTime,
  getSlowTime: getSlowTime,
  getHrTime: getHrTime
}
