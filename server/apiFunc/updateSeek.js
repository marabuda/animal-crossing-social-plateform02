const Users = require('../models/users')
const Seek = require('../models/Seek')
const to = require('await-to-js').default

const logHead = '[Update-seek] '
const updateSeek = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    userId, objname, comment, addlist, listorder
  } = req.body

  let [scErr, seekCounter] = await to(Counter.findOneAndUpdate({ name: 'seek'}, { $inc: { number: 1 }}))
  if (scErr) {
    res.send({
      status: 500,
      message: scErr
    })
  }
  if (!userCounter) {
    let counter = {
      name: 'user',
      number: 1
    }
    [scErr, seekCounter] = await to(Counter.create(counter))
    if (scErr) {
      res.send({
        status: 500,
        message: scErr
      })
    }
  }

  const { number } = seekCounter

  let seekUpdate = {
    userId, objname, comment, listorder,
    addlist: addlist || [],
    objid: number,
    status: 'Open'
  }

  const [seekErr, seekInfo] = await to(Seek.Create(seekUpdate))
  if (seekErr) {
    res.send({
      status: 500,
      message: seekErr
    })
  }

  const { _id } = seekInfo
  let userUpdate = {
    $push: { seek: _id }
  }

  const [userErr, userInfo] = await to(Users.updateOne({ userId }, userUpdate))
  if (userErr) {
    res.send({
      status: 500,
      message: userErr
    })
  }

  const { seek } = userInfo

  const seekQuery = { _id: seek }
  // Get seek data
  const [sdErr, seekData] = await to(Seek.find(seekQuery))
  if (sdErr) {
    res.send({
      status: 500,
      message: sdErr
    })
  }

  const response = {
    status: 200,
    message: 'OK',
    userId,
    seek: seekData
  }

  res.send(response)
}


module.exports = updateSeek
