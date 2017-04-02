@sprint1
Feature: Remove a facility
  As an administrator
  I want to be able to remove facilities
  to when it's not necessary anymore

  Background:
    Given I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    Given the following facility:
    | id | name    | location | user_id |
    |  2 | Entrada | Cubierta |       1 |
    Given the following unit:
    | name              | refrigerant | facility_id |
    | Planta enfriadora |       R410A |           2 |

  Scenario: Remove an existing facility
    When I remove the facility with ID 2
    Then It shouldn't appear when I search the facilities of user with ID 1
    And It shouldn't appear any unit with facility ID 2

  Scenario: Remove a facility that does not exist
    When I remove the facility with ID 3
    Then I should receive a Not Found error with code 404 and message "Facility not found"
