const FS = require('fs')
const Util = require('util')

const writeFilePromise = Util.promisify(FS.writeFile)

// function writeFilePromise(path, content) {
//   const promise = new Promise((callThen, callCatch) => {
//     FS.writeFile( path, content, (error) => {
//       if (error) {
//         // Failure - received from .catch
//         callCatch(error)
//       }
//       else {
//         // Success - received from .then
//         callThen()
//       }
//     })
//   })

//   return promise
// }

function writeTimestamp(filePath) {
  const date = new Date()
  const timestamp = date.toISOString()
  const bigData = Buffer.alloc( 1024 * 1024 * 100, timestamp )
  console.time('2-sync call')
  console.time('2-sync write')
  writeFilePromise(filePath, bigData)
    .then(()=> {
      // When the file was completely written
      console.timeEnd('2-sync write')
    })
  console.timeEnd('2-sync call')
}

module.exports = {
  writeTimestamp
}