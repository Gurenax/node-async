const Path = require('path')
// const { writeTimestamp } = require('./methods/3-promise')

// const oneTxtPath = Path.join(__dirname, 'data', '1.txt')
// writeTimestamp(oneTxtPath)

const { callDelay, callPromiseAll } = require('./challenge/1-delay')

// Challenge 1
callDelay(2000)

// Challenge 2
callDelay(400)
callDelay(500)
callDelay(700)

// Challenge 3
callPromiseAll(400, 500, 700)