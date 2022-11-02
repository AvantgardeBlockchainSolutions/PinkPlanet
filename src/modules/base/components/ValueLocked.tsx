import { useState, useEffect } from 'react'
import { CardSubText } from 'shared/styles/globalText'
import { TvlInfoBox, CardNumText, LoadingText2 } from './../style'
import TvlIcon from 'assets/icons/tvl-icon.svg'
import { commaFy } from '../../../service/globalFunctions'
let timerForTvl = setInterval(function () { }, 0)
const ValueLocked = (props: any) => {
    const { platformLoading, platformData } = props
    const [tvl, setTvl] = useState('')
    useEffect(() => {
        if (timerForTvl) {
            clearInterval(timerForTvl); 
        }
        if(platformData.tvl)
        {
            startTimerTripping();
        }
    }, [platformData])

    const startTimerTripping = () => {
        if(platformData.tvl)
        {
            setTvl(platformData.tvl)
            clearInterval(timerForTvl)
            let tvlPlatformData: any = platformData.tvl;
            let trippingTvl: any = tvlPlatformData / (84600 * 365);
            let now = new Date();
            let timeWhenStarted = now.getTime();
            timerForTvl = setInterval(function () {
                now = new Date();
                let newTvl =  platformData.tvl + (( now.getTime() - timeWhenStarted ) * trippingTvl / 1000);
                setTvl(newTvl)
            }, 1000)
        }
    }
    return (
        <TvlInfoBox >
            <img src={TvlIcon} alt="" />
            <div>
                <CardSubText>Value Locked</CardSubText>
                {platformLoading ?
                    <LoadingText2 /> :
                    <CardNumText>${!!tvl && tvl ? commaFy(parseFloat(tvl).toFixed(2)) : '0.00'}</CardNumText>
                }
            </div>
        </TvlInfoBox>
    );
};

export default ValueLocked;