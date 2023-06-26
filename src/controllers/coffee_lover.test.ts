import request from 'supertest';
import { app } from '../app';
describe('Test cofeelover API endpoint request', () => {
test('GET should return correct message if endpoint is /cofeelover', async () => {
const res = await request(app).get('/coffeelover');
expect(res.statusCode).toEqual(200);
expect(res.text).toEqual('I like coffee!');
//expect(res.text).toEqual('This should fail!');
});
});