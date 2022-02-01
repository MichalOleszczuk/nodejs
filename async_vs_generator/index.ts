/* eslint-disable no-console */
import * as https from "https";
import { httpRequest } from "../utils/httpRequest";

function runner(genFn: () => Generator) {
  const itr = genFn();

  function run(arg?: unknown) {
    const result = itr.next(arg);

    if (result.done) {
      return result.value;
    }
    return Promise.resolve(result.value).then(run);
  }

  return run();
}

function* init() {
  const req1Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/1",
  };
  const res = yield httpRequest(req1Params);
  console.log("Generator", res);

  const req2Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/2",
  };
  const res2 = yield httpRequest(req2Params);
  console.log("Generator", res2);

  return res2;
}

runner(init);

async function asyncFunction() {
  const req1Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/1",
  };
  const res = await httpRequest(req1Params);
  console.log("Await", res);

  const req2Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/2",
  };
  const res2 = await httpRequest(req2Params);
  console.log("Await", res2);

  return res2;
}

asyncFunction();
