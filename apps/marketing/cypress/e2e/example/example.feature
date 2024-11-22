Feature: Example

    Example feature testing external site

    Scenario: Search Bar
        Given I visit duckduckgo.com
        When I should see a search bar

    @a11y
    Scenario: A11y testing
        Given I visit duckduckgo.com
        When I init axe
        Then I run axe
