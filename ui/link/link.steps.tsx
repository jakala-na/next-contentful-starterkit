import { Given } from "@badeball/cypress-cucumber-preprocessor";
import React from "react";
import Link from "./link";
import { LinkProps } from "./link";

Given(
  "link with text {string} and url {string}",
  (text: string, url: string) => {
    const link = {
      linkUrl: url,
      linkText: text,
    };
    const props = { link } as LinkProps;
    cy.mount(<Link {...props} />);
  }
);
