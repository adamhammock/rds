import * as ExpressPromiseRouter from 'express-promise-router';

import * as accountController from './controllers/accounts'
import * as authController from './controllers/auth'

const router = ExpressPromiseRouter();

router.use('/accounts', accountController);
router.use('/auth', authController);
router.use('/', (req, res, next) => res.sendStatus(200));

module.exports = router;

