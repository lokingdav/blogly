import express, {Router} from 'express';

import posts from './posts';
import guests from './guests';
import comments from './comments';

const router: Router = express.Router();

router.use(guests);

router.use(posts);
router.use(comments);


export default router;