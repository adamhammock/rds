import config from './vars';
import express from './express';
import services from './../api/services';
import Container from './../lib/Container';

const container = new Container();

export async function init() {
  // register services
  await services(container, express.io);
  express.app.set('container', container);
  // listen to requests
  return express.httpServer.listen(config.port, () => console.info(`server started on port ${config.port} (${config.env})`));
};
