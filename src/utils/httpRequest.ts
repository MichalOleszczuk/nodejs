import * as http from "http";
import * as https from "https";

export type IHttpRequest = typeof httpRequest;

export function httpRequest<TResult = unknown>(
  params: http.RequestOptions,
  postData?: unknown
) {
  return new Promise<TResult>(function (resolve, reject) {
    const protocol = params.protocol === "http:" ? http : https;
    const req = protocol.request(params, function (res) {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      // cumulate data
      let body = [];
      res.on("data", function (chunk) {
        body.push(chunk);
      });
      // resolve on end
      res.on("end", function () {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body as unknown as TResult);
      });
    });
    // reject on request error
    req.on("error", function (err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });
    if (postData) {
      req.write(postData);
    }
    // IMPORTANT
    req.end();
  });
}
