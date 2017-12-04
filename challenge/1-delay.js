//const Util = require('util')

function delay(duration) {
  // Do magic with `new Promise` and `setTimeout`
  return promise = new Promise((resolve, reject) => {
    // We do our work, which accepts a callback function
    setTimeout(() => {
      // The function that is called after a timeout of 'duration'
      resolve()
    }, duration)
    // }
    // else {
    //   reject('Error!')
    // }
  })
}


function callDelay(duration) {
  console.time(`delay ${duration}ms`)
  delay(duration).then(() => {
    console.timeEnd(`delay ${duration}ms`)
  })
}

function callPromiseAll(duration1, duration2, duration3) {
  console.time(`delay Promise.all ${duration1}ms ,${duration2}ms ,${duration3}ms`)
  Promise.all([
    delay(duration1),
    delay(duration2),
    delay(duration3)
  ])
  .then( values => {
    const [r1,r2,r3] = values
    console.timeEnd(`delay Promise.all ${duration1}ms ,${duration2}ms ,${duration3}ms`)
  })
}

module.exports = { delay, callDelay, callPromiseAll }
