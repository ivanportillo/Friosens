Feature: Update facility
  As an administrator
  I want to be able to modify facilities to correct wrong data
  or change data that has been changed

  Background:
    Given I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es | pass     | salt |
    Given the following facility:
    | id | name    | location | user_id |
    |  2 | Entrada | Cubierta |       1 |

  Scenario: Update a facility
    When I update the name of facility with ID 2 by the following:
    |    name |         location |
    | Comedor | Sala de máquinas |
    Then facility should have the new properties: name "Comedor" and location "Sala de máquinas"
