import { useState, useEffect, Fragment } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { FooterWrapper, FooterSpaceCont, FooterCont, FooterItemCont, TitleImgBox, PlanetTitle, FooterTitle, FooterLink, FooterBgImg, FooterBgImgCont } from './style'
import { aquaEmailLink, auditLink, docsLink, MediumLink, telegramLink, twitterLink, aquaContractLink, githubLink, instLink, tokenomicsLink, aquaLink, gammaLink, burnAquaLink, claimGamaUrl, transLinkUrl } from 'service/global-constant'
import { notificationOpen, notificationClose } from "logic/action/notification.action";
import axios from 'axios';
const Footer = (props: any) => {
    const selector = useSelector((state: any) => state)
    const [claimLoading, setClaimLoading] = useState(false)
    const dispatch = useDispatch()
    const [showAirDrop, setAirDropLink] = useState(false)
    const { currentPlanet, planetIcon } = props
    useEffect(() => {
        const pathUrlArr: any = window.location.href.split('/')
        // console.log("path url ", pathUrlArr[pathUrlArr.length - 1])
        if (pathUrlArr[pathUrlArr.length - 1] === "lending") {
            setAirDropLink(true)
        }
      }, [props])
    
    const handleClaimGamma = async () => {
        const userAddress = selector.ethData.address
        if (!!userAddress) {
            try {
                setClaimLoading(true)
                const res = await axios.get(`${claimGamaUrl}${userAddress}`)
                if (!!res && typeof res !== 'undefined') {
        
                    if (res.data.success) {
                        handleNotification('success', "You have successfully claimed GAMMA!!", res.data.data.data.transactionHash)
                    }
                    else {
                        handleNotification('failed', res.data.data)
                    }
        
                }
        
            }
            catch (error) {
                handleNotification('failed', "unknown error please try again !!")
                setClaimLoading(false)
            }
            finally {
                setClaimLoading(false)
            }
        }
    
    }
    const handleNotification = (type: string, msg: string, hash?: any,) => {
        const linkUrl = !!hash ? `${transLinkUrl}${hash}` : ''
        let dataVal: any = ''
        if (type === 'success') {
          dataVal = {
            type: type,
            message: msg,
            link: linkUrl
          }
        }
        else {
          dataVal = {
            type: type,
            message: msg,
            link: ''
          }
        }
        dispatch(notificationClose())
        dispatch(notificationOpen(dataVal))
      }
    return (
        <FooterWrapper>
            <FooterSpaceCont />
            <FooterCont>
                <FooterBgImgCont>
                    <FooterBgImg src={planetIcon} alt="" />
                </FooterBgImgCont>
                <FooterItemCont>
                    <TitleImgBox>
                        <img src={planetIcon} alt="" />
                        <PlanetTitle>Planet</PlanetTitle>
                    </TitleImgBox>
                </FooterItemCont>
                <FooterItemCont>
                    <FooterTitle currPlanet={currentPlanet}>ABOUT</FooterTitle>
                    <FooterLink href={aquaEmailLink} target="_blank">Email Us</FooterLink>
                    <FooterLink href={docsLink} target="_blank">Docs</FooterLink>
                    {/* <FooterLink href={faqLink} target="_blank">FAQ</FooterLink> */}
                </FooterItemCont>
                <FooterItemCont>
                    <FooterTitle currPlanet={currentPlanet}>COMMUNITY</FooterTitle>
                    <FooterLink href={MediumLink} target="_blank">Medium</FooterLink>
                    <FooterLink href={telegramLink} target="_blank">Telegram</FooterLink>
                    <FooterLink href={twitterLink} target="_blank">Twitter</FooterLink>
                    <FooterLink href={instLink} target="_blank">Instagram</FooterLink>
                </FooterItemCont>
                <FooterItemCont>
                    <FooterTitle currPlanet={currentPlanet}>LEARN MORE</FooterTitle>
                    <FooterLink href={auditLink} target="_blank">Audit</FooterLink>
                    <FooterLink href={githubLink} target="_blank">Github</FooterLink>
                    <FooterLink href={tokenomicsLink} target="_blank">Tokenomics</FooterLink>
                </FooterItemCont>
                <FooterItemCont>
                    <FooterTitle currPlanet={currentPlanet}>PROTOCOL</FooterTitle>
                    <FooterLink href={aquaLink} target="_blank">AQUA</FooterLink>
                    <FooterLink href={gammaLink} target="_blank">GAMMA</FooterLink>
                    <FooterLink href={aquaContractLink} target="_blank">Contract Address</FooterLink>
                    <FooterLink href={burnAquaLink} target="_blank">Burn Address</FooterLink>
                    {selector.ethData.address !== undefined && showAirDrop === true ? 
                    <FooterLink onClick={() => handleClaimGamma()} target="_blank">Claim Airdrop</FooterLink>
                    :
                    ""
                    }
                </FooterItemCont>
            </FooterCont>
            <FooterSpaceCont />
        </FooterWrapper>
    );
};

const mapStateToProps = (state: any) => ({
    currentPlanet: state.planet.currentPlanet,
    planetIcon: state.planet.planetIcon,
})

export default connect(mapStateToProps)(Footer);