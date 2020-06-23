const Users = require('../models/users')
const Provide = require('../models/provide')
const Counter = require('../models/counter')
const to = require('await-to-js').default
const _ = require('lodash')

// signUp
const logHead = '[Update-provide] '
const updateProvide = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    userId, objname, comment, deadlinecheck, deadline, listorder
  } = req.body

  let [pErr, provideCounter] = await to(Counter.findOneAndUpdate({ name: 'provide'}, { $inc: { number: 1 }}))
  if (pErr) {
    res.send({
      status: 500,
      message: pErr
    })
  }
  if (!provideCounter) {
    let counter = {
      name: 'provide',
      number: 1
    }
    [pErr, provideCounter] = await to(Counter.create(counter))
    if (pErr) {
      res.send({
        status: 500,
        message: pErr
      })
    }
  }
  let { number } = provideCounter

  let provideUpdate = {
    addlist: [],
    objid: number,
    listorder, objname, comment, deadlinecheck, deadline
  }

  const [pcErr, newProvide] = await to(Provide.create(provideUpdate))
  if (pcErr) {
    res.send({
      status: 500,
      message: pcErr
    })
  }
  console.log(`${logHead}Create provide obj: ${JSON.stringify(newProvide)}`)

  const { _id } = newProvide

  // Update user data
  const [udErr, userData] = await to(Users.findOneAndUpdate({ userId }, { $push : { provide : _id } }, { new: true }))
  if (udErr) {
    res.send({
      status: 500,
      message: udErr
    })
  }
  console.log(`${logHead}Update user: ${JSON.stringify(userData)}`)

  // Get new provide data
  let provide = []
  for (let p of userData.provide) {
    const [pErr, pData] = await to(Provide.findOne({ _id: p }))
    if (pErr) {
      res.send({
        status: 500,
        message: pErr
      })
    }
    provide.push(pData)
  }


  const response = {
    status: 200,
    message: 'OK',
    userId,
    provide
  }

  res.send(response)
}


module.exports = updateProvide
