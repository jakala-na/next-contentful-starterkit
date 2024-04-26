import { theme } from './tailwind.config';

interface ColorConfigInterface {
  headlineColor: string;
  textColor: string;
  backgroundColor: string;
  buttonColor: 'default' | 'secondary';
}

export const colorConfigs: { [key: string]: ColorConfigInterface } = {
  'palette-1. White (#FFFFFF)': {
    headlineColor: theme.colors.primaryDark,
    textColor: theme.colors.secondaryDark,
    backgroundColor: theme.colors.white,
    buttonColor: 'default',
  },
  'palette-2. White Smoke (#FCFCFC)': {
    headlineColor: theme.colors.primaryDark,
    textColor: theme.colors.secondaryDark,
    backgroundColor: theme.colors.whiteSmoke,
    buttonColor: 'default',
  },
  'palette-3. Light Gray (#F4F4F4)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.lightGray,
    buttonColor: 'default',
  },
  'palette-4. Gray (#EAEAEA)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.gray,
    buttonColor: 'default',
  },
  'palette-5. Steel Gray (#BBBBBB)': {
    headlineColor: theme.colors.black,
    textColor: theme.colors.black,
    backgroundColor: theme.colors.steelGray,
    buttonColor: 'default',
  },
  'palette-6. Dark Gray (#797979)': {
    headlineColor: theme.colors.white,
    textColor: theme.colors.white,
    backgroundColor: theme.colors.darkGray,
    buttonColor: 'default',
  },
  'palette-7. Black (#000000)': {
    headlineColor: theme.colors.white,
    textColor: theme.colors.steelGray,
    backgroundColor: theme.colors.black,
    buttonColor: 'secondary',
  },
};

export const getColorConfigFromPalette = (
  palette: string,
): ColorConfigInterface => {
  if (colorConfigs[`palette-${palette}`] === undefined) {
    return colorConfigs['palette-1. White (#FFFFFF)'];
  }

  return colorConfigs[`palette-${palette}`];
};
