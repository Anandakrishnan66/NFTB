import { Button, Typography,ButtonGroup,TextField } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//import useState from 'react'
//import '/home/ananda/Desktop/react1/my-app/src/pages/home.css'
function HomeFoot() {
  

  return (
      <div>

        <div className="foot1">
            <Typography variant ="h5" gutterBottom  style={{
                position: 'absolute',
                width: '358px',
                height: '47px',
                left: 'calc(50% - 358px/2 + 2px)',
                top: '24px',
                
                /* SUB HEADER */
                fontFamily: 'Outfit',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '28px',
                
                /* or 138% */
                textAlign: 'center',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                
                color: '#000000'
                
                
            }}>Are you ready</Typography>

          
          <Typography variant='h3' id='footyp'>be a part of the next big thing</Typography>

            <Button variant="conatined" id="footbut">
              <label id='butlabel'>Get Started</label>
            </Button>


            
        </div>
        <label id='footown'>Own Me</label>

        <ButtonGroup orientation='vertical'  variant='string' id='butgroup1'>
           <Button>Home</Button>
           <Button>About</Button>
           <Button>Buy Nfts</Button>
           <Button>Sell Nfts</Button>
        </ButtonGroup>

        <label id="market">Market</label>
        <ButtonGroup orientation='vertical' variant='string' id='butgroup2'>
            <Button>Browse Nfts</Button>
            <Button>Buy Nfts</Button>
            <Button>Sell Nfts</Button>
        </ButtonGroup>

        <label id='footcont'>Contact</label>
        <ButtonGroup orientation='vertical' variant='string' id="butgroup3">
            <Button>Email</Button>
            <Button>Linkedin</Button>
            <Button>Instagram</Button>
            <Button>Twitter</Button>
        </ButtonGroup>

        <Typography id="join">Join Our NewsLetter</Typography>
  <div >
     <TextField  placeholder='Email' typeof='email' variant='filled' autoFocus='false'  style={{
         position: 'absolute',
         width: '400px',
         height: '53px',
         left: '1180px',
         top: '4000px',
         
         background: '#13124F',
         borderRadius: '75px',
     }} onMouseEnter={{backgorund:'white'}}>
             

     </TextField>
     <Button variant='conatined' id='textbut'>Submit</Button>
  </div>
  </div>
  )
}

export default HomeFoot