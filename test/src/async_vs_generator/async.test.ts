import { when } from "jest-when";
import type { IHttpRequest } from "../../../src/utils/http-request";
import { asyncFunction } from "../../../src/async-vs-generator/async";

describe("async_vs_generator", () => {
  const todos1Params = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/1",
  };

  const todos2Params = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/2",
  };

  const todos1Mock = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  const todos2Mock = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  const httpRequestMock: IHttpRequest = jest.fn();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {
    when(httpRequestMock)
      .calledWith(todos1Params)
      .mockReturnValue(Promise.resolve(todos1Mock));

    when(httpRequestMock)
      .calledWith(todos2Params)
      .mockReturnValue(Promise.resolve(todos2Mock));
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Make async await calls", async () => {
    const asyncResult = await asyncFunction<typeof todos1Mock>(httpRequestMock);

    expect(typeof asyncResult.userId).toBe("number");
    expect(typeof asyncResult.completed).toBe("boolean");
    expect(typeof asyncResult.id).toBe("number");
    expect(typeof asyncResult.title).toBe("string");
  }, 10000);
});
