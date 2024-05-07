const express = require("express");
const app = express();
const conn = require("./conn");
const port = 3000;
const routes = require("./routes/routes");

// Faz com que consiga pegar o corpo da requisição
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  return res.send("Hello world");
});

// Faz com que todas as requisições feitas para o caminho raíz ("/") sejam realizadas pelo routes
app.use("/", routes);

// Conecta ao banco de dados
conn
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
    });
  })
  .catch((err) => console.log(err));
