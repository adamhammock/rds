import * as ExpressPromiseRouter from 'express-promise-router';

const router = ExpressPromiseRouter();

router.use('/login', (req, res, next) => res.sendStatus(200));
router.use('/', (req, res, next) => res.sendStatus(200));

module.exports = router;

