import { makeFragmentData } from "../../gql";
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import React from "react";
import Link from "./link";
import { LinkItemFragmentDoc } from "#/gql/graphql";

Given(
  "link with text {string} and url {string}",
  (text: string, url: string) => {
    const link = {
      sys: {
        id: Cypress._.uniqueId(),
      },
      linkUrl: url,
      linkText: text,
    };

    cy.mount(<Link link={makeFragmentData(link, LinkItemFragmentDoc)} />);
  }
);
