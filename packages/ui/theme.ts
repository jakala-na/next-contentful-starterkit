import sharedConfig from '@repo/tailwind-config';

const { theme } = sharedConfig;

interface ColorConfigInterface {
  headlineColor: string;
  textColor: string;
  backgroundColor: string;
  buttonColor: 'default' | 'secondary';
}

export const colorConfigs = {
  '1. White (#FFFFFF)': {
    headlineColor: theme.colors.primaryDark,
    textColor: theme.colors.secondaryDark,
    backgroundColor: theme.colors.white,
    buttonColor: 'default',
  },
  '2. White Smoke (#FCFCFC)': {
    headlineColor: theme.colors.primaryDark,
    textColor: theme.colors.secondaryDark,
    backgroundColor: theme.colors.whiteSmoke,
    buttonColor: 'default',
  },
  '3. Light Gray (#F4F4F4)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.lightGray,
    buttonColor: 'default',
  },
  '4. Gray (#EAEAEA)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.gray,
    buttonColor: 'default',
  },
  '5. Steel Gray (#BBBBBB)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.steelGray,
    buttonColor: 'default',
  },
  '6. Dark Gray (#797979)': {
    headlineColor: theme.colors.white,
    textColor: theme.colors.white,
    backgroundColor: theme.colors.darkGray,
    buttonColor: 'default',
  },
  '7. Black (#000000)': {
    headlineColor: theme.colors.white,
    textColor: theme.colors.steelGray,
    backgroundColor: theme.colors.black,
    buttonColor: 'secondary',
  },
} satisfies Record<string, ColorConfigInterface>;

export const getColorConfigFromPalette = (palette: string): ColorConfigInterface => {
  if (palette in colorConfigs) {
    return colorConfigs[palette as keyof typeof colorConfigs];
  }
  return colorConfigs['1. White (#FFFFFF)'];
};
