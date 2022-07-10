const request = require("supertest");
const app = require("./server");

describe("DB CRUD Operations", () => {
  test("GET -> /exam req --> list of req", () => {
    return request(app)
      .get("/exam")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
              student_ID: expect.any(String),
              subject_ID: expect.any(String),
              attendance: expect.any(Number),
              lab_attendance: expect.any(Number),
              accept: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              __v: expect.any(Number),
            }),
          ])
        );
      });
  });

  test("GET -> /subject --> list of the subject id and coordinator id", () => {
    return request(app)
      .get("/subject")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
              coordinator_ID: expect.any(String),
              subject_ID: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              __v: expect.any(Number),
            }),
          ])
        );
      });
  });

  // creating data
  // create a new subject and coordinator - success
  test("POST -> /subject --> create of new data (subject id and coordinator id)", () => {
    return request(app)
      .post("/subject")
        .send({
        id:"62cb01bfe8acb6e351004d53",
        coordinator_ID: "2001e001test",
        subject_ID: "AB1001test",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            _id: expect.any(String),
            coordinator_ID: expect.any(String),
            subject_ID: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: expect.any(Number),
          })
        );
      });
  });

    // create a new subject and coordinator - error
  test("POST -> /subject --> create of new data (only subject id), must send error", () => {
    return request(app)
      .post("/subject")
      .send({
        subject_ID: "2001e001test",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });
    
    // create a new subject and coordinator - error
  test("POST -> /subject --> create of new data (only coordinator id), must send error", () => {
    return request(app)
      .post("/subject")
      .send({
        coordinator_ID: "sas0test",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });
    
    // create a new data for exam request - success
    test("POST -> /exam --> create of new data (exam request)", () => {
        return request(app)
            .post("/exam")
            .send({
                id:"62caee66482677e59c239289",
                student_ID: "2001e001test",
                subject_ID: "AB1001test",
                attendance: 1,
                lab_attendance: 1,
                accept: "accept",
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(  
                    expect.objectContaining({
                        _id: expect.any(String),
                        student_ID: expect.any(String),
                        subject_ID: expect.any(String),
                        attendance: expect.any(Number),
                        lab_attendance: expect.any(Number),
                        accept: expect.any(String),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        __v: expect.any(Number),
                    })
                );
            });
    });

    // create a new data for exam request - error
    test("POST -> /exam --> create of new data (exam request), must send error", () => {
        return request(app)
            .post("/exam")
            .send({
                subject_ID: "AB1001test",
                attendance: 1,
                lab_attendance: 1,
                accept: "accept",
            })
            .expect("Content-Type", /json/)
            .expect(400)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        error: expect.any(String),
                    })
                );
            });
    });



  // delete data - subjet & coordinator - success
    test("DELETE -> /subject --> delete data", () => {
        return request(app)
            .delete("/subject/62cb01bfe8acb6e351004d53")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        coordinator_ID: expect.any(String), 
                        subject_ID: expect.any(String),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        __v: expect.any(Number),
                    })
                );
            }
        );
    });

    // delete data - exam request - success
    test("DELETE -> /exam --> delete data", () => {
        return request(app)
            .delete("/exam/62caee66482677e59c239289")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        _id: expect.any(String),
                        student_ID: expect.any(String),
                        subject_ID: expect.any(String),
                        attendance: expect.any(Number),
                        lab_attendance: expect.any(Number),
                        accept: expect.any(String),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String),
                        __v: expect.any(Number),
                    })
                );
            }
        );
    });

    
  // update event for the updating event params
});
