const Users = require('../models/users')
const Provide = require('../models/provide')
const Seek = require('../models/seek')
const to = require('await-to-js').default
// const UserAccount = require('../models/userAccount')

const logHead = '[Friends-info-list] '

const friendsInfoList = async (req, res) => {
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
  let { username, friendlist } = userData

  const sortObj = { sort: { createdAt: -1 } }
  let friendsInfoList = []
  for (let friendInfo of friendlist) {
    let { userId: friendId } = friendInfo
    let friendQuery = { userId: friendId }
    let [fdErr, friendData] = await to(Users.findOne(friendQuery))
    if (fdErr) {
      res.send({
        status: 500,
        message: fdErr
      })
    }
    let { userId } = friendData
    let objQuery = { userId }
    console.log(`${logHead}objQuery: ${objQuery}`)

    // Get provide data
    const [pErr, provide] = await to(Provide.find(objQuery, {}, sortObj))
    if (pErr) {
      res.send({
        status: 500,
        message: pErr
      })
    }

    // Get seek data
    const [sErr, seek] = await to(Seek.find(objQuery, {}, sortObj))
    if (sErr) {
      res.send({
        status: 500,
        message: sErr
      })
    }

    let friendInfo = {
      ...friendData,
      provide,
      seek
    }
    friendsInfoList.push(friendInfo)
  }

  const response = {
    status: 200,
    message: 'OK',
    host: {
      name: username,
      userId
    },
    firendsInfoList
  }
  res.send(response)
}


module.exports = friendsInfoList
