@sprint1
Feature: Show facilities
  As user
  I want to be able to show my facilities
  to have a global vision of my facilities

  Background:
    Given [show_facilities] I'm logged as user ID 15 with organization ID 15

  Scenario: Show 3 facilities
    Given the following facilities:
      | id | name           | location          | organization_id |
      |  1 | Sala principal | Cubierta exterior |              15 |
      |  2 | Vestibulo      | Cubierta exterior |              15 |
      |  3 | Taller         | Sala de máquinas  |              15 |
    When I get my facilities
    Then I should receive 3 facilities and 200 as status code

  Scenario: Show 1 facility
    Given the following facilities:
      | id | name           | location          | organization_id |
      |  1 | Sala principal | Cubierta exterior |              15 |
    When I get my facilities
    Then I should receive 1 facilities and 200 as status code

  Scenario: Show 0 facilities
    When I get my facilities
    Then I should receive 0 facilities and 200 as status code