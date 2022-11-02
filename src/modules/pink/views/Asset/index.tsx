import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Button, CircularProgress } from '@mui/material'
import Modal from '@mui/material/Modal'
import { PlusIconWhite } from 'assets/tsicons'

const Asset = () => {
  const [value, setValue] = React.useState('1')
  const [placebid, setPlacebid] = React.useState(true)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  function createData(price: string, usdprice: string, floor: string, expiration: string, from: string) {
    return { price, usdprice, floor, expiration, from }
  }

  const rows = [
    createData('18.22 ETH', '$24,33.00', '8% below', 'about 13 hours', '133D90'),
    createData('18.22 ETH', '$24,33.00', '8% below', 'about 13 hours', '133D90'),
    createData('18.22 ETH', '$24,33.00', '8% below', 'about 13 hours', '133D90'),
    createData('18.22 ETH', '$24,33.00', '8% below', 'about 13 hours', '133D90'),
  ]
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#000',
    border: '2px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <Page ref={rootRef}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <LeftCard>
              <img src={require('../../../../assets/images/pink/NFTs/1.png').default} alt="" />
            </LeftCard>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <RightCard>
              <div className="heading">Aquanauts #212</div>
              <div className="desc">
                A cool description about this item is necessary to show the world why this NFT is worth spending all of your money on.
              </div>
              <Grid container spacing={2} className="gridd1">
                <Grid item xs={12} sm={6}>
                  <Block>
                    <h2>Creator</h2>
                    <div className="blockbx">
                      <img src={require('../../../../assets/images/pink/ProfilePage/notupload.png').default} alt="" />
                      0x…3rv
                    </div>
                  </Block>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Block>
                    <h2>Collection</h2>
                    <div className="blockbx">
                      <img src={require('../../../../assets/images/pink/NFTs/1.png').default} alt="" />
                      Aquanauts
                    </div>
                  </Block>
                </Grid>
              </Grid>
              <TabContext value={value}>
                <TabsBox>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Details" value="1" />
                    <Tab label="Offers" value="4" />
                    <Tab label="Bids" value="2" />
                    <Tab label="History" value="3" />
                  </TabList>
                  <TabContent>
                    <TabUpper>
                      <TabPanel value="1">
                        <Grid container spacing={2} className="gridd1 gridd2">
                          <Grid item xs={12} sm={12} md={6}>
                            <Block>
                              <h2>Owner</h2>
                              <div className="blockbx">
                                <img src={require('../../../../assets/images/pink/Asset/owner.png').default} alt="" />
                                0x…3rv
                              </div>
                            </Block>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6}>
                            {placebid ? (
                              <Block>
                                <h2>Buy Now Price</h2>
                                <div className="blockbx">
                                  <img src={require('../../../../assets/images/pink/diamond-green.png').default} alt="" />
                                  2,956 &nbsp;<span> ($657.29)</span>
                                </div>
                              </Block>
                            ) : null}
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <Block>
                              <h2>Properties</h2>

                              <div className="propertiesblockbxOuter">
                                <div className="propertiesblockbx">
                                  <div className="bly">Space suit</div>
                                  Yellow
                                  <div className="sml">1.2% Rarity</div>
                                </div>
                                <div className="propertiesblockbx">
                                  <div className="bly">Complexion</div>
                                  GAMMA Green
                                  <div className="sml">1 of 250 Rarity</div>
                                </div>
                                <div className="propertiesblockbx">
                                  <div className="bly">Background</div>
                                  Purple Dreamscape
                                  <div className="sml">1 of 50 Rarity</div>
                                </div>
                                <div className="propertiesblockbx">
                                  <div className="bly">Face Accessory</div>
                                  Doobee
                                  <div className="sml">1 of 100 Rarity</div>
                                </div>
                                <div className="propertiesblockbx">
                                  <div className="bly">Hair</div>
                                  Black High Top Classic
                                  <div className="sml">1 of 75 Rarity</div>
                                </div>
                              </div>
                            </Block>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value="2">Item Two</TabPanel>
                      <TabPanel value="3">Item Three</TabPanel>
                      <TabPanel value="4">
                        <TableContainerStyled>
                          <Table sx={{ minWidth: 600 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell align="center">USD Price</TableCell>
                                <TableCell align="center">Floor Difference</TableCell>
                                <TableCell align="center">Expiration</TableCell>
                                <TableCell align="right">From</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <TableRow key={row.price} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                  <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={require('assets/icons/ETH.svg').default} alt="" />
                                    {row.price}
                                  </TableCell>
                                  <TableCell align="center">{row.usdprice}</TableCell>
                                  <TableCell align="center">{row.floor}</TableCell>
                                  <TableCell align="center">{row.expiration}</TableCell>
                                  <TableCell align="right">
                                    <a href="">{row.from}</a>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainerStyled>
                      </TabPanel>
                    </TabUpper>
                    {value == '1' ? (
                      <TabBottom>
                        {placebid ? (
                          <StyledButton variant="contained" onClick={() => setOpen(true)}>Buy Now</StyledButton>
                        ) : (
                          <Button variant="contained">Place a bid</Button>
                        )}
                      </TabBottom>
                    ) : null}
                  </TabContent>
                </TabsBox>
              </TabContext>
            </RightCard>
          </Grid>
        </Grid>
      </Page>
      <ModalOffer
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        container={() => rootRef.current}
      >
        <Box sx={style}>
          <Heading>
            Offer Summary{' '}
            <div className="closebtn" onClick={() => setOpen(false)}>
              <PlusIconWhite />
            </div>
          </Heading>
          <MDetails>
            <div className="left">
              {' '}
              <img src={require('../../../../assets/images/pink/NFTs/1.png').default} alt="" />
            </div>
            <div className="right">
              <TextFlex>
                <div>The Aquanauts</div>
                <div>Price</div>
              </TextFlex>
              <TextFlex>
                <div>Aquanauts #212</div>
                <div>3,029.54</div>
              </TextFlex>
              <TextFlex>
                <div>Quantity: 1</div>
                <div>($673.73)</div>
              </TextFlex>
            </div>
          </MDetails>
          <ProgressSection>
            <div className="progressbx">
              <div className="pheader">
                <div className="circlprogress">
                  <CircularProgress variant="determinate" value={60} />
                  <CircularProgress variant="determinate" value={100} className="backrounspinner" />
                  <div className="text">1</div>
                </div>
                Approve currency
              </div>
              <div className="pcontent">
                Please approve the use of <span style={{ color: '#fff' }}>GAMMA</span> from your wallet.
                <StyledButton variant="contained" disabled>
                  Waiting for approval…
                </StyledButton>
              </div>
            </div>

            <div className="progressbx">
              <div className="pheader">
                {' '}
                <div className="circlprogress">
                  <CircularProgress variant="determinate" value={0} />
                  <CircularProgress variant="determinate" value={100} className="backrounspinner" />
                  <div className="text">2</div>
                </div>
                Confirm Offer
              </div>
            </div>
          </ProgressSection>
        </Box>
      </ModalOffer>
    </>
  )
}

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: Center;
  margin-bottom: 24px;
