import { useEffect, useState } from 'react'
import { ModalCont, TransHistoryCont, FlexSBCont, FlexCont, TitleText, NoDataAvailable, TransactionLink, TransHistoryText } from './style'
import CrossIcon from 'assets/icons/blue-cross-icon.png'
import LinkIcon from 'assets/icons/link.png'
import GreenCheckIcon from 'assets/icons/green-check.png'
import RedCheckIcon from 'assets/icons/red-check.png'
import YellowCrossIcon from 'assets/icons/yellow-cross.png'

const TransHistory = (props: any) => {
    const { setShowHistory } = props
    const [links, setLinks] = useState<any>([])

    useEffect(() => {
        const links: any = localStorage.getItem('transLinks')
        if (!!links) {
            const linksData = JSON.parse(links)
            if (new Date(linksData[linksData.length - 1].time).setHours(0, 0, 0, 0) !== new Date().setHours(0, 0, 0, 0)) {
                localStorage.removeItem('transLinks')
            }
            else {
                setLinks(linksData)
            }
        }
    }, [])

    const getTransactionList = () => {
        const links: any = localStorage.getItem('transLinks')
        const linksData = JSON.parse(links)
        let newLinksArr: any = linksData.reverse()
        if (newLinksArr.length > 10) {
            newLinksArr = linksData.slice(0, 10)
        }
        return newLinksArr
    }

    const renderTransHistory = () => {
        const linksData = getTransactionList()
        return (
            linksData.length > 0 && linksData.map((item: any, index: any) => {
                return (
                    <FlexSBCont className="history-item" key={index}>
                        <FlexCont>
                            {item.type === 'swap' && (
                                <TransHistoryText transStatus={item.transStatus} status={item.status}>{`Swap ${parseFloat(item.amount1).toFixed(2)} ${item.firstToken
                                    } for ${parseFloat(item.amount2).toFixed(2)} ${item.secondToken}`}</TransHistoryText>
                            )}
                            {item.type === 'addedLiquidity' && (
                                <TransHistoryText transStatus={item.transStatus} status={item.status}>{`Added liquidity for ${parseFloat(
                                    item.amount1
                                ).toFixed(2)} ${item.firstToken} and ${parseFloat(item.amount2).toFixed(2)} ${item.secondToken}`}</TransHistoryText>
                            )}
                            {item.type === 'removeLiquidity' && (
                                <TransHistoryText transStatus={item.transStatus} status={item.status}>{`Remove liquidity for ${parseFloat(
                                    item.amount1
                                ).toFixed(2)} ${item.firstToken} and ${parseFloat(item.amount2).toFixed(2)} ${item.secondToken}`}</TransHistoryText>
                            )}
                            {item.type === 'tokenTransform' && (
                                <TransHistoryText transStatus={item.transStatus} status={item.status}>{`Transform LP for ${parseFloat(
                                    item.amount1
                                ).toFixed(4)} ${item.firstToken} to ${parseFloat(item.amount2).toFixed(6)} ${item.secondToken}`}</TransHistoryText>
                            )}
                            {item.type === 'convertLp' && (
                                <TransHistoryText transStatus={item.transStatus} status={item.status}>{`Convert LP for ${parseFloat(
                                    item.amount1
                                ).toFixed(4)} ${item.firstToken} to ${parseFloat(item.amount2).toFixed(6)} ${item.secondToken}`}</TransHistoryText>
                            )}
                            <TransactionLink href={item.link} target="_blank">
                                <img src={LinkIcon} alt="" />
                            </TransactionLink>
                        </FlexCont>
                        <img className="trans-status-icon" src={item.transStatus === 'pending' ? YellowCrossIcon : item.status ? GreenCheckIcon : RedCheckIcon} alt="" />
                    </FlexSBCont>
                )
            })
        )
    }
    return (
        <ModalCont>
            <TransHistoryCont>
                <FlexSBCont className="history-header">
                    <TitleText>Recent transactions</TitleText>
                    <img className="cross-icon" src={CrossIcon} alt="" onClick={() => setShowHistory(false)} />
                </FlexSBCont>
                {links.length > 0 ? (
                    renderTransHistory()
                ) : (
                    <NoDataAvailable>
                        <p>No recent transactions</p>
                    </NoDataAvailable>
                )}
            </TransHistoryCont>
        </ModalCont>
    )
}

export default TransHistory
