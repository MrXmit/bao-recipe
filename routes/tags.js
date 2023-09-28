import { Router } from 'express'
import * as tagApiCtrl from '../controllers/api/tags.js'

const router = Router()

router.get('/', tagApiCtrl.index)
router.post('/', tagApiCtrl.create)

export {
    router
}