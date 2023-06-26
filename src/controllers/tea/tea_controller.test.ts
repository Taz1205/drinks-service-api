import request from 'supertest';
import { app } from '../../app';
test('GET /tea should return default name as Earl Grey', async () => {
const res = await request(app)
.get('/tea')
.query({ teaName: 'Earl Grey' });
expect(res.statusCode).toEqual(200);
expect(res.body).toEqual({
drinkType: 'Tea',
name: 'Earl Grey',
});
});
test('GET /tea with query parameters should return name as given', async () => {
    const res = await request(app)
    .get('/tea')
    .query({ teaName: 'Darjeeling' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
    drinkType: 'Tea',
    name: 'Darjeeling',
    });
    });

    test('GET /tea with query parameters should return name as given', async () => {
        const res = await request(app)
        .get('/tea')
        .query({ teaName: 'Oolong' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Oolong',
        });
        });

        test('GET /tea with no name will return default name: Earl Grey', async () => {
            const res = await request(app)
            .get('/tea')
            expect(res.statusCode).toEqual(200);
            expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Earl Grey',
            });
            }); 