import { useDispatch } from 'react-redux'
import { setCurrentPlanet } from 'logic/action/planet.action'
import { SubLinkCont, SubLink, SubLinkRow, HeadText, HeadDescription } from './style'
import { analyticsLink, aquaVotingLink, docsLink } from 'service/global-constant'
import AnalyticsIcon from 'assets/icons/analytics.svg'
import governanceIcon from 'assets/icons/governance.svg'
import learnMoreIcon from 'assets/icons/learnMore.svg'
import marketsIcon from 'assets/icons/markets.svg'
import metricsIcon from 'assets/icons/metrics.svg'
import liquidationIcon from 'assets/icons/liquidations.png'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'


const HeaderSubLinks = () => {
    const dispatch = useDispatch()

    const handlePathLink = (path: string) => {
        if (path === 'markets') {
            history.push(Paths.markets)
            dispatch(setCurrentPlanet('green'))
        }
        if (path === 'metrics') {
            history.push(Paths.metrics)
            dispatch(setCurrentPlanet('green'))
        }
        if (path === 'liquidations') {
            history.push(Paths.liquidations)
            dispatch(setCurrentPlanet('green'))
        }
    }

    return (
        <SubLinkCont>
            <SubLinkRow>
                <a href={analyticsLink} target='_blank' rel="noreferrer">
                    <SubLink>
                        <div>
                            <img src={AnalyticsIcon} alt="" />
                        </div>
                        <div>
                            <HeadText className='menu-link'>
                                Analytics
                            </HeadText>
                            <HeadDescription>
                                In-Depth Liquidity Data
                            </HeadDescription>
                        </div>
                    </SubLink>
                </a>

                <SubLink onClick={() => handlePathLink('markets')}>
                    <div>
                        <img src={marketsIcon} alt="" />
                    </div>
                    <div>
                        <HeadText className='menu-link'>
                            Markets
                        </HeadText>
                        <HeadDescription>
                            Insightful Lending Data
                        </HeadDescription>
                    </div>
                </SubLink>

            </SubLinkRow>
            <SubLinkRow>
                <SubLink onClick={() => handlePathLink('metrics')}>
                    <div>
                        <img src={metricsIcon} alt="" />
                    </div>
                    <div>
                        <HeadText className='menu-link'>
                            Metrics
                        </HeadText>
                        <HeadDescription>
                            AQUA &amp; GAMMA
                        </HeadDescription>
                    </div>
                </SubLink>

                <a href={aquaVotingLink} target='_blank' rel="noreferrer">
                    <SubLink>
                        <div>
                            <img src={governanceIcon} alt="" />
                        </div>
                        <div>
                            <HeadText className='menu-link'>
                                Governance
                            </HeadText>
                            <HeadDescription>
                                Shape The Future Of Planet
                            </HeadDescription>
                        </div>
                    </SubLink>
                </a>
            </SubLinkRow>
            <SubLinkRow>
                <a href={docsLink} target='_blank' rel="noreferrer">
                    <SubLink>
                        <div>
                            <img src={learnMoreIcon} alt="" />
                        </div>
                        <div>
                            <HeadText className='menu-link'>
                                Learn More
                            </HeadText>
                            <HeadDescription>
                                Acquire DeFi Mastery
                            </HeadDescription>
                        </div>
                    </SubLink>
                </a>
                {/* { <a href={docsLink} target='_blank' rel="noreferrer">  */}
                    {/* <SubLink onClick={() => handlePathLink('liquidations')}>
                        <div>
                            <img src={liquidationIcon} alt="" />
                        </div>
                        <div>
                            <HeadText>
                                Liquidations
                            </HeadText>
                            <HeadDescription>
                                Protect green planet & earn
                            </HeadDescription>
                        </div>
                    </SubLink> */}
                {/* </a>  */}
            </SubLinkRow>
            {/* <SubLink >Learn</SubLink> */}
        </SubLinkCont>
    );
};

export default HeaderSubLinks;