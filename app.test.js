const request = require('supertest');
const app = require('./index.js');

describe("Sapatos API", () => {
    it('GET /api/shoes/ --> array sapatos', async () => {
        return await request(app)
            .get('/api/shoes/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)); // Check if the response body is an array
            });
    });


    it('GET /api/shoes/:id --> sapato by id', async () => {
        return await request(app)
            .get('/api/shoes/647fdbbd76e5f07bac428f67')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body)
            });
    });

    it('POST /api/shoes/ --> create sapato', async () => {
        return await request(app)
            .post('/api/shoes/')
            .send({
                name: 'havaianas de pal9999',
                size: '46',
                brand: 'havaianas'
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: 'success',
                        data: {
                            Shoe: {
                                name: expect.any(String),
                                size: expect.any(String),
                                brand: expect.any(String),
                                _id: expect.any(String),
                                __v: 0
                            }
                        }
                    })
                );
            });
    });


    it('PATCH /api/shoes/ --> update sapato', async () => {
        return await request(app)
            .patch('/api/shoes/647fdbbd76e5f07bac428f67')
            .send({
                name: "tenis da nasa"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body)
            });
    });

    it('DELETE /api/shoes/:id --> delete sapato', async () => {
        return await request(app)
            .delete("/api/shoes/648df7f307352e0cbb28c22e")
            .expect(204)
            .then(response => {
                // No need to expect response.body for successful deletion
            })
    })
});


afterAll((done) => {
    app.close(done);
});