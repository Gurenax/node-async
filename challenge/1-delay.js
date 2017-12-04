//const Util = require('util')

function delay(duration) {
  // Do magic with `new Promise` and `setTimeout`
  return new Promise( resolve => { // no reject because setTimeout never fails
    // We do our work, which accepts a callback function
    setTimeout(() => {
      // The function that is called after a timeout of 'duration'
      resolve()
    }, duration)
  })
}

function callDelay(duration) {
  console.time(`delay ${duration}ms`)
  delay(duration).then(() => {
    console.timeEnd(`delay ${duration}ms`)
  })
}

function callSyncAll(duration1, duration2, duration3) {
  console.time(`delay callSyncAll ${duration1}ms, ${duration2}ms, ${duration3}ms`)
  console.time(`delay ${duration1}ms`)
  delay(duration1).then( ()=>{
    console.timeEnd(`delay ${duration1}ms`)
    console.time(`delay ${duration2}ms`)
    delay(duration2).then( () => {
      console.timeEnd(`delay ${duration2}ms`)
      console.time(`delay ${duration3}ms`)
      delay(duration3).then( () => {
        console.timeEnd(`delay ${duration3}ms`)
        console.timeEnd(`delay callSyncAll ${duration1}ms, ${duration2}ms, ${duration3}ms`)
      })
    })
  })
}

function callPromiseAll(duration1, duration2, duration3) {
  console.time(`delay Promise.all ${duration1}ms, ${duration2}ms, ${duration3}ms`)
  Promise.all([
    delay(duration1),
    delay(duration2),
    delay(duration3)
  ])
  .then( values => {
    const [r1,r2,r3] = values
    console.timeEnd(`delay Promise.all ${duration1}ms, ${duration2}ms, ${duration3}ms`)
  })
}

function callPromiseRace(duration1, duration2, duration3) {
  console.time(`delay Promise.race`)
  Promise.race([
    delay(duration1),
    delay(duration2),
    delay(duration3)
  ])
  .then( value => {
    console.timeEnd(`delay Promise.race`)
  })
}

module.exports = { callDelay, callSyncAll, callPromiseAll, callPromiseRace }
