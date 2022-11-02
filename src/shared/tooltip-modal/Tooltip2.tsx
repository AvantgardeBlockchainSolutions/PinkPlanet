import {
  ModalCont,
  FlexSBCont,
  TitleText,
  InfoBox,
  MessageText,
  Button
} from './style'
import CustomModal2 from 'shared/custom-modal/CustomModal2'
import { docsLink } from 'service/global-constant'

const TooltipModal2 = (props: any) => {
  const { title, message, toggleToolTipModal, showToolTip, infoPopUpContainer } = props
  const redirectToDocs = () => {
    window.open(docsLink);
  }
  return (
    <CustomModal2 show={showToolTip} toggleModal={toggleToolTipModal} infoPopUpContainer={"toolTip"}>
      <ModalCont className='tooltip-container'>
        <FlexSBCont>
          <InfoBox className='tooltip-logo'>
            <div className='circleOne'></div>
            <div className='circleTwo'></div>
          </InfoBox>
        </FlexSBCont>
        <TitleText className='title'>{title}</TitleText>
        <MessageText>{message}</MessageText>
        <FlexSBCont className='btnContainer'>
          <Button className='btnCapsule learnMore' onClick={() => redirectToDocs()}>Learn More</Button>
          <Button className='btnCapsule close' onClick={() => toggleToolTipModal()}>
            Close
          </Button>
        </FlexSBCont> 
      </ModalCont>
    </CustomModal2>
  )
}

export default TooltipModal2
