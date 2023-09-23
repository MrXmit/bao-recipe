import mongoose from 'mongoose'

const Schema = mongoose.Schema

const baoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  recipe: {
    type: String,
  	required: true,
  },
  cookingStyle: {
    type: String,
    enum: [ 'steamed', 'fried', 'steamed and sauteed'],
    default: 'steamed',
  },
  owner: {
    type: Schema.Types.ObjectId, ref: 'Profile' 
  },
  tag: {
    type: Schema.Types.ObjectId, ref: 'Tag' 
  },
}, {
  timestamps: true,
})

const Bao = mongoose.model('Bao', baoSchema)

export {
  Bao
}
