Feature: input

  I want to input todos and see them in persistant list

  Scenario: adding a single todo
    Given I open the todo list for single todo
    Given I input the todo do one thing
    Then I should see the todo do one thing

  Scenario: adding multiple todos
    Given I open the todo list for multiple todo
    Given I input the todo first
    Given I input the todo second
    Given I input the todo third
    Then I should see the todo first
    Then I should see the todo second
    Then I should see the todo third

  Scenario: persisting todos
    Given I open the todo list for persisting
    Given I input the todo persist me
    Given I open the todo list for another
    Given I input the todo another todo
    Given I open the todo list for persisting
    Then I should see the todo persist me
    Given I open the todo list for another
    Then I should see the todo another todo
