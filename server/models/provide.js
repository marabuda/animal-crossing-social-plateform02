const mongoose = require('../db.js')

const { Schema, model } = mongoose.promisify()
// const { ObjectId } = Schema.Types

let provideSchema = {
  // user id
  userId: {
    type: Number,
    required: true
  },

  // object status
  status: {
    type: String,
    index: true,
    enum: ['Close', 'Open'],
    default: 'Open',
    required: true
  },

  objname: {
    type: String,
    required: true
  },

  objid: {
    type: Number,
    required: true,
    index: true
  },

  comment: {
    type: String
  },

  addlist: {
    type: Array
  },

  listorder: {
    type: Number
  },

  deadline: {
    type: Number,
    required: true
  },

  deadlinecheck: {
    type: Boolean,
    required: true,
    default: false
  }
}

provideSchema = new Schema(provideSchema, {
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

provideSchema.index({ user: 1, objid: 1 })
const Provide = model('Provide', provideSchema)

module.exports = Provide
