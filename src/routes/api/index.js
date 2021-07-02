import { Router } from 'express';
import photoRoute from './photoRoute';

const router = Router();
router.use('/albums', photoRoute);
export default router;

