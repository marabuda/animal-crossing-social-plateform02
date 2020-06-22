const mongoose = require('../db.js')

const { Schema, model } = mongoose.promisify()
// const { ObjectId, Mixed } = Schema.Types

let counterSchema = {
  // user counter
  number: {
    type: Number,
    default: 0
  },

  name: {
    type: String
  }

  // mixedData: {
  //   type: Mixed,
  //   required: true
  // }
}

counterSchema = new Schema(counterSchema, {
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
const Counter = model('Counter', counterSchema)

module.exports = Counter
