import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as routes from './../api/routing';
import config from './vars';
import * as error from '../api/middlewares/error';

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(config.logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api routes
app.use('/api', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

export default app;
