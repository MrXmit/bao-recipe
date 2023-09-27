import { Tag } from '../../models/tag.js'

function create(req, res) {
  Tag.create(req.body)
  .then(tag => res.json(tag))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  create
}