@sprint1 @working
Feature: Create organization
  As administrator
  I want to be able to create a organization
  to organize users

  Background:
    Given [create-organization] I'm logged in as an administrator

    Scenario: Create a organization
      When I create the following organization:
      | name           | type    |
      | MyOrganization | company |
      Then I should receive a response with status code 200 and "Organization created" as message
      And should exist a organization with name "MyOrganization"

    Scenario: Create a organization without name
      When I create the following organization:
      | type    |
      | company |
      Then I should receive a error with status code 400 and "Name is required" as message

  Scenario: Create a organization without name
    When I create the following organization:
    | name           |
    | MyOrganization |
    Then I should receive a error with status code 400 and "Type is required" as message

  Scenario: Create a organization with bad type
    When I create the following organization:
    | name           | type    |
    | MyOrganization | badtype |
    Then I should receive a error with status code 400 and "Invalid type" as message