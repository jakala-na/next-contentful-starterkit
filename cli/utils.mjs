import * as fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';
import * as contentful from 'contentful';
import ora from 'ora';
import { Scaffold } from 'simple-scaffold';

export const pascalToHyphen = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

function hyphenToPascal(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/*
  Fetches all available CTF content types and returns an array with formatted IDs.
 */
export const fetchCTFContentTypes = async (spaceID, envID, token, contentTypesPlaceholder) => {
  const ctfClient = contentful.createClient({
    space: spaceID,
    environment: envID,
    accessToken: token,
  });
  const contentTypes = [...contentTypesPlaceholder];

  const spinner = ora(`Fetching content types for space ${spaceID}...`).start();

  await ctfClient
    .getContentTypes()
    .then((response) => {
      response.items.forEach((item) => {
        contentTypes.push(pascalToHyphen(item.sys.id));
      });
      spinner.succeed(chalk.green('Done!'));
    })
    .catch(() => {
      console.error();
      spinner.fail('Not able to fetch the content types.');
    });

  return contentTypes;
};

/*
  Generates component files using content type or custom input string.
  Updates mappings.ts with the new component.
 */
export const scaffoldComponentFiles = (contentType, updateMappings) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Scaffold component files.
  const config = {
    name: contentType,
    data: {
      ext: 'tsx',
    },
    templates: [path.join(__dirname, 'scaffolds', 'components'), path.join(__dirname, 'scaffolds', 'ui')],
    createSubFolder: true,
    output: (fullPath, baseDir, baseName) => {
      let outputPath = '../components';

      if (baseDir.includes('scaffolds/ui')) {
        outputPath = '../components/ui';
      }

      return path.join(__dirname, outputPath, contentType);
    },
  };

  const scaffold = Scaffold(config);

  // Update mappings.ts with our new component after a successful scaffold.
  if (updateMappings) {
    scaffold
      .then(() => {
        const mappingFilePath = path.join(__dirname, '../components/component-renderer/mappings.ts');
        const mappings = fs.readFileSync(mappingFilePath, 'utf-8').split('\n');
        // Add component import to the top of the file.
        mappings.unshift(
          `import { ${hyphenToPascal(contentType)} } from '#/components/${contentType}/${contentType}';`
        );
        // Add the new component to the mappings file.
        mappings.splice(-2, 0, `  ${hyphenToPascal(contentType)}: ${hyphenToPascal(contentType)},`);
        const updatedMappings = mappings.join('\n');
        fs.writeFileSync(mappingFilePath, updatedMappings, { encoding: 'utf-8' });
      })
      .catch(() => console.error);
  }
};
