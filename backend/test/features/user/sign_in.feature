@sprint1
Feature: Sign in
  As user or administrator
  I want to be able to sign in to access to the system

  Background:
    Given there is the following users:
    | id | first_name | last_name | enabled | admin | email            | password | salt |
    |  1 | Iván       | Portillo  | 1       | 1     | i32polei@uco.es  | pass     | salt |
    |  2 | Disabled   | User      | 0       | 0     | disabled@user.es | pass     | salt |

  Scenario: Sign in with a valid user
    When I sign in with email "i32polei@uco.es" and password "pass"
    Then I should receive a confirm message and a token

  Scenario: Sign in using a incorrect password
    When I sign in with email "i32polei@uco.es" and password "badPass"
    Then I should receive an Unauthorized error with code 401 and message "Incorrect password"

  Scenario: Sign in using a invalid user
    When I sign in with email "bad@user.es" and password "badPass"
    Then I should receive an Unauthorized error with code 401 and message "Invalid user"

  Scenario: Sign in using a disabled user
    When I sign in with email "disabled@user.es" and password "pass"
    Then I should receive an Unauthorized error with code 401 and message "User disabled"
