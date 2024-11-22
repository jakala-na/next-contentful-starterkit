import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { devServer } from '@cypress/webpack-dev-server';
import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

const webpackConfig = (cypressConfig: Cypress.PluginConfigOptions) => {
  return {
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader',
              options: { transpileOnly: true },
            },
          ],
        },
        {
          test: /\.feature$/,
          use: [
            {
              loader: '@badeball/cypress-cucumber-preprocessor/webpack',
              options: cypressConfig,
            },
          ],
        },
      ],
    },
  };
};

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      addMatchImageSnapshotPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },

  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'next',
        webpackConfig: webpackConfig(devServerConfig.cypressConfig),
      });
    },
    specPattern: '**/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      addMatchImageSnapshotPlugin(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
