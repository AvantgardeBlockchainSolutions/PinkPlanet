import { FlexCont, CardButton, CardButton2, CardButton3 } from 'shared/styles/styled'
import { CardTitle, CardSubText } from 'shared/styles/globalText'
import { LoadingText2 } from '../style'
import { PlanetTokenCont, TokenTypeText, TokenCard, TokenInfoCont, TokenValText, TokenBtnGroup } from './style'
import { commaFy } from 'service/globalFunctions'
import AQUAIcon from 'assets/icons/blue-icon.svg'
import GAMMAIcon from 'assets/icons/gamma-icon.png'
import MarketIcon from 'assets/icons/market-cap.png'
import BurnedIcon from 'assets/icons/burned-icon.svg'
import TreasuryIcon from 'assets/icons/treasury.png'
import MintIcon from 'assets/icons/mint-icon.svg'
import ReserveIcon from 'assets/icons/reserve.png'
import { aquaChainLink, gammaChainLink } from 'service/global-constant'
import { Paths } from 'modules/app/components/routes/types'
import history from 'modules/app/components/history'

const PlanetToken = (props: any) => {
    const { platformLoading, platformData } = props

    const handleSeeMetrics = (tokenName: string) => {
        history.push(Paths.metrics, tokenName)
    }

    return (
        <PlanetTokenCont>
            <TokenCard>
                <CardTitle>AQUA</CardTitle>
                <TokenTypeText type="aqua">The Governance Token</TokenTypeText>
                <TokenInfoCont>
                    <FlexCont>
                        <img src={AQUAIcon} alt="" />
                        <div>
                            <CardSubText>Circulating Supply</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    {!!platformData.aqua_circulatingsupply ? commaFy(parseFloat(platformData.aqua_circulatingsupply).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={MarketIcon} alt="" />
                        <div>
                            <CardSubText>Market Cap</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    ${!!platformData.aqua_marketcap ? commaFy(parseFloat(platformData.aqua_marketcap).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={BurnedIcon} alt="" />
                        <div>
                            <CardSubText>AQUA Burned (USD)</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    ${!!platformData.aqua_burned_usd ? commaFy(parseFloat(platformData.aqua_burned_usd).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={TreasuryIcon} alt="" />
                        <div>
                            <CardSubText>Treasury</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    ${!!platformData.treasury ? commaFy(parseFloat(platformData.treasury).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                </TokenInfoCont>
                <TokenBtnGroup>
                    <CardButton onClick={() => handleSeeMetrics('aqua')}>See Metrics</CardButton>
                    <a href={aquaChainLink} target='_blank' rel="noreferrer">
                        <CardButton3>View On Chain</CardButton3>
                    </a>

                </TokenBtnGroup>
            </TokenCard>
            <TokenCard>
                <CardTitle>GAMMA</CardTitle>
                <TokenTypeText>The Utility Token</TokenTypeText>
                <TokenInfoCont>
                    <FlexCont>
                        <img src={GAMMAIcon} alt="" />
                        <div>
                            <CardSubText>Circulating Supply</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    {!!platformData.gamma_circulatingsupply ? commaFy(parseFloat(platformData.gamma_circulatingsupply).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={MarketIcon} alt="" />
                        <div>
                            <CardSubText>Market Cap</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    ${!!platformData.gamma_marketcap ? commaFy(parseFloat(platformData.gamma_marketcap).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={MintIcon} alt="" />
                        <div>
                            <CardSubText>Daily Mint</CardSubText>
                            <TokenValText>100,000</TokenValText>
                        </div>
                    </FlexCont>
                    <FlexCont>
                        <img src={ReserveIcon} alt="" />
                        <div>
                            <CardSubText>Reserve</CardSubText>
                            {platformLoading ? <LoadingText2 /> :
                                <TokenValText>
                                    ${!!platformData.reserve ? commaFy(parseFloat(platformData.reserve).toFixed(2)) : '0.00'}
                                </TokenValText>
                            }
                        </div>
                    </FlexCont>
                </TokenInfoCont>
                <TokenBtnGroup>
                    <CardButton2 onClick={() => handleSeeMetrics('gamma')}>See Metrics</CardButton2>
                    <a href={gammaChainLink} target='_blank' rel="noreferrer">
                        <CardButton3>View On Chain</CardButton3>
                    </a>
                </TokenBtnGroup>
            </TokenCard>
        </PlanetTokenCont>
    );
};

export default PlanetToken