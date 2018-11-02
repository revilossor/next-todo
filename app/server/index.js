const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const api = require("./api");
const bodyParser = require("body-parser");
const store = require("./store");

store
  .connect()
  .then(db => {
    console.log("store connected");

    app.prepare().then(() => {
      const server = express();

      server.use(bodyParser.json());

      server.use(bodyParser.urlencoded({ extended: true }));

      server.use("/api", api);

      server.get("/:user", (req, res) => {
        app.render(req, res, "/", { user: req.params.user });
      });

      server.get("*", handle);

      server.listen(3000, err => {
        console.log("server listening on 3000");
        if (err) throw err;
      });
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
