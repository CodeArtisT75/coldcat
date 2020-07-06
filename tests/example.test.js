import request from 'supertest';
import { App } from '../src/app';

test('should return /api with status 200', (done) => {
  request(App)
    .get('/api')
    .then((res) => {
      expect(res.status).toBe(200);

      done();
    });
});
