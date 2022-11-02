import { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MainContainer, FlexCont, CardButton, CardButton2 } from 'shared/styles/styled'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { BaseContainer, BaseHeader, TvlInfoBox, Card, UserInfoCont, OverViewInfo, CardNumText, BalanceWrapper, BalanceCont, BalanceText, LevelBox, MobBalWrapper, MobBalCard, MobBuyAssetCont, MobBalText, LoadingText1, LoadingText2 } from './style'
import AQUAIcon from 'assets/icons/blue-icon.svg'
import GAMMAIcon from 'assets/icons/gamma-icon.png'
import TvlIcon from 'assets/icons/tvl-icon.svg'
import { commaFy, convertToKAndM } from 'service/globalFunctions'
import InfoTooltip from 'shared/info-tool-tip'
import Projection from './components/Projection'
import PlanetActions from './components/PlanetActions'
import PlanetToken from './components/PlanetToken'
import ValueLocked from './components/ValueLocked'
import CountUp from "react-countup"
// import PlanetNews from './components/PlanetNews'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'
// import { aquaAddress } from 'modules/block-chain/abi'

const Base = (props: any) => {
    const { portfolioLoading, userPortfolio, platformLoading, platformData } = props

   
    const renderOverView = () => {
        return (
            <Fragment>
                <CardTitle>Overview</CardTitle>
                <OverViewInfo>
                    <div>
                        <CardText>Total Balance</CardText>
                        {portfolioLoading ?
                            <LoadingText1 /> :
                            <CardNumText>
                                <CountUp
                                    start={0.0}
                                    end={userPortfolio.balanceInVaults}
                                    duration={0.5}
                                    decimals={2}
                                    formattingFn={(num) => `$ ${commaFy(num.toFixed(2))}`}
                                />
                            </CardNumText>
                        }
                    </div>
                    <div>
                        <CardText>Current APY</CardText>
                        {portfolioLoading ?
                            <LoadingText1 /> :
                            <CardNumText>
                                <CountUp
                                    start={0.0}
                                    end={userPortfolio.currentApy}
                                    duration={0.5}
                                    decimals={2}
                                    formattingFn={(num) => `${convertToKAndM(num)}%`}
                                />
                            </CardNumText>
                        }
                    </div>
                </OverViewInfo>
                <OverViewInfo>
                    <div>
                        <CardText>Pending Earnings</CardText>
                        {portfolioLoading ?
                            <LoadingText1 /> :
                            <CardNumText className='green-text'>
                                <CountUp
                                    start={0.0}
                                    end={userPortfolio.pendingEarnings}
                                    duration={0.5}
                                    decimals={2}
                                    formattingFn={(num) => `$ ${commaFy(num.toFixed(2))}`}
                                />
                            </CardNumText>
                        }
                    </div>
                    <div>
                        <FlexCont>
                            <CardText>Current Level</CardText>
                            <InfoTooltip infoId='currentLevel' left={6} />
                        </FlexCont>
                        {portfolioLoading ?
                            <LoadingText1 /> :
                            <FlexCont>
                                <CardNumText>
                                    <CountUp
                                        start={0}
                                        end={userPortfolio.userLevel.level}
                                        duration={0.5}
                                        decimals={0}
                                        formattingFn={(num) => `${num}`}
                                    />
                                </CardNumText>
                                <LevelBox>
                                    <p>{`${userPortfolio.userLevel.discount}% Discount`}</p>
                                </LevelBox>
                            </FlexCont>
                        }
                    </div>
                </OverViewInfo>
            </Fragment>
        )
    }

    const _renderBalFormat = (balance: any) => {
        let newBal: any = '0.0000'
        if (!!balance && parseFloat(balance) > 0) {
            newBal = parseFloat(balance)
        }
        const balArr = parseFloat(newBal).toFixed(4).toString().split('.')

        return <BalanceText>{commaFy(balArr[0])}.<span>{balArr[1]}</span></BalanceText>
    }

    const renderUserBalance = () => {
        return (
            <BalanceWrapper>
                <BalanceCont>
                    <img src={AQUAIcon} alt="" />
                    <CardText className="bal-text" >AQUA Balance</CardText>
                    {portfolioLoading ? <LoadingText1 /> : _renderBalFormat(userPortfolio.userAquaBalance)}
                    <CardButton className="buy-btn" >Buy</CardButton>
                </BalanceCont>
                <BalanceCont>
                    <img src={GAMMAIcon} alt="" />
                    <CardText className="bal-text">GAMMA Balance</CardText>
                    {portfolioLoading ? <LoadingText1 /> : _renderBalFormat(userPortfolio.userGammaBalance)}
                    <CardButton2 className="buy-btn" >Buy</CardButton2>
                </BalanceCont>
            </BalanceWrapper>
        )
    }
    return (
        <MainContainer>
            <BaseContainer>
                <BaseHeader>
                    <div>
                        <TitleText>Base</TitleText>
                        <TitleInfo className="title-info">Decentralize The Planet’s Finances</TitleInfo>
                    </div>
                    <div className="on-web">
                        <ValueLocked {...props} />
                    </div>

                </BaseHeader>
                <UserInfoCont>
                    <Card>{renderOverView()}</Card>
                    <Card className="on-web">{renderUserBalance()}</Card>
                    <Card>
                        <Projection portfolioLoading={portfolioLoading} userPortfolio={userPortfolio} />
                    </Card>
                </UserInfoCont>

                <MobBalWrapper>
                    <MobBalCard>
                        <MobBuyAssetCont>
                            <img src={AQUAIcon} alt="" />
                            <CardButton >Buy</CardButton>
                        </MobBuyAssetCont>
                        {platformLoading ?
                            <LoadingText2 /> :
                            <MobBalText>${!!platformData && platformData.aqua_price ? commaFy(parseFloat(platformData.aqua_price).toFixed(2)) : '0.00'}</MobBalText>
                        }
                        {portfolioLoading ?
                            <LoadingText2 /> :
                            <CardText className='total-token'>{`${!!userPortfolio && userPortfolio.userAquaBalance ? commaFy(parseFloat(userPortfolio.userAquaBalance).toFixed(4)) : '0.000'} AQUA`}</CardText>
                        }
                        {portfolioLoading ?
                            <LoadingText2 /> :
                            <MobBalText tokenType='aqua'>${commaFy(parseFloat(userPortfolio.userAquaBalanceUSD).toFixed(2))}</MobBalText>
                        }
                    </MobBalCard>
                    <MobBalCard>
                        <MobBuyAssetCont>
                            <img src={GAMMAIcon} alt="" />
                            <CardButton2 >Buy</CardButton2>
                        </MobBuyAssetCont>
                        {platformLoading ?
                            <LoadingText2 /> :
                            <MobBalText>${!!platformData && platformData.gamma_price ? commaFy(parseFloat(platformData.gamma_price).toFixed(2)) : '0.00'}</MobBalText>
                        }
                        {portfolioLoading ?
                            <LoadingText2 /> :
                            <CardText className='total-token'>{`${!!userPortfolio && userPortfolio.userGammaBalance ? commaFy(parseFloat(userPortfolio.userGammaBalance).toFixed(4)) : '0.000'} GAMMA`}</CardText>
                        }
                        {portfolioLoading ?
                            <LoadingText2 /> :
                            <MobBalText tokenType='gamma'>${commaFy(parseFloat(userPortfolio.userGammaBalanceUSD).toFixed(2))}</MobBalText>
                        }
                    </MobBalCard>
                </MobBalWrapper>
                <PlanetActions />
                <PlanetToken platformLoading={platformLoading} platformData={platformData} />
                {/* <PlanetNews /> */}
            </BaseContainer>
        </MainContainer>
    );
};

const mapStateToProps = (state: any) => ({
    portfolioLoading: state.user.portfolioLoading,
    userPortfolio: state.user.userPortfolio,
    platformLoading: state.user.platformLoading,
    platformData: state.user.platformData,
})
export default connect(mapStateToProps)(Base)