@sprint1
Feature: Show users
  As administrator
  I want to be able to show users of the system

  Background:
    Given [show-users] I'm logged in as an administrator

    Scenario: Show users when there are 1 users (admin user)
      When I show the users
      Then I should receive 1 users and 200 as status code

    Scenario: Show users when there are 21 users (20 users + admin)
      Given there is the following users:
        | id | first_name  | last_name   | enabled | admin | email           | password | salt | organization_id |
        | 20 | Usuario1    | Apellido1   | 1       | 0     | i32polei@uco.es | pass     | salt |              20 |
        | 21 | Usuario2    | Apellido2   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 22 | Usuario3    | Apellido3   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 23 | Usuario4    | Apellido4   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 24 | Usuario5    | Apellido5   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 25 | Usuario6    | Apellido6   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 26 | Usuario7    | Apellido7   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 27 | Usuario8    | Apellido8   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 28 | Usuario9    | Apellido9   | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 29 | Usuario10   | Apellido10  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 30 | Usuario11   | Apellido11  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 31 | Usuario12   | Apellido12  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 32 | Usuario13   | Apellido13  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 33 | Usuario14   | Apellido14  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 34 | Usuario15   | Apellido15  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 35 | Usuario16   | Apellido16  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 36 | Usuario17   | Apellido17  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 37 | Usuario18   | Apellido18  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 38 | Usuario19   | Apellido19  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
        | 39 | Usuario20   | Apellido20  | 1       | 0     | mail@uco.es     | pass     | salt |              20 |
      When I show the users
      Then I should receive 21 users and 200 as status code