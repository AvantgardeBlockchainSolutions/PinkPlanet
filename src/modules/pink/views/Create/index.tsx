// @ts-nocheck
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader } from 'modules/pink/style'
import { Button, Input } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Dropzone from 'react-dropzone'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { Grid } from '@mui/material'
import { CreateIcon, FixedpriceIcon, OpenBidsIcon, TimeauctionIcon } from 'assets/tsicons'
import { styled as materialstyled } from '@mui/material/styles'
import NftCard from 'shared/cards/nftcard'

import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  border: '2px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
}


interface Props {
  multiplenft?: boolean
}
const CreateNFT = (props: Props) => {
  const [marketplacetab, setMarketplacetab] = useState(1);
  const { multiplenft } = props

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [files, setFiles] = useState([])

  const [filesmodal, setFilesmodal] = useState([])

  const drop1 = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const drop2 = (acceptedFiles) => {
    setFilesmodal(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }
  const thumbs = files.map((file) => (
    <div className="imageuploadinner" key={file.name}>
      <img
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  ))

  const thumbsmodal = filesmodal.map((file) => (
    <div className="imageuploadinner" key={file.name}>
      <img
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => filesmodal.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <Page ref={rootRef}>
      <PinkHeader>
        <div>
          <TitleText>Create {multiplenft?'Multiple':'Single'} NFT</TitleText>
          <TitleInfo className="title-info">Add details that make your asset unique</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        {/* <DisplayHeadings className="displayheading">Personal</DisplayHeadings> */}
        <Grid container spacing={2} className="editpagegrid">
          <Grid item xs={12} md={12} lg={5}>
            <TextBox>
              <Heading>Upload File</Heading>
              <Uploadzone>
                {files.length > 0 ? (
                  <section className="imginner imageuploadside">
                    <div className="closebtn" onClick={() => setFiles([])}>
                      <img src={require('../../../../assets/images/pink/close_icon.png').default} alt="" />
                    </div>
                    <aside className="imageupload">{thumbs}</aside>
                  </section>
                ) : (
                  <Dropzone onDrop={drop1}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="imginner imagebeforeuploadside">
                        <div className="dropzoneOuter">
                          <p>PNG, GIF, WEBP, MP4, or MP3. Max 100mb.</p>
                          <div {...getRootProps({ className: 'dropzone' })} name="content1">
                            <input {...getInputProps()} />
                            <Button variant="contained">Choose File</Button>
                          </div>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                )}
              </Uploadzone>
            </TextBox>

            <TextBox className="marketplaceblock">
              <Heading>
                List On Marketplace
                <FormGroup>
                  <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </FormGroup>
              </Heading>
              <TextBoxSmall>Allow your NFT to be purchased for a fixed price</TextBoxSmall>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <div className={`marketblockouter ${marketplacetab == 1 ? 'active' : ' '}`} onClick={() => setMarketplacetab(1)}>
                    <div className="marketblock">
                      <div className="ic">
                        <FixedpriceIcon />
                      </div>
                      <h3>Fixed Price</h3>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <div className={` marketblockouter ${marketplacetab == 2 ? 'active' : ' '}`} onClick={() => setMarketplacetab(2)}>
                    <div className="marketblock">
                      <div className="ic">
                        <OpenBidsIcon />
                      </div>
                      <h3>Open For Bids</h3>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <div className={`marketblockouter ${marketplacetab == 3 ? 'active' : ' '} `} onClick={() => setMarketplacetab(3)}>
                    <div className="marketblock">
                      <div className="ic">
                        <TimeauctionIcon />
                      </div>
                      <h3>Time Auction</h3>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </TextBox>

            <TextBox>
              <Heading>Name</Heading>
              <Input placeholder="e.g. “Blue Alien”" />
            </TextBox>
            {marketplacetab == 1 ? (
              <TextBox>
                <Heading>Price</Heading>
                <Box className="pricebox">
                  <Input placeholder="Enter listing price" />
                  <FormControl>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                <TextBoxSmall>
                  Protocol Fee On Sales: <span>2.5%</span>
                </TextBoxSmall>
              </TextBox>
            ) : null}
            <TextBox>
              <Heading>Description</Heading>
              <Input placeholder="e.g. “Holding this blue alien grants early access to all drops”" />
            </TextBox>
            {/* <TextBox>
              <Heading>Royalties</Heading>
              <div className="iptOuter">
                <Input placeholder="10" />
                <span className="abs">%</span>
              </div>
              <TextBoxSmall>You earn this % on all future sales of this asset.</TextBoxSmall>
            </TextBox> */}
            <TextBox>
              <Heading>Locked GAMMA</Heading>
              <LockedGamma>
                <LeftGamma>
                  <img src={require('../../../../assets/images/pink/diamond-green.png').default} alt="" />
                  <input type="text" placeholder="0.000" />
                </LeftGamma>
                <RightGamma>
                  <Button variant="contained">Lock</Button>
                </RightGamma>
              </LockedGamma>
              <TextBoxSmall>At least 1 GAMMA must be locked in each asset for it to exist.</TextBoxSmall>
            </TextBox>
            <TextBox>
              <Heading>Choose Collection</Heading>
              <TextBoxSmall>Allow your NFT to be purchased for a fixed price</TextBoxSmall>
              <CollectionBXOuter>
                <CollectionBX onClick={handleOpen}>
                  <img src={require('assets/images/pink/close_icon.png').default} alt="" />
                  <div className="bx">
                    <h4>Create</h4>
                    BEP20
                  </div>
                </CollectionBX>
                <CollectionBX className="hasbg" style={{ background: `url(${require('assets/images/pink/NFTs/2.png').default})` }}>
                  <img src={require('assets/images/pink/close_icon.png').default} style={{ opacity: 0 }} alt="" />
                  <div className="bx">
                    <h4>AquaPunks</h4>
                    AQPS
                  </div>
                </CollectionBX>
              </CollectionBXOuter>
            </TextBox>
            <TextBox className="marketplaceblock freeminting">
              <Heading>
                Free Minting
                <FormGroup>
                  <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </FormGroup>
              </Heading>
              <TextBoxSmall>The buyer will pay the gas fee to mint this NFT</TextBoxSmall>
              <Button variant="outlined" fullWidth>
                Add Attributes
              </Button>
            </TextBox>
            <CreateButton variant="contained" fullWidth>
              Create NFT
            </CreateButton>
          </Grid>
          <Grid item xs={12} md={12} lg={7}>
            <PreviewzoneOuter>
              <TextBox>
                <Heading>Preview</Heading>
              </TextBox>
              <Previewzone>
                <section className="imginner">
                  <aside className="imageupload">
                    {files.length > 0 ? (
                      <NftCard preview src={files[0].preview} />
                    ) : (
                      <div className="txtt">Add content to preview how your asset will look</div>
                    )}
                  </aside>
                </section>
              </Previewzone>
            </PreviewzoneOuter>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          container={() => rootRef.current}
        >
          <Box sx={style}>
            <ModalUploadZone>
              {filesmodal.length > 0 ? (
                <section className="imginner imageuploadside">
                  <div className="closebtn" onClick={() => setFilesmodal([])}>
                    <img src={require('../../../../assets/images/pink/close_icon.png').default} alt="" />
                  </div>
                  <aside className="imageupload">{thumbsmodal}</aside>
                </section>
              ) : (
                <Dropzone onDrop={drop2}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="imginner imagebeforeuploadside">
                      <div className="dropzoneOuter">
                        <img src={require('../../../../assets/images/pink/Asset/demo_bg.png').default} alt="" />
                        <div {...getRootProps({ className: 'dropzone' })} name="content2">
                          <input {...getInputProps()} />
                          <Button variant="contained">Choose File</Button>
                        </div>
                      </div>
                    </section>
                  )}
                </Dropzone>
              )}
            </ModalUploadZone>
            <TextBox>
              <Heading>Collection Name</Heading>
              <Input placeholder="What’s this collection called?" />
            </TextBox>

            <TextBox>
              <Heading>Symbol</Heading>
              <Input placeholder="Ideally 3-5 characters" />
            </TextBox>

            <TextBox>
              <Heading>Description</Heading>
              <Input placeholder="Describe what makes this collection unique" />
            </TextBox>

            <TextBox>
              <Heading>@URL</Heading>
              <Input placeholder="planet.finance/pink/entername" />
              <TextBoxSmall>Anyone can find your collection with this URL</TextBoxSmall>
            </TextBox>
            <StyledButton variant="contained" fullWidth>
              Create Collection
            </StyledButton>
          </Box>
        </Modal>
      </Content>
    </Page>
  )
}
const StyledButton = styled(Button)`
  width: 100%;
  background: linear-gradient(to right, #ff55de, #55b7ff) !important;
  color: #fff !important;
`
const CreateButton = styled(Button)`
  opacity: 0.8;
`

