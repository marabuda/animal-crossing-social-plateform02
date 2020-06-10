const Users = require('../models/users')
const Provide = require('../models/provide')
const Seek = require('../models/seek')
// const UserAccount = require('../models/userAccount')

const logHead = '[Friends-info-list] '

const friendsInfoList = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const userData = await Users.findOne(userQuery)
  const { username, friendlist } = userData

  const sortObj = { sort: { createdAt: -1 } }
  let friendsInfoList = []
  for (let friendId of friendlist) {
    let friendQuery = { _id: friendId }
    let friendData = await Users.findOne(friendQuery)
    let { userId } = friendData
    let objQuery = { userId }
    console.log(`${logHead}objQuery: ${objQuery}`)

    // Get provide data
    const provide = await Provide.find(objQuery, {}, sortObj)

    // Get seek data  
    const seek = await Provide.find(objQuery, {}, sortObj)

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
