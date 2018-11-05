Given(/^I open the todo list for (.*)/, user => {
  cy.visit(`http://localhost:3000/${user}`);
});

Then(/^I should see the title (.*)/, title => {
  cy.get("h1").contains(title);
});
