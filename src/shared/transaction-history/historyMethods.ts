export const transLinkUrl = 'https://bscscan.com/tx'

export const setTransHistory = (data: any) => {
  const links: any = localStorage.getItem('transLinks')
  if (!!links) {
    const linksData = JSON.parse(links)
    const finalData = {
      ...data, time: new Date()
    }
    linksData.push(finalData)
    localStorage.setItem('transLinks', JSON.stringify(linksData))
  } else {
    const newLinkData = [{ ...data, time: new Date() }]
    localStorage.setItem('transLinks', JSON.stringify(newLinkData))
  }
}

export const setConfirmTransHistory = (transHash: any, status: any) => {
  const links: any = localStorage.getItem('transLinks')
  const linksData = JSON.parse(links)
  const indexNum = linksData.findIndex((e: any) => e.hashVal === transHash)
  if (indexNum >= 0) {
    const newLinksArr = [...linksData]
    newLinksArr[indexNum].transStatus = 'confirm'
    newLinksArr[indexNum].status = status
    localStorage.setItem('transLinks', JSON.stringify([...newLinksArr]))
  }
}
