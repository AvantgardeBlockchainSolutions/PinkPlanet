import React, { useState } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader } from 'modules/pink/style'
import { Button, Input } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material'
import Drops from './components/Dropzone';


const EditProfile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Edit Profile</TitleText>
          <TitleInfo className="title-info">Customize your profile & show the community what makes you unique</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        <DisplayHeadings className='displayheading'>Personal</DisplayHeadings>
        <Grid container spacing={2} className="editpagegrid">
            <Grid item xs={12} md={12} lg={5}>
                <TextBox>
                  <Heading>Name</Heading>
                    <Input placeholder='Enter your full name'/>
                  </TextBox>
                  <TextBox>
                  <Heading>Bio</Heading>
                    <Input placeholder='Tell us what makes you unique on a planet of 8 billion'/>
                  </TextBox>
                  <TextBox>
                  <Heading>Email</Heading>
                    <Input placeholder='Where can the world reach you?'/>
                  </TextBox>
                  <TextBox>
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
                  <Button variant="contained" className='updateprofile'>Update Profile</Button>
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              <Drops/>
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
const TextBox = styled.div`
margin-bottom:32px;
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

export default EditProfile
