import express, { Router } from 'express';
import { auth } from '../../middlewares';
import { index, store } from '../../controllers/comments.controller';

const router: Router = express.Router();

router.get(/* path */ '/comments', /* controller action */ index);
router.post(/* path */ '/comments', /* middleware(s) */ [auth], /* controller action */ store);

export default router;