const Users = require('../models/users')
const Provide = require('../models/provide')
const Seek = require('../models/seek')
const to = require('await-to-js').default
// const UserAccount = require('../models/userAccount')

const logHead = '[User-info] '

const userInfo = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const [udErr, userData] = await to(Users.findOne(userQuery))
  if (udErr) {
    res.send({
      status: 500,
      message: udErr
    })
  }
  const {username: name, islandname, intro, fruit, userpicture} = userData
  const sortObj = { sort: { createdAt: -1 } }
  const objQuery = { userId }

  // Get provide data
  const [pErr, provide] = await to(Provide.find(objQuery, {}, sortObj))
  if (pErr) {
    res.send({
      status: 500,
      message: pErr
    })
  }
  console.log(`${logHead}Provide: ${provide}`)

  // Get seek data
  const [sErr, seek] = await to(Seek.find(objQuery, {}, sortObj))
  if (sErr) {
    res.send({
      status: 500,
      message: sErr
    })
  }
  console.log(`${logHead}Seek: ${seek}`)
  const response = {
    status: 200,
    message: 'OK',
    userId,
    name,
    fruit,
    islandname,
    intro,
    userpicture,
    provide,
    seek
  }
  res.send(response)
}


module.exports = userInfo
