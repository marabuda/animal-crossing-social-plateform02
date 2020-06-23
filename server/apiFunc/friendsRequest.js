const Users = require('../models/users')
const to = require('await-to-js').default
const logHead = '[Friends-request] '

const firendsRequest = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const [uErr, userData] = await to(Users.findOne(userQuery))
  if (uErr) {
    res.send({
      status: 500,
      message: uErr
    })
  }
  const { friendsRequest } = userData

  const response = {
    status: 200,
    message: 'OK',
    friendsRequest: friendsRequest || []
  }
  res.send(response)
}


module.exports = firendsRequest
