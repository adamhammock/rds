import * as ExpressPromiseRouter from 'express-promise-router';

import * as accountController from './controllers/accounts'
import * as authController from './controllers/auth'
import * as wellsController from './controllers/wells'

const router = ExpressPromiseRouter();

router.use('/auth', authController);
router.use('/wells', wellsController);
router.use('/', accountController);

module.exports = router;

