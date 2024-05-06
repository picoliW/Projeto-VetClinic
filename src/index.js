const express = require("express");
const app = express();
app.use(express.json());
const conn = require("../db/conn");
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello world");
});

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
