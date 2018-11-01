const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const store = require("./store");

const testUser = "testUser";

store
  .connect()
  .then(db => {
    console.log("store connected");

    const todo = "make the todo status work " + Date.now();

    store.add(testUser, todo).then(todo => {
      console.log("added todo " + todo);
      store.list(testUser).then(todos => {
        console.log("todos for " + testUser + " : ");
        console.dir(todos);
      });
      console.log("updating todo : " + todo);
      store.update(testUser, todo, "doing").then(() => {
        console.log("updated todo " + todo + " to doing");
        store.list(testUser).then(todos => {
          console.log("todos for " + testUser + " : ");
          console.dir(todos);
        });
      });
    });

    console.log("starting next app...");

    app.prepare().then(() => {
      const server = express();

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
