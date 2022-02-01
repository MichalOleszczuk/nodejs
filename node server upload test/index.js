const express = require("express");
const path = require("path");
const formidable = require("formidable");
const fs = require("fs");
const WebSocket = require("ws");
const http = require("http");

const port = 3000;

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

app.get("/", function (req, res, next) {
  setTimeout(() => res.status(200).send("I am working!"), 3000);
});

app.post("/upload", function (req, res) {
  console.log(req);
  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, "/upload");
  form.on("file", function (field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
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
  console.log(`Server started on port ${server.address().port} :)`);
});
