const assert = require("assert");

const { Given, When, Then } = require("cucumber");

const statusColoursRegex = {
  todo: /(0, 133, 0)|(103, 230, 103)/,
  doing: /(166, 75, 0)|(255, 178, 115)/,
  done: /(166, 0, 0)|(255, 115, 115)/
};

Given(/^I open the todo list for (.*)/, user => {
  browser.url(user);
});

Then(/^I should see the title (.*)/, title => {
  assert.equal(browser.getText("#title"), title);
});
//
// Given(/^I input the todo (.*)/, todo => {
//   cy.get("input")
//     .type(todo)
//     .type("{enter}");
// });
//
// Given(/^I click the todo (.*)/, todo => {
//   cy.get("h1")
//     .contains(todo)
//     .click();
// });
//
// Then(/^I should( not)? see the todo (.*)/, (not, todo) => {
//   not
//     ? cy
//         .get("h1")
//         .contains(todo)
//         .should("not.exist")
//     : cy.get("h1").contains(todo);
// });
//
// Then(/^The todo (.*) should have status (todo|doing|done)/, (todo, status) => {
//   cy.get("h1")
//     .contains(todo)
//     .should("have.css", "color")
//     .and("match", statusColoursRegex[status]);
// });
