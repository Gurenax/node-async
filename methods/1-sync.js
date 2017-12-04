const FS = require('fs')

function writeTimestamp(filePath) {
  const date = new Date()
  const timestamp = date.toISOString()
  const bigData = Buffer.alloc( 1024 * 1024 * 100, timestamp )
  console.time('1-sync call')
  console.time('1-sync write')
  FS.writeFileSync( filePath, bigData )
  console.timeEnd('1-sync write')
  console.timeEnd('1-sync call')
}

module.exports = {
  writeTimestamp
}