/* eslint-disable promise/catch-or-return */
/* istanbul ignore file */
/* eslint-disable no-console */
import { httpRequest } from "../utils/http-request";
import { runner, init } from "./generator";
import { asyncFunction } from "./async";

runner(init, httpRequest).then((generatorResult: unknown) =>
  console.log("generator result", generatorResult)
);

asyncFunction(httpRequest).then((asyncResult: unknown) =>
  console.log("async result", asyncResult)
);
