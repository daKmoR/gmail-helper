import 'reflect-metadata'
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import log4js = require('log4js');

import { appName, apiPort as port } from '../shared/config/config'

const logger = log4js.getLogger(appName);
logger.level = 'debug';

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [__dirname + '/controllers/*.js']
});

app.use(log4js.connectLogger(logger, {
  level: process.env.LOG_LEVEL || 'info'
}))
require('./routers/index')(app)

app.listen(port, () => {
  logger.info(`gmail helper listening on http://localhost:${port}`)
})