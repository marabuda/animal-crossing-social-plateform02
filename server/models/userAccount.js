const mongoose = require('../db.js')

const { Schema, model } = mongoose.promisify()
const { ObjectId } = Schema.Types

let userAccountSchema = {
  // user
  user: {
    type: ObjectId,
    ref: 'Users',
    required: true
  },

  // user account
  id: {
    type: String,
    required: true,
    index: true
  },

  // password
  password: {
    type: String,
    required: true
  }
}

userAccountSchema = new Schema(userAccountSchema, {
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
  }
})

userAccountSchema.index({ id: 1 })
const UserAccount = model('UserAccount', userAccountSchema)

module.exports = UserAccount
