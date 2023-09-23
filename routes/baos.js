import { Router } from 'express'
import * as baosCtrl from '../controllers/baos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', baosCtrl.index)
router.post('/', isLoggedIn, baosCtrl.create)

router.get('/:baoId', baosCtrl.show)
// router.get('/:tacoId/edit', isLoggedIn, tacosCtrl.edit)
// router.patch('/:tacoId/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
// router.put('/:tacoId', isLoggedIn, tacosCtrl.update)
// router.delete('/:tacoId', isLoggedIn, tacosCtrl.delete)

export {
  router
}
