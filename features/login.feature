Feature: Sauce Labs sample mobile app login

  Scenario Outline: As a user, I should be able to login with correct credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should be able to log in with correct credentials or see an error message saying <message>


    Examples:
      | username          | password     | message                                                      |
      | alice@example.com | 10203040     | Username and password do not match any user in this service. |  
      | 1@2.com           | f-o-o        | Username and password do not match any user in this service. |     
      |                   |              | Username is required                                         |
      | bob@example.com   |              | Password is required                                         |     
      | locked_out_user   | secret_sauce | Sorry, this user has been locked out.                        |
      | standard_user     | secret_sauce |                                                              |