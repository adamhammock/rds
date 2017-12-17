import * as isNil from 'lodash/isNil';
import * as ExpressPromiseRouter from 'express-promise-router';
import * as httpStatus from 'http-status';
import APIError from './../utils/APIError';


const router = ExpressPromiseRouter();

const getAccount = async (req, res, next, id) => {
  /** @type {AccountList} */
  const accountList = req.app.get('container').get('account.list');
  const account = await accountList.findOne({ id });

  if (isNil(account)) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }

  req.account = account;
  return next();
};


/**
 * Returns jwt token if registration was successful
 * @public
 */
router.post('/register', async (req, res, next) => {
  const userManager = req.app.get('container').get('user.manager');
  const userList = req.app.get('container').get('user.list');
  const accountManager = req.app.get('container').get('account.manager');

  const { body: { user: { username, password }, account: { name } } } = req;

  const result = await userList.checkDuplicateUsername(username);

  if (!isNil(result)) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
    // return next(new APIError({ message: 'provided username already exists', status: httpStatus.BAD_REQUEST }));
  }

  const accountId = (await accountManager.registerAccount({ name })).id;

  const registration = await userManager.registerUser({ username, password, accountId });
  return res.status(httpStatus.CREATED).json(registration);
});

router.param('id', getAccount);

module.exports = router;
