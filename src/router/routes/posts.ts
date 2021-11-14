import express, { Router } from 'express';
import { auth } from '../../middlewares';
import { index, store } from '../../controllers/posts.controller';

const router: Router = express.Router();

router.get(/* path */ '/posts', /* controller action */ index);
router.post(/* path */ '/posts', /* middleware(s) */ [auth], /* controller action */ store);

export default router;