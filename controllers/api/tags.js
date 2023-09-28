import { Tag } from '../../models/tag.js'

function index(req, res) {
  if (typeof req.query.term !== 'undefined') {
    Tag.find({ name: { $regex: req.query.term, $options: 'i' } })
      .then(tags => {
        res.send(tags)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
  } else {
    Tag.find({})
      .then(tags => {
        res.send(tags)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
  }
}

function create(req, res) {
  Tag.create(req.body)
    .then(tag => res.json(tag))
    .catch(err => {
      console.log(err)
      res.json(err)
    })
}


export {
  create,
  index
}