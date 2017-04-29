@sprint1
Feature: Show organizations
  As administrator
  I want to be able to show organizations of my system

  Background:
    Given [show-organizations] I'm logged as administrator

  Scenario: Show organizations when there are 0 organizations
    When I show the organizations
    Then I should receive 0 organizations and a 200 as status code

  Scenario: Show organizations when there are 20 organizations
    Given the following organizations:
    | id | name             | type    |
    |  1 | MyOrganization1  | company |
    |  2 | MyOrganization2  | company |
    |  3 | MyOrganization3  | company |
    |  4 | MyOrganization4  | company |
    |  5 | MyOrganization5  | company |
    |  6 | MyOrganization6  | company |
    |  7 | MyOrganization7  | company |
    |  8 | MyOrganization8  | company |
    |  9 | MyOrganization9  | company |
    | 10 | MyOrganization10 | company |
    | 11 | MyOrganization11 | company |
    | 12 | MyOrganization12 | company |
    | 13 | MyOrganization13 | company |
    | 14 | MyOrganization14 | company |
    | 15 | MyOrganization15 | company |
    | 16 | MyOrganization16 | company |
    | 17 | MyOrganization17 | company |
    | 18 | MyOrganization18 | company |
    | 19 | MyOrganization19 | company |
    | 20 | MyOrganization20 | company |
    When I show the organizations
    Then I should receive 20 organizations and a 200 as status code
