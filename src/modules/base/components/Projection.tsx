import { useState, useEffect } from 'react'
import { FlexCont } from 'shared/styles/styled'
import { CardTitle, CardText } from 'shared/styles/globalText'
import { ProjectionWrapper, ProjectionValCont, ProjectionCont, ProjectionTab, ProjLoading } from './style'
import { numberWithCommas } from 'service/globalFunctions'
import CountUp from "react-countup"

const Projection = (props: any) => {
    const [projectionType, setProjectionType] = useState('year')
    const [projectionVal, setProjectionVal] = useState(0)
    const { portfolioLoading, userPortfolio } = props

    useEffect(() => {
        if (!!userPortfolio) {
            let projVal = 0
            if (projectionType === 'year') {
                projVal = (parseFloat(userPortfolio.balanceInVaults) * parseFloat(userPortfolio.currentApy) / 100)
            }
            if (projectionType === 'month') {
                projVal = (parseFloat(userPortfolio.balanceInVaults) * parseFloat(userPortfolio.currentApy)) / 1200
            }
            if (projectionType === 'week') {
                projVal = parseFloat(userPortfolio.dailyEarning) * 7
            }
            if (projectionType === 'day') {
                projVal = parseFloat(userPortfolio.dailyEarning)
            }
            setProjectionVal(projVal)

        }
    }, [userPortfolio, projectionType])

    return (
        <ProjectionWrapper>
            <div>
                <FlexCont>
                    <CardTitle className="on-web">Projected Interest</CardTitle>
                    <CardText className="on-mob">Projected Interest</CardText>
                </FlexCont>
                {
                    portfolioLoading ? <ProjLoading /> :
                        <ProjectionValCont>
                            <CountUp
                                start={0.0}
                                end={projectionVal}
                                duration={0.5}
                                decimals={2}
                                formattingFn={(num) => `$ ${numberWithCommas(num, 2)}`}
                            />
                        </ProjectionValCont>
                }

            </div>

            <ProjectionCont>
                <ProjectionTab isActive={projectionType === 'year'} onClick={() => setProjectionType('year')}>YEAR</ProjectionTab>
                <ProjectionTab isActive={projectionType === 'month'} onClick={() => setProjectionType('month')}>MONTH</ProjectionTab>
                <ProjectionTab isActive={projectionType === 'week'} onClick={() => setProjectionType('week')}>WEEK</ProjectionTab>
                <ProjectionTab isActive={projectionType === 'day'} onClick={() => setProjectionType('day')}>DAY</ProjectionTab>
            </ProjectionCont>
        </ProjectionWrapper>
    );
};

export default Projection;