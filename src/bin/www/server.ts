import http from 'http';
import { App } from '../../app';

/**
 * start listenning to Http Server
 */
http
  .createServer(App)
  .listen(App.get('port'), () => {
    console.log(`-- ${process.env.APP_NAME || 'ColdCat'} started on port : ${App.get('port')}`);
  });
