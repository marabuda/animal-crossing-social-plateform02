const Users = require('../models/users')
const logHead = '[Friends-request] '

const firendsRequest = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const userData = await Users.findOne(userQuery)
  const { friendsRequest } = userData

  const response = {
    status: 200,
    message: 'OK',
    friendsRequest
  }
  res.send(response)
}


module.exports = firendsRequest
