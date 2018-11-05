Feature: The Title

  I want to see the todo list owners name in the title

  Scenario Outline: <user>s todo list
    Given I open the todo list for <user>
    Then I should see the title todos for "<user>"

  Examples:
    | user |
    | Oliver |
    | poo |
    | the moon |
