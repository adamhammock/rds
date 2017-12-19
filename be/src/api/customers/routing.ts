import * as ExpressPromiseRouter from 'express-promise-router';

import * as accountController from './controllers/accounts'
import * as authController from './controllers/auth'

const router = ExpressPromiseRouter();

router.use('/', accountController);
router.use('/auth', authController);

module.exports = router;
