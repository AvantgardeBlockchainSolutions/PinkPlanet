import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const SwitchContainer = styled.div`
  position: relative;
  width: 50px;
  height: 20px;
  box-sizing:border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 80px;
    height: 34px;
  }
`
export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  background: #070408;
  border: 1px solid ${colors.borderColor};
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px #1C1B1B66;
  &:after {
    top: -6px;
    left: -2px;
    position: absolute;
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 20px;
    background: #05170C;
    box-shadow: 0px 0px 10px #00000080;
    border: 1px solid ${colors.borderColor};
    transition: 0.3s;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 40px;
      height: 40px;
      background: #0B0B0B 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 10px #00000080;
      border: 1px solid #FFFFFF26;
      border-radius: 100px;
    }
    @media (max-width: ${screenSizes.mediaM}px) {
      width: 26px;
      height: 26px;
      background: #0A0A0A 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 10px #00000080;
      border: 1px solid #FFFFFF26;
      border-radius: 100px;
    }
  }
  &:hover:after {
    background: #05170C;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 80px;
    height: 34px;
    background: #000000 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 15px #1C1B1B66;
    border: 1px solid #FFFFFF26;
    border-radius: 100px;
  }
  @media (max-width: ${screenSizes.mediaM}px) {
    width: 50px;
    height: 20px;
    background: #000000 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 15px #1C1B1B66;
    border: 1px solid #FFFFFF26;
    border-radius: 100px;
  }
`
export const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 20px;
  transition: 0.3s;
  &:checked + ${SwitchLabel} {
    background: transparent linear-gradient(180deg, #55FF76 0%, #27AC40 100%) 0% 0% no-repeat padding-box;
    &::after {
      margin-left: 25px;
      left: 0px;
      background: #FFFFFF;
      @media (min-width: ${screenSizes.mediaM}px) {
        margin-left: 40px;
      }
    }
  }
`
