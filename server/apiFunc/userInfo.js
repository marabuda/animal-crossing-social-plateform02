const Users = require('../models/users')
const Provide = require('../models/provide')
const Seek = require('../models/seek')
// const UserAccount = require('../models/userAccount')

const logHead = '[User-info] '

const userInfo = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const userData = await Users.findOne(userQuery)

  const sortObj = { sort: { createdAt: -1 } }
  const objQuery = { userId }

  // Get provide data
  const provide = await Provide.find(objQuery, {}, sortObj)
  console.log(`${logHead}Provide: ${provide}`)

  // Get seek data
  const seek = await Seek.find(objQuery, {}, sortObj)
  console.log(`${logHead}Seek: ${seek}`)
  const response = {
    status: 200,
    message: 'OK',
    ...userData,
    provide,
    seek
  }
  res.send(response)
}


module.exports = userInfo
