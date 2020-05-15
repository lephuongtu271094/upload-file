import { Router } from 'express';

import AuthenticateController from './auth.controller';

const router = Router();
const authenticateController = new AuthenticateController();

router.post('/', authenticateController.authenticateNormalUser);

export const authRouter = router;
