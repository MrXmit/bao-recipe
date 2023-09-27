import { Router } from 'express'
import * as tagApiCtrl from '../../controllers/api/tags.js'

const router = Router()

router.post('/', tagApiCtrl.create)

export {
    router
}