const router = require("express").Router();
const store = require("./store");

router
  .route("/todo/:user")
  .get((req, res) => {
    store.list(req.params.user).then(todos => {
      res.json(todos);
    });
  })
  .post((req, res) => {
    store.add(req.params.user, req.body.todo).then(todo => {
      res.json(todo);
    });
  });

router.route("/todo/bump/:user").post((req, res) => {
  store.bump(req.params.user, req.body.todo).then(todos => {
    res.json(todos);
  });
});

module.exports = router;
