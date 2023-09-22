import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tagSchema = new Schema({
  name: String
})

const Tag = mongoose.model('Tag', tagSchema)

export {
  Tag
}