@sprint1
Feature: Register a reading
  As measuring device
  I want to be able to register readings to track a unit

  Background:
    Given the following facility:
    | id | name           | location          | organization_id |
    | 20 | Sala principal | Cubierta exterior |              20 |
    And the following unit:
    | id | name  | location | refrigerant | mark | facility_id |
    | 20 | unit1 | LOCATION | R410A       | MARK |          20 |


  Scenario: Register reading
    Given [register-reading] I'm logged as measuring device of unit ID 20
    When I register to the unit ID 1 the following reading:
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 7  |                4 |                30 |                 12 |                 10 |                  15 |        12 |        12 |        12 |
    Then I should receive response with message "Reading registered" and status code 200
    And unit ID 20 should have a reading

  Scenario: Register reading without having token
    Given I'm not logged as measuring device
    When I register to the unit ID 1 the following reading:
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 7  |                4 |                30 |                 12 |                 10 |                  15 |        12 |        12 |        12 |
    Then I should receive response with error "Token is required" and status code 401