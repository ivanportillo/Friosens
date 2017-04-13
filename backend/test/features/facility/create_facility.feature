@sprint1
Feature: Create a facility
  As an administrator
  I want to be able to create facilities

  Background:
    Given [create-facility] I'm logged in as an administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |

  Scenario: Create a new facility
    When I create to the organization with ID 20 the following facility:
    | name           | location          |
    | Sala principal | Cubierta exterior |
    Then Organization with ID 20 should have one facility with name "Sala principal"

  Scenario: Create a facility without name
    When I create to the organization with ID 20 the following facility:
    | location          |
    | Cubierta exterior |
    Then the response is a validation error with code 400 and message "Name is required"
