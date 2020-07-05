/**
 * import node core modules
 */
import path from 'path';

/**
 * initialize env
 */
require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

/**
 * initialize express apllication
 */
import express, { Application } from 'express';
import bodyParser from 'body-parser';

const App: Application = express();
const appPort = process.env.APP_PORT || 3000;

/**
 * set Application variables
 */
App.set('port', appPort);

/**
 * add middlewares to express application
 */
App.use(bodyParser.json());
App.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/**
 * use routes in express application
 */
App.use('/api', require('./routes/api'));

export default App;
