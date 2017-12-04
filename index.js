const Path = require('path')
const { writeTimestamp } = require('./methods/3-promise')

const oneTxtPath = Path.join(__dirname, 'data', '1.txt')
writeTimestamp(oneTxtPath)