`
const MDetails = styled.div``
const TextFlex = styled.div`
  display: flex;
  align-items: Center;
  justify-content: space-between;
  font-size: 14px;
`
const ProgressSection = styled.div`
  .progressbx {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 10px;
    }
    .pheader {
      display: flex;
      align-items: Center;
      margin-bottom: 10px;
      font-weight: 600;
      .circlprogress {
        position: Relative;
        display: flex;
        margin-right: 10px;
        .MuiCircularProgress-determinate {
          color: #ff55de;
        }
        .backrounspinner {
          position: Absolute;
          top: 0%;
          left: 0%;
          z-index: -1;
          &.MuiCircularProgress-determinate {
            color: #666666 !important;
          }
        }
        .text {
          position: Absolute;
          top: 50%;
          left: 50%;
          transform: Translate(-50%, -50%);
          color: #fff;
        }
      }
    }
    .pcontent {
      color: #666666;
      font-weight: 500;
      button {
        margin-top: 14px !important;
        width: auto;
        padding-left: 40px !important;
        padding-right: 40px !important;
      }
      button:disabled,
      button[disabled] {
        background: #666666 !important;
        color: rgba(255, 255, 255, 0.4) !important;
      }
    }
  }
`
const ModalOffer = styled(Modal)`
  ${Heading} {
    position: relative;
    .closebtn {
      position: Absolute;
      top: 50%;
      right: 0%;
      transform: translateY(-50%) rotate(45deg);
      opacity: 0.4;
      cursor: pointer;
    }
  }
  ${MDetails} {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: Center;
    .left {
      margin-right: 14px;
      img {
        height: 75px;
        border-radius: 14px;
      }
    }
    .right {
      width: 100%;
    }
    ${TextFlex} {
      opacity: 0.4;
      margin: 8px 0;
      font-weight: 600;
      &:nth-child(2) {
        opacity: 1;
        font-size: 16px;
      }
    }
  }
