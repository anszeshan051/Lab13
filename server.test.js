const request = require("supertes");
const app = requir('./routes/User');
const mongoose = require('mongoose');
const { describe } = require("yargs");
const { default: test } = require("node:test");

describe("Test the root path", () => {
  test("It should response the GET method", ()=>{
     const response = request(app).post("https://localhost:8000/User/add").send({
        "Name":"Ans",
        "Email": "i200543@nu.edu.pk",
        "Age": 21,
        "Contact": 03326101627
     })
     expect(response.statusCode).toBe(200);
  })

})
describe("Test the root path", () => {
    test("It should response the GET method", ()=>{
       const response = request(app).post("https://localhost:8000/User/add").send({
          "Name":"Ans"
       })
       expect(response.statusCode).toBe(200);
    })
})
describe("Test the root path", () => {
    test("It should response the GET method", ()=>{
       const response = request(app).delete("https://localhost:8000/User/637b632b52f1fc28898d615a")
       expect(response.statusCode).toBe(200);
    })
})