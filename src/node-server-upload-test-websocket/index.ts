/* eslint-disable no-console */
import * as express from "express";
import * as path from "path";
import * as formidable from "formidable";
import * as fs from "fs";
import * as WebSocket from "ws";
import * as http from "http";

const port = 3000;
const uploadDir = path.join(__dirname, "/upload");

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket, request: http.IncomingMessage) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message} from ${request.url}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

app.get("/", function (_req, res, _next) {
  setTimeout(() => res.status(200).send("I am working!"), 3000);
});

app.post("/upload", function (req, res) {
  console.log(req);
  const form = new formidable.IncomingForm({ multiples: true, uploadDir });

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  form.on("file", function (_field, file) {
    fs.renameSync(file.filepath, path.join(uploadDir, file.originalFilename));
  });

  form.on("error", function (err) {
    console.log("An error has occured: \n" + err);
  });

  form.on("end", function () {
    res.end("File uploaded");
  });

  form.parse(req);
});

//start our server
server.listen(port || 8999, () => {
  console.log(`Server started on port ${port} :)`);
});
