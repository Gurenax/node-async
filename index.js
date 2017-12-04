const Path = require('path')
// const { writeTimestamp } = require('./methods/3-promise')

// const oneTxtPath = Path.join(__dirname, 'data', '1.txt')
// writeTimestamp(oneTxtPath)

const { callDelay, callSyncAll, callPromiseAll, callPromiseRace } = require('./challenge/1-delay')

// Challenge 1
callDelay(2000)

// Challenge 2
callSyncAll(400, 500, 700)

// Challenge 3
callPromiseAll(400, 500, 700)

// Promise.race
callPromiseRace(400, 500, 700)