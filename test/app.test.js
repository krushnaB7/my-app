const request = require('supertest');
const app = require('../src/index');
 
describe('GET /', () => {
  it('responds with 200 and a message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World');
  });
});
 
describe('GET /health', () => {
  it('returns healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});
