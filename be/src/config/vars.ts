import * as path from 'path';
import * as dotenvSafe from 'dotenv-safe';

// import .env variables
dotenvSafe.load({
  allowEmptyValues: true,
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  energentEmail: process.env.ENERGENT_EMAIL,
  energentPassword: process.env.ENERGENT_PASSWORD,
};
