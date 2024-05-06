const express = require("express");
const app = express();
const conn = require("./conn");
const port = 3000;
const routes = require("./routes/routes");

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.use("/", routes);

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
    });
  })
  .catch((err) => console.log(err));
