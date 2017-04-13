@sprint1 @working
Feature: Show facilities
  As user
  I want to be able to show my facilities
  to have a global vision of my facilities

  Background:
    Given [show_facilities] I'm logged as user ID 15 with organization ID 15
    And the following facilities:
    | id | name           | location          | organization_id |
    |  1 | Sala principal | Cubierta exterior |              15 |
    |  2 | Vestibulo      | Cubierta exterior |              15 |
    |  3 | Taller         | Sala de máquinas  |              15 |

  Scenario: Show facilities
    When I get my facilities
    Then I should receive 3 facilities and 200 as status code