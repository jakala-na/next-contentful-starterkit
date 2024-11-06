const prompts = {
  promptContentType: {
    name: 'promptContentType',
    type: 'rawlist',
    message: 'Please choose a CTF content type to generate the component for:',
    choices: ['---No content type yet---'],
  },
  promptComponentName: {
    name: 'promptComponentName',
    type: 'input',
    message: 'Please input the component name (use kebab case):',
    validate: (input) => {
      if (!input || input === '') {
        return 'Please provide a component name.';
      } else {
        return true;
      }
    },
  },
};

export default prompts;
