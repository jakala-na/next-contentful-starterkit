const prompts = {
  promptContentType: {
    message: 'Please choose a CTF content type to generate the component for:',
    choices: ['---No content type yet---'],
    pageSize: 10,
  },
  promptComponentName: {
    message: 'Please input the component name (use kebab case):',
    required: true,
  },
  promptNewUIComponent: {
    default: true,
    message: 'Would you like to generate a matching UI component for your content type?',
  },
};

export default prompts;
