
import * as ExpressPromiseRouter from 'express-promise-router';
import * as httpStatus from 'http-status';
import APIError from './../../utils/APIError';

const router = ExpressPromiseRouter();

router.post('/login', async (req, res, next) => {
  const { body: { username, password } } = req;
  const userManager = req.app.get('container').get('user.manager');
  const userList = req.app.get('container').get('user.list');

  const oneUser = await userList.findOne({ username });

  if (oneUser === null) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
    // return next(new APIError({ message: 'username not found', status: httpStatus.UNAUTHORIZED }));
  }

  try {
    const { user, accessToken } = await userManager.generateToken({ username, password }, oneUser);
    const result = await userManager.generateTokenResponse(user, accessToken);
    return res.json({ token: result.token, user: result.user });
  } catch (error) {
    return next(error);
  }
});

router.post('/reset-password', async (req, res) => res.json({ success: true }));

module.exports = router;
