/* eslint-disable no-console */
import * as https from "https";
import type { IHttpRequest } from "../utils/httpRequest";

type IArray<TValues> = Array<TValues>;

export function runner<TResult = unknown>(
  genFn: (args?: any) => Generator,
  ...restArgs: IArray<unknown>
) {
  const itr = genFn(...restArgs);

  function run(arg?: unknown): Promise<TResult> {
    const result = itr.next(arg);

    if (result.done) {
      return result.value;
    }
    return Promise.resolve(result.value).then(run);
  }

  return run();
}

export function* init(httpRequest: IHttpRequest) {
  const req1Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/1",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _res = yield httpRequest(req1Params);

  const req2Params: https.RequestOptions = {
    host: "jsonplaceholder.typicode.com",
    protocol: "https:",
    method: "GET",
    path: "/todos/2",
  };
  const res2 = yield httpRequest(req2Params);

  return res2;
}
