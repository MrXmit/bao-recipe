import { Tag } from '../../models/tag.js'

function create(req, res) {
  Tag.create(req.body)
  .then(tag => res.json(tag))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function proccessTags(tagsArray) {
  const tagsIds = []

  tagsArray.forEach(tagName => {
    console.log('tagName = ', tagName)
    Tag.findOne({name: tagName})
    .then(tagObj => {
      if (tagObj) {
        tagsIds.push(tagObj._id)
        console.log('BAOO111OOOOOO::::::: ', tagsIds)

      } else {
        tagsIds.push(Tag.create({name: tagName})._id)
      }
    })
    .catch(err => {
      console.log(err)    
    })
  })
  console.log('BAOOO2222OOOOO::::::: ', tagsIds)


  return Tag.find({name: tagsArray});
}

export {
  create,
  proccessTags
}