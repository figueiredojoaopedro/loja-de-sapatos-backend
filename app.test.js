const request = require('supertest');
const app = require('./index.js');

describe("Sapatos API", () => {
    it('GET /api/shoes/ --> array sapatos', () => {
        return request(app)
            .get('/api/shoes/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body)); // Check if the response body is an array
            });
    });


    it('GET /api/shoes/:id --> sapato by id', () => {
        return request(app)
            .get('/api/shoes/647e591c440534013e6eb9a9')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: 'success',
                        data: {
                            shoe: {
                                _id: '647e591c440534013e6eb9a9',
                                brand: expect.any(String),
                                name: expect.any(String),
                                size: expect.any(String),
                                __v: 0
                            }
                        }
                    })
                );
            });
    });

    it('POST /api/shoes/ --> create sapato', () => {
        return request(app)
            .post('/api/shoes/')
            .send({
                name: 'havaianas de pal4',
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


    it('PATCH /api/shoes/ --> update sapato', () => {
        return request(app)
            .patch('/api/shoes/647e591c440534013e6eb9a9')
            .send({
                name: "tenis da nasa"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        status: 'success',
                        data: {
                            shoe: {
                                _id: expect.any(String),
                                name: 'tenis da nasa',
                                size: expect.any(String),
                                brand: expect.any(String),
                                __v: 0
                            }
                        }
                    })
                );
            });
    });

    it('DELETE /api/shoes/:id --> delete sapato', () => {
        return request(app)
            .delete("/api/shoes/647e591c440534013e6eb9a9")
            .expect(204)
            .then(response => {
                // No need to expect response.body for successful deletion
            })
    })
});


afterAll((done) => {
    app.close(done);
});