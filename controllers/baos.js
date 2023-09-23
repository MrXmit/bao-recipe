import { Bao } from "../models/bao.js"

function index(req, res) {
  Bao.find({})
  .then(baos => {
    res.render('baos/index', {
      baos,
      title: '🥟'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  if (req.body.cast) {
		req.body.cast = req.body.cast.split(', ')
	}
	for (let key in req.body) {
		if (req.body[key] === '') delete req.body[key]
	}
  
  req.body.owner = req.user.profile._id
  req.body.tags = [] 
  console.log(req.body)
  Bao.create(req.body)
  .then(bao => {
    res.redirect('/baos')
  })
  .catch(err => {
    console.log('ERRORRRRR',err)
    res.redirect('/baos')
  })
}

function show(req, res) {
  Bao.findById(req.params.baoId)
  .populate('owner')
  .then(bao => {
    res.render('baos/show', {
      bao,
      title: '🥟 show'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/baos')
  })
}


function edit(req, res) {
  Bao.findById(req.params.baoId)
  .then(bao => {
    res.render('baos/edit', {
      bao,
      title: 'edit 🥟'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/baos')
  })
}

function update(req, res) {
  Bao.findById(req.params.baoId)
  .then(bao => {
    if (bao.owner.equals(req.user.profile._id)) {
      bao.updateOne(req.body)
      .then(() => {
        res.redirect(`/baos/${bao._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/baos')
  })  
}

function deleteBao(req, res) {
  Bao.findById(req.params.baoId)
  .then(bao => {
    if (bao.owner.equals(req.user.profile._id)) {
      bao.deleteOne()
      .then(() => {
        res.redirect(`/baos`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/baos')
  })  
}

export {
  index,
  create,
  show,
  edit,
  update,
  deleteBao as delete
}