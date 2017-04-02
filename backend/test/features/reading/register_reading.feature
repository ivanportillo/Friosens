@sprint1
Feature: Register a reading
  As measuring device
  I want to be able to register readings to track a unit

  Background:
    Given I'm logged as measuring device
    And there is the following facility:
    | id | name           | location          | user_id |
    |  1 | Sala principal | Cubierta exterior |       1 |
    And there is the following unit:
    | id | name  | location | refrigerant | mark | facility_id |
    |  1 | unit1 | LOCATION | R410A       | MARK |           1 |

  Scenario: Register reading
    When I register to the unit ID 1 the following reading:
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 7  |                4 |                30 |                 12 |                 10 |                  15 |        12 |        12 |        12 |
    Then unit ID 1 should have a reading