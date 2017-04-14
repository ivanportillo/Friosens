@sprint1
Feature: Remove organization
  As administrator
  I want to be able to remove a organization
  when it is not necessary anymore

  Background:
    Given [remove-organization] I'm logged as administrator
    And the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |

  Scenario: Remove a organization without users
    When I remove the organization ID 20
    Then I should receive a message "Organization removed" and 200 as status code
    And Organization ID 20 should not exist

  Scenario: Remove a organization with users but without facilities
    Given there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt | organization_id |
    | 20 | Iván       | Portillo  | 1       | 0     | i32polei@uco.es | pass     | salt |              20 |
    When I remove the organization ID 20
    Then I should receive a message "Organization removed" and 200 as status code
    And Organization ID 20 should not exist and neither user ID 20

  Scenario: Remove a organization with facilities but without users
    Given the following facility:
    | id | name    | location | organization_id |
    | 20 | Entrada | Cubierta |              20 |
    When I remove the organization ID 20
    Then I should receive a message "Organization removed" and 200 as status code
    And Organization ID 20 should not exist and neither facility ID 20

  Scenario: Remove a organization with facilities and users
    Given there is the following user:
    | id | first_name | last _name | enabled | admin | email           | password | salt | organization_id |
    | 20 | Iván       | Portillo  | 1       | 0     | i32polei@uco.es | pass     | salt |              20 |
    | 21 | Usuario    | Apellidos | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
    And the following facilities:
    | id | name      | location | organization_id |
    | 20 | Entrada   | Cubierta |              20 |
    | 21 | Vestibulo | Cubierta |              20 |
    When I remove the organization ID 20
    Then I should receive a message "Organization removed" and 200 as status code
    And Organization ID 20 should not exist and neither facilities ID 20 ID 21 nor users ID 20 ID 21

  Scenario: Remove a organization that does not exist
    When I remove the organization ID 18
    Then I should receive a error "Organization not found" and 404 as status code

