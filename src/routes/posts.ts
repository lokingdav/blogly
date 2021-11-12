import express, { Router } from 'express';
import { index, store } from '../controllers/posts'

const router: Router = express.Router();

router.get('/posts', index);
router.post('/posts', store);

export default router;