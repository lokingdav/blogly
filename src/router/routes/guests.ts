import express, { Router } from 'express';
import { login, register, resetPassword } from '../../controllers/auth.controller';

const router: Router = express.Router();

router.post(/* path */ '/login', /* controller action */ login);
router.post(/* path */ '/register', /* controller action */ register);
router.post(/* path */ '/passwords/reset', /* controller action */ resetPassword);

export default router;