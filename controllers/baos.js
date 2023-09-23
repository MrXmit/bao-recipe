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

// function flipTasty(req, res) {
//   Taco.findById(req.params.tacoId)
//   .then(taco => {
//     taco.tasty = !taco.tasty
//     taco.save()
//     .then(() => {
//       res.redirect(`/tacos/${taco._id}`)
//     })
//     .catch(err => {
//       console.log(err)
//       res.redirect('/tacos')
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/tacos')
//   })
// }

// function edit(req, res) {
//   Taco.findById(req.params.tacoId)
//   .then(taco => {
//     res.render('tacos/edit', {
//       taco,
//       title: 'edit 🥟'
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/tacos')
//   })
// }

// function update(req, res) {
//   Taco.findById(req.params.tacoId)
//   .then(taco => {
//     if (taco.owner.equals(req.user.profile._id)) {
//       req.body.tasty = !!req.body.tasty
//       taco.updateOne(req.body)
//       .then(() => {
//         res.redirect(`/tacos/${taco._id}`)
//       })
//     } else {
//       throw new Error('🚫 Not authorized 🚫')
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/tacos')
//   })  
// }

// function deleteTaco(req, res) {
//   Taco.findById(req.params.tacoId)
//   .then(taco => {
//     if (taco.owner.equals(req.user.profile._id)) {
//       taco.deleteOne()
//       .then(() => {
//         res.redirect(`/tacos`)
//       })
//     } else {
//       throw new Error('🚫 Not authorized 🚫')
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/tacos')
//   })  
// }

export {
  index,
  create,
  show,
  // flipTasty,
  // edit,
  // update,
  // deleteTaco as delete
}