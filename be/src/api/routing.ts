import * as ExpressPromiseRouter from 'express-promise-router';

import * as customersController from './customers/routing'

const router = ExpressPromiseRouter();

router.use('/customers', customersController);

module.exports = router;
