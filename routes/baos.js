import { Router } from 'express'
import * as baosCtrl from '../controllers/baos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', baosCtrl.index)
router.post('/', isLoggedIn, baosCtrl.create)

router.get('/:baoId', baosCtrl.show)
router.get('/:baoId/edit', isLoggedIn, baosCtrl.edit)
// router.patch('/:tacoId/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
// router.put('/:tacoId', isLoggedIn, tacosCtrl.update)
router.delete('/:baoId', isLoggedIn, baosCtrl.delete)

export {
  router
}