const Page = styled.div`
  color: #fff;
  .editpagegrid {
    // @media (max-width:1200px){
    //   flex-direction:column-reverse;
    // }
  }
`
const Heading = styled.div``
const TextBoxSmall = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  margin-top: 12px;
  span {
    color: #fff;
  }
`
const TextBox = styled.div`
  margin-bottom: 32px;
  ${Heading} {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  &.marketplaceblock {
    ${TextBoxSmall} {
      margin-top: 0;
      margin-bottom: 18px;
    }
    ${Heading} {
      display: flex;
      align-items: center;
      justify-content: Space-between;
    }
    .marketblockouter {
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 14px;
      position: relative;
      padding-top: 100%;
      cursor: pointer;
      &.active {
        border-color: #ff55de;
      }
    }
    .marketblock {
      position: absolute;
      width: fit-content;
      top: 50%;
      left: 50%;
      transform: Translate(-50%, -50%);
      .ic {
        display: flex;
        justify-content: center;
        svg {
          filter: drop-shadow(0px 0px 10px #ff55de);
        }
      }
      h3 {
        margin: 0;
        margin-top: 20px;
      }
    }
  }
  &.freeminting {
    .MuiButton-outlined {
      color: #ff55de !important;
    }
    ${Heading} {
      background: linear-gradient(to left, #3037da 80%, #ff55de 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .MuiInput-root {
    width: 100%;
    input {
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
  .MuiButton-outlined {
    width: 100%;
    svg {
      margin-right: 8px;
      filter: drop-shadow(0px 0px 10px #ff55de);
      path {
        fill: #ff55de !important;
      }
    }
  }
  .pricebox {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    //padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    input {
      //padding-bottom: 0px;
      border-bottom: 0;
    }
    .MuiFormControl-root {
    }
    .MuiInputBase-formControl {
      color: rgba(255, 255, 255, 0.4);
      padding-bottom: 5px;

      svg {
        transform: translateY(-5px);
        path {
          fill: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }

  .iptOuter {
    position: relative;
    .abs {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.4;
    }
  }
`
const CollectionBXOuter = styled.div`
  display: flex;
  margin-top: 20px;
  flex-flow: wrap;
`
const CollectionBX = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 14px;
  margin-bottom: 14px;
  &.hasbg {
    background-size: cover !important;
    background-position: center !important;
  }
  img {
    height: 36px;
    margin: 0 auto;
    display: block;
    transform: rotate(45deg);
    cursor: pointer;
  }
  .bx {
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
    h4 {
      margin: 0;
      font-size: 16px;
      color: #fff;
      margin-top: 8px;
      margin-bottom: 4px;
    }
  }
`

const LeftGamma = styled.div`
  width: 100%;
  display: flex;
  align-items: Center;
  margin-right: 14px;
  input {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 18px;
    font-size: 16px;
    padding: 12px 20px;
    width: -webkit-fill-available;
    margin: 0 10px;
    &::placeholder {
      color: #fff;
    }
  }
  img {
    height: 48px;
    width: 48px;
  }
`
const RightGamma = styled.div`
  button {
    min-width: 100px !important;
    border-radius: 18px !important;
  }
`
const LockedGamma = styled.div`
  display: flex;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 18px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 450px) {
    flex-direction: column;
    ${RightGamma} {
      margin-top: 20px;
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`
const Content = styled.div`
  margin-top: 40px;
  .displayheading {
    font-size: 20px;
  }
  .updateprofile {
    width: 100%;
    background: linear-gradient(to right, #ff55de, #de27de) !important;
    color: #fff !important;
  }
`

const Uploadzone = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;

  .imginner {
    position: relative;
    &.imagebeforeuploadside {
      padding: 20px;
    }
    &.imageuploadside {
      padding-top: 100%;
      width: 100%;
      overflow: hidden;
      .closebtn {
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: 30px;
        height: 40px;
        width: 40px;
        z-index: 10;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .imageupload {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4);
        }
      }
    }
  }
  .dropzoneOuter {
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    max-width: 200px;
    margin: auto;
    p {
      padding-top: 0;
      margin-top: 0;
    }
  }
`

const ModalUploadZone = styled(Uploadzone)`
  border: 0 !important;

  margin-bottom: 14px !important;
  .dropzoneOuter {
    img {
      width: 90px !important;
      height: auto !important;
      border-radius: 14px;
      margin-bottom: 20px;
      object-fit: cover;
      //position:relative !important;
    }
  }
  .imageuploadside {
    width: 90px !important;
    margin: auto;
    padding-top: 90px !important;
  }
  .imginner {
    border-radius: 14px;
    img {
      object-fit: cover;
    }
    .closebtn {
      top: 4px !important;
      right: 4px !important;
      height: 20px !important;
      width: 20px !important;
    }
  }
`

const PreviewzoneOuter = styled.div`
  margin-left: 20%;
  @media (max-width: 1200px) {
    margin: auto;
    margin-bottom: 30px;
  }
  ${TextBox} {
    margin-bottom: 16px;
    ${Heading} {
      margin-bottom: 0;
    }
  }
  .imginner {
    width: 100%;
  }
`
const Previewzone = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  max-width: 320px;
  min-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  .txtt {
    color: rgba(255, 255, 255, 0.4);
    max-width: 200px;
    text-align: center;
  }
  .imageupload {
    display: flex;
    justify-content: Center;
    .imageuploadinner {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

export default CreateNFT
