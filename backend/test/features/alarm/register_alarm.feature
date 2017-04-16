@sprint1 @working
Feature: Register alarm
  As system
  I want to be able to register an alarm when a malfunction is detected

  Background:
    Given the following organization:
    | id | name           | type    |
    | 20 | MyOrganization | company |
    And the following facility:
    | id | name           | location          | organization_id |
    | 20 | Sala principal | Cubierta exterior |              20 |
    And the following unit:
    | id | name  | location | refrigerant | mark | facility_id |
    | 20 | unit1 | LOCATION | R410A       | MARK |          20 |
    And [register-alarm] I'm logged as measuring device of unit ID 20

  Scenario: Register reading with anormal values
    When I register the following reading to the unit ID 20 :
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 -1  |              11 |                -1 |                 11 |                 -1 |                  11 |         2 |        2  |        2  |
    Then unit ID 20 should have 6 alarms

  Scenario: Register reading with normal values
    When I register the following reading to the unit ID 20 :
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 7  |                4 |                 2 |                  5 |                 10 |                   9 |         5 |         5 |         5 |
    Then unit ID 20 shouldn't have any alarm

  Scenario: Register reading with values out of range
    When I register the following reading to the unit ID 20 :
    | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |                 31 |               31 |               101 |                101 |                101 |                 101 |        -1 |        -1 |        -1 |
    Then unit ID 20 should have 9 alarms