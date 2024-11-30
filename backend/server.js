import http from "http";
import app from "./app.js";

const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on port : ${port}`);
});