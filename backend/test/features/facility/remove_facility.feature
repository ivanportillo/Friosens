@sprint1
Feature: Remove a facility
  As an administrator
  I want to be able to remove facilities
  to when it's not necessary anymore

  Background:
    Given [remove-facility] I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    | 20 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    Given the following facility:
    | id | name    | location | user_id |
    | 20 | Entrada | Cubierta |      20 |
    Given the following unit:
    | name              | refrigerant | facility_id |
    | Planta enfriadora |       R410A |          20 |

  Scenario: Remove an existing facility
    When I remove the facility with ID 20
    Then facility with ID 20 shouldn't exist
    And shouldn't exist any unit with facility ID 20

  Scenario: Remove a facility that does not exist
    When I remove the facility with ID 3
    Then I should receive a Not Found error with code 404 and message "Facility not found"
