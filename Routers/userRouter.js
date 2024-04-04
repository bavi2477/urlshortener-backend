import express from 'express';
import { loginUser, redirectToResetPassword, registerUser, requestPasswordReset, resetPassword} from '../Controllers/userController.js';

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', requestPasswordReset)
router.get('/reset-password/:token', redirectToResetPassword)
router.post('/reset-password/:token', resetPassword)

export default router;