import { useEffect } from 'react'
import { ToolTipText } from 'shared/styles/styled'
import { HoverInfoCont, ToolTipLevelCont, HoverInfoTxt, HoverInfoTxtNew } from './style'
import ReactTooltip from "react-tooltip"

const hoverData = [
  { id: 'totalBalance', info: 'Total Balance', place: 'top', isShowContent: false },
  { id: 'currentApy', info: 'Current Apy', place: 'top', isShowContent: false },
  { id: 'pendingEarnings', info: 'Pending Earnings', place: 'top', isShowContent: false },
  { id: 'priceProjection', info: 'Price Projection', place: 'top', isShowContent: false },
  { id: 'vaultEarnings', info: 'Clicking collect will claim your GAMMA earned in single asset vaults that are supplying to Green Planet.', place: 'top', isShowContent: false },
  { id: 'apyInfo', info: 'Yield (APY) is based on your GAMMA yield being compounded at least twice per day', place: 'top', isShowContent: false },
  { id: 'rewardsInfo', info: 'Rewards Info', place: 'top', isShowContent: false },


  { id: 'aquaBurn', place: 'top', isShowContent: true },
  { id: 'currentLevel', place: 'top', isShowContent: true },
  { id: 'vaultRewards', place: 'left', isShowContent: true },
  { id: 'poolRewards', place: 'left', isShowContent: true },
]


const HoverInfo = () => {

  useEffect(() => {
    ReactTooltip.rebuild();
  })

  const renderBurnApy = () => {
    return (
      <ToolTipText>Burn APY is the current pace at which the supply of AQUA is expected to be bought and burned over the next 12 months represented as an APY
        <br /> <br />
        So 10% means that 10% of the entire supply of AQUA is on pace to be bought and burned by the protocol over the next 12 months.
      </ToolTipText>
    )
  }

  const renderLevelInfo = () => {
    return (
      <ToolTipLevelCont>
        <HoverInfoTxtNew>
          There are 3 discount levels that can be unlocked by supplying GAMMA. To reach each level you need a certain % of GAMMA relative to the other assets you have deposited in vaults. The % in () refers to the USD value of the GAMMA you're supplying relative to the USD value of your total collateral supplied.
        </HoverInfoTxtNew>
        <ul>
          <li>Level 1 (1-4.99%): 5% discount </li>
          <li>Level 2 (5-9.99%): 20% discount </li>
          <li>Level 3 (Over 10%): 50% discount </li>
        </ul>
      </ToolTipLevelCont>
    )
  }

  const renderVaultRewards = () => {
    return (
      <HoverInfoTxt>
        For most vaults, deposited assets are being supplied to Green Planet. Your deposited balance will grow and you can claim the GAMMA you earn at the top of the page. For "Boosted" vaults, the origin token earned will be converted into GAMMA for you and can be claimed by clicking claim boost within a vault.
      </HoverInfoTxt>
    )
  }

  const renderPoolRewards = () => {
    return (
      <HoverInfoTxt>
        All pools either exist on Planet or are aggregated from other protocols. GAMMA rewards will accrue for you to claim on all pools. For "Boosted" pools, the origin token earned will be converted into GAMMA for you and can be claimed by clicking "claim boost" within a pool.
      </HoverInfoTxt>
    )
  }


  return (
    <HoverInfoCont>
      {
        hoverData.map((item: any, index) => {
          return (
            // @ts-ignore
            <ReactTooltip key={index} arrowColor="transparent" className="planet-tool-tip" id={item.id} place={item.place} effect="solid">
              {!item.isShowContent ?
                <ToolTipText>{item.info}</ToolTipText> :
                <div>
                  {item.id === 'aquaBurn' && renderBurnApy()}
                  {item.id === 'currentLevel' && renderLevelInfo()}
                  {item.id === 'vaultRewards' && renderVaultRewards()}
                  {item.id === 'poolRewards' && renderPoolRewards()}
                </div>
              }
            </ReactTooltip>
          )
        })
      }

    </HoverInfoCont>
  )
}

export default HoverInfo
