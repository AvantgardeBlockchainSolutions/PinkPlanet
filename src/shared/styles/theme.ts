import { createGlobalStyle } from 'styled-components'
import MontserratBlack from 'assets/fonts/Montserrat-Black.ttf'
import MontserratExBold from 'assets/fonts/Montserrat-ExtraBold.ttf'
import MontserratBold from 'assets/fonts/Montserrat-Bold.ttf'
import Montserrat from 'assets/fonts/Montserrat-SemiBold.ttf'
import MontserratMedium from 'assets/fonts/Montserrat-Medium.ttf'
import MontserratRegular from 'assets/fonts/Montserrat-Regular.ttf'
import MontserratThin from 'assets/fonts/Montserrat-Thin.ttf'
import MontserratLight from 'assets/fonts/Montserrat-Light.ttf'
import MontserratExLight from 'assets/fonts/Montserrat-ExtraLight.ttf'

export interface Colors {
  themeBackground: string
  white: string
  background: string
  transBackground: string
  hoverRowBg: string
  hoverSwitchBg: string
  borderColor: string
  secondaryBorder: string
  yellow: string
  yellowTransBg: string
  yellowTransHover: string
  lightGreen: string
  green: string
  greenBackground: string
  darkGreenBackground: string
  darkGreen: string
  red: string
  redTransBg: string
  redTransHover: string
  redBackground: string
  darkRedBackground: string
  blue: string
  lightBlue: string
  blueTransBg: string
  blueTransHover: string
  blueBackground: string
  darkBlueBackground: string
  grey: string
  darkGrey: string
  black: string
  inputBg: string
  purple: string
}

export const colors: Colors = {
  themeBackground: '#000000',
  background: '#16102F',
  transBackground: 'rgba(22,16,47, 0.1)',
  white: '#FFFFFF',
  borderColor: '#FFFFFF26',
  blue: '#3037DA',
  lightBlue: '#55B7FF',
  blueTransBg: '#55B7FF33',
  blueTransHover: 'rgba(85, 183, 255, 0.3)',
  lightGreen: '#55FF76',
  green: '#27AC40',
  hoverRowBg: '#271258',
  hoverSwitchBg: '#1C1731',
  secondaryBorder: 'rgba(112, 112, 112, 0.15)',
  yellow: '#FFE555',
  yellowTransBg: 'rgba(255,229,85, 0.2)',
  yellowTransHover: 'rgba(255,229,85, 0.3)',
  greenBackground: '#2A414C',
  darkGreenBackground: '#031923',
  darkGreen: '#73BB59',
  red: '#FF5555',
  redTransBg: 'rgba(255,85,85, 0.2)',
  redTransHover: 'rgba(255,85,85, 0.3)',
  redBackground: '#FF555533',/*'#4C2143',*/
  darkRedBackground: '#35032b',
  blueBackground: '#233054',
  darkBlueBackground: '#0f2152',
  grey: '#00000033',
  darkGrey: '#707070',
  black: '#000000',
  inputBg: '#080808',
  purple: '#9D55FF'
}

export interface ThemeStarter {
  [propName: string]: string | undefined
  themeBackground: string
  white: string
  background: string
  transBackground: string
  hoverRowBg: string
  hoverSwitchBg: string
  borderColor: string
  secondaryBorder: string
  yellow: string
  yellowTransBg: string
  lightGreen: string
  green: string
  greenBackground: string
  darkGreenBackground: string
  darkGreen: string
  red: string
  redTransBg: string
  redBackground: string
  darkRedBackground: string
  blue: string
  lightBlue: string
  blueTransBg: string
  blueBackground: string
  darkBlueBackground: string
  grey: string
  darkGrey: string
  black: string
  inputBg: string
  purple: string
}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
  white: colors.white,
  background: colors.background,
  transBackground: colors.transBackground,
  hoverRowBg: colors.hoverRowBg,
  hoverSwitchBg: colors.hoverSwitchBg,
  borderColor: colors.borderColor,
  secondaryBorder: colors.secondaryBorder,
  yellow: colors.yellow,
  yellowTransBg: colors.yellowTransBg,
  lightGreen: colors.lightGreen,
  green: colors.green,
  greenBackground: colors.greenBackground,
  darkGreenBackground: colors.darkGreenBackground,
  darkGreen: colors.darkGreen,
  red: colors.red,
  redTransBg: colors.redTransBg,
  redBackground: colors.redBackground,
  darkRedBackground: colors.darkRedBackground,
  blue: colors.blue,
  lightBlue: colors.lightBlue,
  blueTransBg: colors.blueTransBg,
  blueBackground: colors.blueBackground,
  darkBlueBackground: colors.darkBlueBackground,
  grey: colors.grey,
  darkGrey: colors.darkGrey,
  black: colors.black,
  inputBg: colors.inputBg,
  purple: colors.purple
}

export interface ScreenSizes {
  mediaXS: number
  mediaS: number
  mediaM: number
  mediaL: number
  mediaXL: number
  mediaXLL: number
  mediaXXL: number
  mediaXXXX: number
}
export const screenSizes: ScreenSizes = {
  mediaXS: 360,
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXLL: 1440,
  mediaXXL: 1600,
  mediaXXXX: 1800,
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: MontserratBlack;
    src:url(${MontserratBlack}) format('truetype');
  }
  @font-face {
    font-family: MontserratExBold;
    src:url(${MontserratExBold}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url(${MontserratBold}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src:url(${Montserrat}) format('truetype');
  }
  @font-face {
    font-family: MontserratMedium;
    src: url(${MontserratMedium}) format('truetype');
  }
  @font-face {
    font-family: MontserratRegular;
    src: url(${MontserratRegular}) format('truetype');
  }
  @font-face {
    font-family: MontserratThin;
    src: url(${MontserratThin}) format('truetype');
  }
  @font-face {
    font-family: MontserratLight;
    src: url(${MontserratLight}) format('truetype');
  }
  @font-face {
    font-family: MontserratExLight;
    src: url(${MontserratExLight}) format('truetype');
  }
  body {
    background: ${colors.themeBackground} !important;
    zoom: 90%;
  }
`