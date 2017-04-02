@sprint1
Feature: Show historical alarms
  As user
  I want to be able to show the historical alarms
  of a unit to view their problems

  Background:
    Given I'm logged as user ID 1
    And there is the following facility:
    | id | name           | location          | user_id |
    |  1 | Sala principal | Cubierta exterior |       1 |
    And there is the following unit:
    | id | name  | location | refrigerant | mark | facility_id |
    |  1 | unit1 | LOCATION | R410A       | MARK |           1 |
    And there is the following reading:
    | id | discharge_pressure | suction_pressure | in_temp_condenser | out_temp_condenser | in_temp_evaporator | out_temp_evaporator | current_1 | current_2 | current_3 |
    |  1 |                 0  |               -3 |                -8 |                 -3 |                 -2 |                   0 |        20 |        20 |        20 |
    And there is the following alarms:
    | id | title                  | description   | active | unit_id | reading_id |
    |  1 | LOW DISCHARGE PRESSURE | low discharge |      1 |       1 |          1 |
    |  2 | LOW SUCTION PRESSURE   | low suction   |      1 |       1 |          1 |
    |  3 | LOW TEMP IN COND       | low in cond   |      1 |       1 |          1 |
    |  4 | LOW TEMP OUT COND      | low out cond  |      1 |       1 |          1 |
    |  5 | LOW TEMP IN EVAP       | low in evap   |      1 |       1 |          1 |
    |  6 | LOW TEMP OUT EVAP      | low out evap  |      1 |       1 |          1 |
    |  7 | HIGH CURRENT 1         | high curr1    |      1 |       1 |          1 |
    |  8 | HIGH CURRENT 2         | high curr2    |      1 |       1 |          1 |
    |  9 | HIGH CURRENT 3         | high curr3    |      1 |       1 |          1 |

  Scenario: Show historical alarms
    When I show historical alarms of last eight alarms
    Then I should receive 8 alarms and 200 as status code
