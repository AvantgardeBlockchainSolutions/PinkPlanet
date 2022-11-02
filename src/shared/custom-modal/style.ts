import styled from 'styled-components'
import { screenSizes } from '../styles/theme'

interface ModalContProps {
  show: boolean
}

export const ModalContainer = styled.div<ModalContProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  float:left;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  @supports (-moz-appearance:none) {
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const ModalContainer2 = styled.div<ModalContProps>`
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  float:left;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  @supports (-moz-appearance:none) {
    background-color: rgba(0, 0, 0, 0.6);
  }
  &.toolTip {
    @media (max-width: ${screenSizes.mediaM}px) {
      align-items: end;
    }
  }
`
export const ModalContent2 = styled.div`
  z-index: 9999999;
  position: sticky;
  overflow: auto;
  max-height: 100%;
  width: 90%;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &.revisedMobileContainer{
    width:100% !important;
    transform: translate(-50%, 0%);
  }
  &.toolTip {
    @media (max-width: ${screenSizes.mediaM}px) {
      transform: none;
      width:100% !important;
      top: unset;
      left: unset;
      bottom: 0;
    }
  }
`

export const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  max-height: 100%;
  width: 90%;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &.revisedMobileContainer{
    width:100% !important;
    transform: translate(-50%, 0%);
  }
  &.toolTip {
    @media (max-width: ${screenSizes.mediaM}px) {
      transform: none;
      width:100% !important;
      top: unset;
      left: unset;
      bottom: 0;
    }
  }
`

export const ActionModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  max-height: 100%;
  width: 100%;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
