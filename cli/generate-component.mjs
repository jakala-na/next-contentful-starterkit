import chalk from 'chalk';
import { select, input, confirm } from '@inquirer/prompts';

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

const existentContentType = await select({
  ...prompts.promptContentType,
  choices: contentTypesList,
});
const confirmNewUIComponent = await confirm(prompts.promptNewUIComponent);

if (existentContentType === prompts.promptContentType.choices[0]) {
  const newContentType = await input(prompts.promptComponentName);
  scaffoldComponentFiles(newContentType, false, confirmNewUIComponent);
} else {
  scaffoldComponentFiles(existentContentType, true, confirmNewUIComponent);
}
