import express, { Router } from 'express';
import { index, store } from '../controllers/comments';

const router: Router = express.Router();

router.get('/comments', index);
router.post('/comments', store);

export default router;