const Users = require('../models/users')
const to = require('await-to-js').default
const logHead = '[Add-friends] '

const addFriends = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { hostId, guestId } = req.body
  const hostQuery = { userId: hostId }
  const questQuery = { userId: guestId }
  // Get user data
  const [udErr, userData] = await to(Users.findOne(hostQuery))
  if (udErr) {
    res.send({
      status: 500,
      message: udErr
    })
  }
  const [gdErr, guestData] = await to(Users.findOne(questQuery))
  if (gdErr) {
    res.send({
      status: 500,
      message: gdErr
    })
  }
  const { userId, username } = guestData
  let { friendsRequest } = userData
  let friendsReq = {
    userId, username
  }
  friendsRequest.push(friendsReq)
  const [uuErr] = await to(Users.update(userQuery, { friendsRequest }))
  if (uuErr) {
    res.send({
      status: 500,
      message: uuErr
    })
  }

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}


module.exports = addFriends
