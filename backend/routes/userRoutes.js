import express from 'express';
import { authUser } from '../controllers/userControllers';
const router = express.Router();

router.post('/auth', authUser);

export default router;