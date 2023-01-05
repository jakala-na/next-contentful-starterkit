Feature: Link component

  Scenario: Internal link
    Given link with text "Google" and url "https://google.com"
    And I init axe
    Then display matches snapshot
    And I run axe

