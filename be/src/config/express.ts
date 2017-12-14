import * as socketio from 'socket.io';
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as http from 'http';
import * as routes from './../api/routing';
import config from './vars';
import * as error from '../api/middlewares/error';

/**
* Express instance
* @public
*/
const app = express();
const httpServer = http.createServer(app); // eslint-disable-line new-cap
const io = socketio(httpServer);

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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Access-Control-Allow-Origin, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    return next();
})

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

export default {
    httpServer,
    app,
    io
};
