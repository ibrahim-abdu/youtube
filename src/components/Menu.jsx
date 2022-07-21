import React from 'react'

import styled from 'styled-components';
import logo from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Container = styled.div`
   flex:1;
   background-color:${({theme})=>theme.bg};
   height:100vh;
   color:${({theme})=>theme.text};
   font-size:14px;
   position: sticky;
   top: 0;
` 
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo=styled.div`
    display:flex;
    align-items:cente r;
    gap:5px;
    font-weight:bold;
    margin-bottom:25px;
` 
const Img=styled.img`
    height:25px;
`
const Item=styled.div`
    display: flex;
    align-items:center;
    gap:20px;
    cursorr:pointer;
    padding: 7px 0px 0px 0px;
`
const Hr=styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`
const Login= styled.div`

`
const Button=styled.button`
padding: 5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
font-weight:500;
margin-top:5px;
cursor:pointer;
align-items: center;
gap:5px;
`

export default function Menu({darkMode,setDarkMode}) {

  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo}></Img>
                MatiTube
            </Logo>
            <Item>
              <HomeIcon/>
              Home
            </Item>
            
            <Item>
              <ExploreOutlinedIcon/>
              Explore
            </Item>
            <Item>
              <SubscriptionsOutlinedIcon/>
              Subscriptions
            </Item>
            <Hr/>
            <Item>
              <VideoLibraryOutlinedIcon/>
              Library
            </Item>
            <Item>
              <HistoryOutlinedIcon/>
              History
            </Item>
            <Hr/>
            <Login>
              Sign in to like videos , comment and subrcribe. 
              <Button>
                <AccountCircleOutlinedIcon/>
                SIGN IN
                </Button>

            </Login>
            <Hr/>


            <Item>
              <LibraryMusicOutlinedIcon/>
              Music
            </Item>
            <Item>
              <SportsBasketballOutlinedIcon/>
              Sport
            </Item>
            <Item>
              <SportsEsportsOutlinedIcon/>
              Gaming
            </Item>
            <Item>
              <MovieCreationOutlinedIcon/>
              Movies
            </Item>
            <Item>
              <AssignmentOutlinedIcon/>
              News
            </Item>
            <Item>
              <LiveTvOutlinedIcon/>
              Live
            </Item>
            
            <Hr/>
         
            <Item>
              <SettingsOutlinedIcon/>
              Settings
            </Item>
            


             <Item>
              <FlagOutlinedIcon/>
              Report
            </Item>
             <Item>
              <HelpOutlinedIcon/>
              Help
            </Item>
             <Item onClick={()=>setDarkMode(!darkMode)}>
              <SettingsBrightnessOutlinedIcon/>
              Lght Mode
            </Item>
            

            
        </Wrapper>
    </Container>
  )
}
