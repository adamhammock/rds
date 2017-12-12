import config from './vars';
import app from './express';

// import services from 'api/services';
// import Container from 'lib/Container';

export function init() {
  // register services
  // await services(container);
  // app.set('container', container);
  // listen to requests
  return app.listen(config.port, () => console.info(`server started on port ${config.port} (${config.env})`));
};
