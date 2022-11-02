// @ts-nocheck
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader } from 'modules/pink/style'
import { Button, Input, TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Switch from '@mui/material/Switch';
import { Grid } from '@mui/material'
import Dropzone from 'react-dropzone'


const CollectionEdit = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  const [logofile, setLogofile] = useState([])

  const [featuredfile, setFeaturedfile] = useState([])
  const [bannerfile, setBannerfile] = useState([])


  const logodrop = (acceptedFiles ) => {
    setLogofile(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }

  const featureddrop = (acceptedFiles ) => {
    setFeaturedfile(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }

  const bannerdrop = (acceptedFiles ) => {
    setBannerfile(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }
  const logothumb = logofile.map((file) =>
    <div className="imageuploadinner" key={file.name}>
      <img
        src={file.preview}
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  )

  const featuredthumb = featuredfile.map((file) => (
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

  const bannerthumb = bannerfile.map((file) => (
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
    return () => logofile.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [logofile])

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => featuredfile.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [featuredfile])

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => bannerfile.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [bannerfile])

  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Edit Collection</TitleText>
          <TitleInfo className="title-info">Customize your collections & show the community what makes you unique</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        <DisplayHeadings className='displayheading'>Collections</DisplayHeadings>
        <Grid container spacing={2} className="editpagegrid">
            <Grid item xs={12} md={12} lg={5}>
            <TextBox>
              <Heading>Logo image</Heading>
              <TextBoxSmall>
                  Place your text here.
                </TextBoxSmall>
              <Uploadzone className='logoupload'>
                {logofile.length > 0 ? (
                  <section className="imginner imageuploadside">
                    <div className="closebtn" onClick={() => setLogofile([])}>
                      <img src={require('assets/images/pink/close_icon.png').default} alt="" />
                    </div>
                    <aside className="imageupload">{logothumb}</aside>
                  </section>
                ) : (
                  <Dropzone onDrop={logodrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="imginner imagebeforeuploadside">
                      <div className="dropzoneOuter">
                      
                        <div {...getRootProps({ className: 'dropzone' })} name="content2">
                          <input {...getInputProps()} />
                          {/* <Button variant="contained">Choose File</Button> */}
                          <img src={require('assets/images/pink/Creators/2.png').default} alt="" />
                        </div>
                      </div>
                    </section>
                    )}
                  </Dropzone>
                )}
              </Uploadzone>
            </TextBox>



            <TextBox>
              <Heading>Featured image</Heading>
              <TextBoxSmall>
                  Place your text here.
                </TextBoxSmall>
              <Uploadzone className='featureupload'>
                {featuredfile.length > 0 ? (
                  <section className="imginner imageuploadside">
                    <div className="closebtn" onClick={() => setFeaturedfile([])}>
                      <img src={require('assets/images/pink/close_icon.png').default} alt="" />
                    </div>
                    <aside className="imageupload">{featuredthumb}</aside>
                  </section>
                ) : (
                  <Dropzone onDrop={featureddrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="imginner imagebeforeuploadside">
                      <div className="dropzoneOuter">
                      
                        <div {...getRootProps({ className: 'dropzone' })} name="content2">
                          <input {...getInputProps()} />
                          {/* <Button variant="contained">Choose File</Button> */}
                          <img src={require('assets/images/pink/Creators/1.png').default} alt="" />
                        </div>
                      </div>
                    </section>
                    )}
                  </Dropzone>
                )}
              </Uploadzone>
            </TextBox>




            

            <TextBox>
              <Heading>Banner image</Heading>
              <TextBoxSmall>
                  Place your text here.
                </TextBoxSmall>
              <Uploadzone className='bannerupload'>
                {bannerfile.length > 0 ? (
                  <section className="imginner imageuploadside">
                    <div className="closebtn" onClick={() => setBannerfile([])}>
                      <img src={require('assets/images/pink/close_icon.png').default} alt="" />
                    </div>
                    <aside className="imageupload">{bannerthumb}</aside>
                  </section>
                ) : (
                  <Dropzone onDrop={bannerdrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="imginner imagebeforeuploadside">
                      <div className="dropzoneOuter">
                      
                        <div {...getRootProps({ className: 'dropzone' })} name="content2">
                          <input {...getInputProps()} />
                          {/* <Button variant="contained">Choose File</Button> */}
                          <img src={require('assets/images/pink/Creators/2.png').default} alt="" />
                        </div>
                      </div>
                    </section>
                    )}
                  </Dropzone>
                )}
              </Uploadzone>
            </TextBox>


                <TextBox>
                  <Heading>Name</Heading>
                    <Input placeholder='Enter your full name'/>
                  </TextBox>
                  <TextBox>
                  <Heading>URL</Heading>
                  <TextBoxSmall>
                  Customise your URL
                </TextBoxSmall>
                    <Input placeholder='https://reactjs.org/docs/getting-started.html'/>
                  </TextBox>
                  <TextBox>
                  <Heading>Description</Heading>
                  <TextBoxSmall>
                  Customise your description
                </TextBoxSmall>
                    <TextareaAutosize placeholder='HI?' minRows={3}/>
                  </TextBox>
                  <TextBox>
              <Heading>Royalties</Heading>
              <div className="iptOuterMain">
              <div className="iptOuter">
                <Input placeholder="10" />
                <span className="abs">%</span>
              </div>
              <Button variant="outlined">Set</Button>

              </div>
              <div style={{height:10}}></div>
              <TextBoxSmall>You earn this % on all future sales of this asset.</TextBoxSmall>
            </TextBox>
            <TextBox>
              <Heading className='koth'>KotH Royality <Switch ariaLabel='Switch demo' /></Heading>
              <div className="iptOuterMain">
              <div className="iptOuter">
                <Input placeholder="10" />
                <span className="abs">%</span>
              </div>
              <Button variant="outlined">Set</Button>

              </div>
              <div style={{height:10}}></div>
              <TextBoxSmall>You earn this % on all future sales of this asset.</TextBoxSmall>
            </TextBox>
                  {/* <TextBox>
                  <Heading>Get Verified</Heading>
                  <Grid container spacing={2}>
                    <Grid item sm={6}>
                    <Button variant="outlined"><TwitterIcon/> Verify With Twitter</Button>
                    </Grid>
                    <Grid item sm={6}>
                    <Button variant="outlined"><InstagramIcon/> Verify With Instagram</Button>
                    </Grid>
                  </Grid>
                  </TextBox>
                   */}
                   <Button variant="contained" className='updateprofile'>Update Collections</Button>
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              
            </Grid>

          </Grid>
      </Content>

    </Page>
  )
}

