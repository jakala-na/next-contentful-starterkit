Feature: Link component

  Scenario: Link with text and url renders correctly
    Given link with text "Google" and url "https://google.com"
    And I init axe
    Then display matches snapshot
    And I run axe
