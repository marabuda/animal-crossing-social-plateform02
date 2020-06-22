const express = require('express')

const router = express.Router()
const signUpController = require('./apiFunc/signUp')
const logInController = require('./apiFunc/logIn')
const userInfoController = require('./apiFunc/userInfo')
const friendsInfoListController = require('./apiFunc/friendsInfoList')
const updateFriendsController = require('./apiFunc/updateFriends')
const addFriendsController = require('./apiFunc/addFriends')
const confirmFriendController = require('./apiFunc/confirmFriend')
const updateUserController = require('./apiFunc/updateUser')

router.post('/signUp', signUpController)
router.post('/logIn', logInController)
router.post('/userInfo', userInfoController)
router.post('/friendsInfoList', friendsInfoListController)
router.post('/updateFriends', updateFriendsController)
router.post('/addFriends', addFriendsController)
router.post('/confirmFriend', confirmFriendController)
router.post('/updateUser', updateUserController)

module.exports = router
