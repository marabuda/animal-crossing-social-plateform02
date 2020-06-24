const Users = require('../models/users')
const _ = require('lodash')
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
  const { userId, username, userpicture } = guestData
  let { friendsRequest } = userData
  let checkReq = _.find(friendsRequest, f => f.userId === userId)
  // Duplicate invitation
  if (checkReq) {
    res.send({
      status: 202,
      message: 'Please do not repeatedly send friend invitations.'
    })
  }
  let friendsReq = {
    userId, username, userpicture
  }
  friendsRequest.push(friendsReq)
  const [uuErr] = await to(Users.updateOne(hostQuery, { friendsRequest }))
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
