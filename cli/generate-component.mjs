import chalk from 'chalk';
import inquirer from 'inquirer';

import prompts from './prompts.mjs';
import { fetchCTFContentTypes, scaffoldComponentFiles } from './utils.mjs';

if (!process.env.CONTENTFUL_SPACE || !process.env.CONTENTFUL_ENVIRONMENT || !process.env.CONTENTFUL_DELIVERY_API) {
  console.log(
    chalk.whiteBright.bgRed.bold(
      "You'll need to provide CONTENTFUL_SPACE, CONTENTFUL_ENVIRONMENT and CONTENTFUL_DELIVERY_API in your .env.local file for the CLI to be functional."
    )
  );
  process.exit();
}

const contentTypesList = await fetchCTFContentTypes(
  process.env.CONTENTFUL_SPACE,
  process.env.CONTENTFUL_ENVIRONMENT,
  process.env.CONTENTFUL_DELIVERY_API,
  prompts.promptContentType.choices
);

inquirer
  .prompt([
    {
      ...prompts.promptContentType,
      choices: contentTypesList,
    },
  ])
  .then(({ promptContentType: contentType }) => {
    if (contentType === prompts.promptContentType.choices[0]) {
      inquirer.prompt([prompts.promptComponentName]).then(({ promptComponentName: componentName }) => {
        scaffoldComponentFiles(componentName, false);
      });
    } else {
      scaffoldComponentFiles(contentType, true);
    }
  });
