@sprint1
Feature: Show historical alarms
  As user
  I want to be able to show the historical alarms
  of a unit to view their problems

  Background:
    Given the following organization:
      | id | name           | type    |
      | 20 | MyOrganization | company |
    And [show_historical_alarms] I'm logged as user ID 20 with organization ID 20
    And the following facility:
      | id | name           | location          | organization_id |
      | 20 | Sala principal | Cubierta exterior |              20 |
    And the following unit:
      | id | name  | location | refrigerant | mark | facility_id |
      | 20 | unit1 | LOCATION | R410A       | MARK |          20 |
    And the following reading:
    | id | unit_id | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    | 20 |      20 |                 0  |               -3 |                -8 |                 -3 |                 -2 |                   0 |        20 |        20 |        20 |
    And the following alarms:
    | id | title                   | description   | active | unit_id | reading_id |
    |  1 | low_discharge_pressure  | low discharge |      1 |      20 |         20 |
    |  2 | low_suction_pressure    | low suction   |      1 |      20 |         20 |
    |  3 | low_in_temp_condenser   | low in cond   |      1 |      20 |         20 |
    |  4 | low_out_temp_condenser  | low out cond  |      1 |      20 |         20 |
    |  5 | low_in_temp_evaporator  | low in evap   |      1 |      20 |         20 |
    |  6 | low_out_temp_evaporator | low out evap  |      1 |      20 |         20 |

  Scenario: Show historical alarms
    When I show historical alarms of last 6 alarms of unit ID 20
    Then I should receive 6 alarms and 200 as status code

  Scenario: Show historical alarms with limit
    When I show historical alarms of last 4 alarms of unit ID 20
    Then I should receive 4 alarms and 200 as status code

  Scenario: Show historial alarms without explicit limit
    When I show historical alarms of unit ID 20
    Then I should receive a 400 error with message "Limit is required"
