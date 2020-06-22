const mongoose = require('../db.js')

const { Schema, model } = mongoose.promisify()
const { ObjectId, Mixed } = Schema.Types

let userSchema = {
  // user status
  status: {
    type: String,
    index: true,
    enum: ['Close', 'Open', 'Blocked'],
    default: 'Open',
    required: true
  },

  // FK: userAccount
  userAccount: {
    type: ObjectId,
    ref: 'UserAccount',
    index: true
  },

  // FK: provide
  provide: {
    type: Array
  },

  // FK: seek
  seek: {
    type: Array
  },

  // user name
  username: {
    type: String,
    required: true
  },

  // user id
  userId: {
    type: Number,
    required: true
  },

  // user image
  userImg: {
    type: Number
  },

  // user picture
  userpicture: {
    type: Number
  },

  // island name
  islandname: {
    type: String,
    required: true
  },

  fruit: {
    type: String,
    required: true
  },

  // user introduction
  intro: {
    type: String
  },

  friendlist: {
    type: Mixed
  },

  friendRequest: {
    type: Array
  }

  // mixedData: {
  //   type: Mixed,
  //   required: true
  // }
}

userSchema = new Schema(userSchema, {
  toObject: {
    transform(doc, ret) {
      ret.id = doc.betId
      // delete ret._id
    }
  },
  toJSON: {
    transform(doc, ret) {
      ret.id = doc.betId
      // delete ret._id
    }
  },
  strict: false
})

userSchema.index({ username: 1 })
userSchema.index({ userAccount: 1 })
const Users = model('Users', userSchema)

module.exports = Users
