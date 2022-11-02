import { useSelector } from 'react-redux'
import { ModalCont, FlexSBCont, TitleText, InfoSmallText, TransInfoCont, TransImgCont, TransImg, TransLink, PrimaryBtn, PrimaryGreenBtn } from './style'
import CrossIcon from 'assets/icons/blue-cross-icon.png'
import WhiteCrossIcon from 'assets/icons/white-cross.svg'
import AquaGif from 'assets/gif/aqua.gif'

const TransactionInfo = (props: any) => {
    const selector = useSelector((state: any) => state)
    const { setShowTransModal, transactionLink } = props
    const { currentPlanet } = selector.planet

    return (
        <ModalCont>
            <TransInfoCont>
                <FlexSBCont>
                    <TitleText>Transaction Submitted</TitleText>
                    <img className="cross-icon" src={currentPlanet === 'green' ? WhiteCrossIcon : CrossIcon} alt="" onClick={() => setShowTransModal(false)} />
                </FlexSBCont>
                <TransImgCont>
                    <TransImg src={AquaGif} alt="" />
                    <InfoSmallText>
                        View on{' '}
                        <TransLink href={transactionLink} target="_blank" rel="noreferrer" currPlanet={currentPlanet}>
                            BSC scan
                        </TransLink>
                    </InfoSmallText>
                </TransImgCont>
                {currentPlanet === 'green' ?
                    <PrimaryGreenBtn onClick={() => setShowTransModal(false)}>Close</PrimaryGreenBtn> :
                    <PrimaryBtn onClick={() => setShowTransModal(false)}>Close</PrimaryBtn>
                }
            </TransInfoCont>
        </ModalCont>
    )
}

export default TransactionInfo
