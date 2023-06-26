import request from "supertest";
import { app } from "../../app";
describe("Test tealover API endpoint request", () => {
  test("GET should return correct message if endpoint is /tealover", async () => {
    const res = await request(app).get("/tealover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like tea!");
    //expect(res.text).toEqual('This should fail!');
  });
});
