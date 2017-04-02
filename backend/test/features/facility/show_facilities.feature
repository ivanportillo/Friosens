@sprint1
Feature: Show facilities
  As user
  I want to be able to show my facilities
  to have a global vision of my facilities

  Background:
    Given I'm logged as user ID 1
    And the following facilities:
    | id | name           | location          | user_id |
    |  1 | Sala principal | Cubierta exterior |       1 |
    |  2 | Vestibulo      | Cubierta exterior |       1 |
    |  3 | Taller         | Sala de máquinas  |       1 |

  Scenario: Show facilities
    When I show my facilities
    Then I should receive 3 facilities and 200 as status code