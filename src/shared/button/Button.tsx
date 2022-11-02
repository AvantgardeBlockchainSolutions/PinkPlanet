import { css } from 'styled-components'
import { colors, screenSizes } from '../styles/theme'
import styled from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  padding: 10px;
  font-size: 14px;
  background: ${colors.themeBackground};
  box-shadow: 0px 0px 10px #00000029;
  border: 1px solid ${colors.borderColor};
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  width: 100%;
  outline: none;

  &:disabled {
    background: ${colors.themeBackground};
    cursor: initial;
    opacity: 0.2;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    font-size: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
  }
`

export const Button = styled.button<any>`
  ${buttonStyles}
`
