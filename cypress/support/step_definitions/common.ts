import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I init axe", () => {
  cy.injectAxe();
});

Then("I run axe", () => {
  cy.checkA11y();
});

Then("display matches snapshot", () => {
  cy.matchImageSnapshot();
});
