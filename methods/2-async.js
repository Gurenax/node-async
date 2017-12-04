const FS = require('fs')

function writeTimestamp(filePath) {
  const date = new Date()
  const timestamp = date.toISOString()
  const bigData = Buffer.alloc( 1024 * 1024 * 100, timestamp )
  console.time('2-sync call')
  console.time('2-sync write')
  FS.writeFile( filePath, bigData, (error) => {
    // When the file was completely written
    console.timeEnd('2-sync write')
  })
  console.timeEnd('2-sync call')
}

module.exports = {
  writeTimestamp
}