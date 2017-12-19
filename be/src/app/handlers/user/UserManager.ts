/* eslint-disable class-methods-use-this */

import * as moment from 'moment-timezone';
import * as httpStatus from 'http-status';
import * as jwt from 'jwt-simple';
import APIError from '../../../api/utils/APIError';
import config from '../../../config/vars';

export default class UserManager {
  repository;
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async token(user) {
    const payload = {
      exp: moment().add(config.jwtExpirationInterval, 'minutes').unix(),
      iat: moment().unix(),
      sub: user.id,
    };
    return jwt.encode(payload, config.jwtSecret);
  }

  async transform(user) {
    const transformed = {};
    const fields = ['id', 'username'];

    fields.forEach((field) => {
      transformed[field] = user[field];
    });

    return transformed;
  }

  async registerUser(data) {
    const user = await this.repository.save(data);
    const token = await this.token(user);
    const result = await this.generateTokenResponse(user, token);
    return result;
  }

  async generateTokenResponse(user, accessToken) {
    const userTransformed = await this.transform(user);
    const tokenType = 'Bearer';
    const expiresIn = moment().add(config.jwtExpirationInterval, 'minutes');
    const token = { tokenType, accessToken, expiresIn };
    return { token, user: userTransformed };
  }

  async generateToken(options, user) {
    const { password } = options;
    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
      message: null
    };
    if (!password) {
      err.message = 'Password not found';
      // throw new APIError(err);
      throw new Error('Error authenticating');
    }

    if (user && user.password === password) {
      return { user, accessToken: this.token(user) };
    }
    err.message = 'Incorrect email or password';
    // throw new APIError(err);
    throw new Error('Error authenticating');
  }
}

