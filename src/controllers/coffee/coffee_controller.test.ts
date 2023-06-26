import request from 'supertest';
import { app } from '../../app';
test('GET /coffee should return default name as Latte', async () => {
const res = await request(app)
.get('/coffee')
.query({ coffeeName: 'Latte' });
expect(res.statusCode).toEqual(200);
expect(res.body).toEqual({
drinkType: 'Coffee',
name: 'Latte',
});
});
test('GET /coffee with query parameters should return name as given', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Mocha' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
    drinkType: 'Coffee',
    name: 'Mocha',
    });
    });

    test('GET /coffee with query parameters should return name as given', async () => {
        const res = await request(app)
        .get('/coffee')
        .query({ coffeeName: 'Expresso' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Expresso',
        });
        });

        test('GET /coffee with no name will return default name: Latte', async () => {
            const res = await request(app)
            .get('/coffee')
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
            });
            });