`

const Page = styled.div`
  color: #fff;
`

const TableContainerStyled = styled(TableContainer)`
  .MuiTableCell-root {
    color: #fff !important;
    border-color: rgba(255, 255, 255, 0.2);
    img {
      height: 18px;
      margin-right: 5px;
    }
  }
  .MuiTableBody-root {
    .MuiTableRow-root {
      .MuiTableCell-root:last-child {
        a {
          color: #55b7ff !important;
        }
      }
    }
  }
`
const TabUpper = styled.div`
  color: #fff;
`

const TabBottom = styled.div`
  padding: 20px;
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  button {
    width: 100%;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  background: linear-gradient(to right, #ff55de, #55b7ff) !important;
  color: #fff !important;
`
const TabsBox = styled.div`
  .MuiTabs-root {
    margin-top: 34px;
    margin-bottom: 0px;
    padding: 0 12px;
  }
  .MuiTabs-flexContainer {
    .MuiTab-root {
      font-weight: bold;
      color: rgba(255, 255, 255, 0.4);
      font-size: 20px;
      padding: 16px 0;
      margin-right: 24px;
      text-transform: capitalize;
      &.Mui-selected {
        color: #fff;
      }
    }
  }
  .MuiTabs-indicator {
    background-color: #ff55de !important;
  }
`
const TabContent = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  margin-top: -2px;
  position: relative;
  overflow: hidden;
  //background-color: rgba(255, 255, 255, .15);
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(50px);
  }
  .gridd2 {
    margin-top: 0 !important;
  }
`

const LeftCard = styled.div`
  position: relative;
  padding-top: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  @media (max-width: 1200px) {
    padding-top: 0;
    img {
      position: relative;
      max-width: 500px;
    }
  }
`
const Block = styled.div`
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 12px;
  }
  .propertiesblockbxOuter {
    display: flex;
    flex-flow: wrap;
  }
  .blockbx {
    display: flex;
    align-items: Center;
    font-size: 20px;
    font-weight: bold;
    img {
      height: 40px;
      width: auto;
      border-radius: 10px;
      margin-right: 12px;
    }
    span {
      color: rgba(255, 255, 255, 0.4);
    }
  }
  .propertiesblockbx {
    padding: 12px 20px;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    margin-right: 14px;
    margin-bottom: 14px;
    &:last-child {
      margin-right: 0;
    }
    .bly {
      color: #55b7ff;
    }
    .sml {
      opacity: 0.4;
      font-size: 12px;
      margin-top: 3px;
    }
  }
`

const RightCard = styled.div`
  color: #fff;
  margin-left: 10%;
  .heading {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .desc {
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
  }
  .gridd1 {
    margin-top: 22px;
    .blockbx {
      img {
        filter: drop-shadow(0px 0px 2px #ff55de);
      }
    }
  }
  .gridd2 {
    .blockbx {
      img {
        filter: unset;
      }
    }
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

export default Asset
