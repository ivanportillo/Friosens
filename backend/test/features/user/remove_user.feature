@sprint1
Feature: Remove user
  As administrator
  I want to be able to remove user when it is no longer necessary

  Background:
    Given [remove-user] I'm logged in as an administrator
    And there is the following user:
    | id | first_name | last_name | enabled | admin | email           | password | salt | organization_id |
    | 20 | Iván       | Portillo  | 1       | 0     | i32polei@uco.es | pass     | salt |              20 |

  Scenario: Remove a user
    When I remove the user ID 20
    Then I should receive a response with 200 as status code and "User removed" as message

  Scenario: Remove a nonexistent user
    When I remove the user ID 21
    Then I should receive a error 404 with message "User not found"