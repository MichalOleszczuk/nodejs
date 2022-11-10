/* eslint-disable no-console */
import * as https from "https";
import type { IHttpRequest } from "../utils/http-request";

export async function asyncFunction<TResult = unknown>(
  httpRequest: IHttpRequest
) {
  const req1Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/1",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _res = await httpRequest<TResult>(req1Params);

  const req2Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/2",
  };
  const res2 = await httpRequest<TResult>(req2Params);

  return res2;
}
