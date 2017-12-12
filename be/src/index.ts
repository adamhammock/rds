import "reflect-metadata";
import bluebird from 'bluebird';
import * as App from './config';

App.init();

/**
* Exports express
* @public
*/
module.exports = App;
