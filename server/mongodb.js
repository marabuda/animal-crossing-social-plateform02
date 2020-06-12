const { spawn } = require('child_process')
const path = require('path')

const mongodb = async () => {
  const dbPath = path.join(__dirname, 'mongodb')
  console.log(`[MongoDB up] path: ${dbPath}`)
  const child = spawn('C:/Program Files/MongoDB/Server/4.2/bin/mongod.exe', ['--dbpath', dbPath])

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`)
  })
  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })
  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })
}


module.exports = mongodb
