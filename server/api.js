const express = require('express')

const router = express.Router()
const signUpController = require('./apiFunc/signUp')
const logInController = require('./apiFunc/logIn')
const userInfoController = require('./apiFunc/userInfo')
const friendsInfoListController = require('./apiFunc/friendsInfoList')


router.post('/signUp', signUpController)
router.post('/logIn', logInController)
router.post('/userInfo', userInfoController)
router.post('/friendsInfoList', friendsInfoListController)

module.exports = router