const Page = styled.div`
  color:#fff;
`
const Heading = styled.div`
`
const TextBoxSmall = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  margin-bottom: 12px;
  margin-top:-5px;
  span {
    color: #fff;
  }
`
const TextBox = styled.div`
margin-bottom:32px;
.koth{
  display:flex;
  align-items:center;
  .MuiSwitch-root {
    margin:0;
    margin-left:10px;
  }
}
  ${Heading}{
    font-size:20px;
    font-weight:bold;
    margin-bottom:14px;
  }

  .MuiInput-root{
    width:100%;
    input{
      padding-bottom:10px;
      border-bottom:1px solid rgba(255,255,255,0.4);
    }
}
textarea{
  width:100%;
  background:Transparent;
  padding-bottom:10px;
  border:0;
  border-bottom:1px solid rgba(255,255,255,0.4);
}
.MuiButton-outlined{
  width:100%;
  svg{
    margin-right:8px;
    filter: drop-shadow(0px 0px 10px #FF55DE);
    path{
      fill: #FF55DE !important;
    }
  }
}
.iptOuterMain{
  display:flex;
  //align-items:flex-end;
  .iptOuter {
    width: 100%;
  }
  button{
    max-width:unset;
    min-width:80px !important;
    width:auto;
    max-height:40px;
    margin-left:10px;
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

const Uploadzone = styled.div`
  border: 2px dashed rgba(255,255,255,0.15);
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

  &.logoupload{
    border-radius:50%;
    height: 100px;
    width: 100px;
    overflow: hidden;
      .imginner{
        padding: 5px;
        .dropzoneOuter{
          max-width:unset;  
          img{
            width:100%;
            border-radius:50%;
            height:90px;
          }
        }
      }
  }


  &.featureupload{
    border-radius:0;
    height: 100px;
    width: 260px;
    overflow: hidden;
      .imginner{
        padding: 5px;
        .dropzoneOuter{
          max-width:unset;  
          .dropzone{
            height:90px !important;
          }
          img{
            width:100%;
            height:100%;
            border-radius:0;
            object-fit: cover;

          }
        }
      }
  }


  &.bannerupload{
    border-radius:0;
    height: 160px;
    width: 100%;
    overflow: hidden;
      .imginner{
        padding: 5px;
        .dropzoneOuter{
          max-width:unset;  
          .dropzone{
            height:150px !important;
          }
          img{
            width:100%;
            height:100%;
            border-radius:0;
            object-fit: cover;

          }
        }
      }
  }
`



const Content = styled.div`
  .displayheading{
    font-size:20px;
  }
  .updateprofile{
    width:100%;
    background:linear-gradient(to right, #FF55DE ,#DE27DE) !important;
    color:#fff !important;
  }
  .editpagegrid{
    @media (max-width:1200px){
      flex-direction:column-reverse;
    }
  }
`

export default CollectionEdit
