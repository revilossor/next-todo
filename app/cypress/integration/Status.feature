Feature: status

  I want to change todo status, and remove done todos

  Scenario: single status
    Given I open the todo list for single status
    Given I input the todo do one thing
    Then The todo do one thing should have status todo
    Given I click the todo do one thing
    Then The todo do one thing should have status doing
    Given I click the todo do one thing
    Then The todo do one thing should have status done
    Given I click the todo do one thing
    Then I should not see the todo do one thing

  Scenario: multi status
    Given I open the todo list for multi status
    Given I input the todo first
    Given I input the todo second
    Given I input the todo third
    Then The todo first should have status todo
    Then The todo second should have status todo
    Then The todo third should have status todo
    Given I click the todo first
    Given I click the todo second
    Given I click the todo third
    Then The todo first should have status doing
    Then The todo second should have status doing
    Then The todo third should have status doing
    Given I click the todo first
    Given I click the todo second
    Given I click the todo third
    Then The todo first should have status done
    Then The todo second should have status done
    Then The todo third should have status done
    Given I click the todo first
    Given I click the todo second
    Given I click the todo third
    Then I should not see the todo first
    Then I should not see the todo second
    Then I should not see the todo third
