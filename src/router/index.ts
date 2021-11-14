import express, {Router} from 'express';

import posts from './routes/posts';
import guests from './routes/guests';
import comments from './routes/comments';

const router: Router = express.Router();

router.use(guests);
router.use(posts);
router.use(comments);


export default router;