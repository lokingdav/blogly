import express, { Router } from 'express';
import { home, login, logout, register, resetPassword } from '../controllers/guests';

const router: Router = express.Router();

router.get('/', home);
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.post('/passwords/reset', resetPassword);

export default router;