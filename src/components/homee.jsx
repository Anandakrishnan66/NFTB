import React from 'react'
import '/home/ananda/Desktop/react1/my-app/src/pages/home.css'
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
//import Alert from '@mui/material/Alert';
//import LinearProgress from '@mui/material/LinearProgress';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import HomeFoot from './homefoot'

function Homee() {

  const pic1=require('/home/ananda/Desktop/react1/my-app/src/pages/Other 18.png')
  const pic2=require('/home/ananda/Desktop/react1/my-app/src/pages/Other 17.png')
  
  
  
  
  return (
<div>
    <div style={{
        position:' absolute',
width:' 10px',
height: '28px',
left: 'calc(50% - 168px/2 - 446px)',
top: '730px',

/* SUB HEADER */
fontFamily: 'Outfit',
fontStyle: 'normal',
fontWeight:' 600',
fontSize: '20px',
lineHeight: '28px',

/* identical to box height, or 138% */
letterSpacing: '0.1em',
textTransform: 'uppercase',

color: '#FFFFFF'


    }}>
      Featured on
  </div>

    <div style={{
        position:'absolute',
        width:'1036px',
        height:'100px',
        left:'calc(50% - 1036px/2 + 1.5px)',
        top:'830px',
        background: 'rgba(99, 88, 189, 0.19)',
         borderRadius: '7px'
    }}>

     <div  className='T1'  >     </div>
     <div className="T2"></div>
     <div className="T3"></div>


            
          


    </div>

  
    <div className="analytics">
         <label  className='ana'>Analytics</label>


         <img src={pic1} alt="analytics" style={{
            width:'500px',
            height:'500px',
            position: 'absolute',
            left: '218px',
            right: '0%',
            top: '21%',
            bottom: '0%'

         }}></img>
        <Typography className='typ' align='inherit' gutterBottom='true' variant='h3' >Built-in analytics to track your Nfts</Typography>
         <p className='para'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
         
         <Button id='viewprice'  variant='contained'>View our Pricing</Button>
          

    </div>


    <div className="smart">
         <label id="applabel">Get Our App</label>

         <p id='Browse'>Browse NFTs from your smartphone</p>
         <p id='browpara'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
          <Button id='viewprice2'variant='contained'>View Price</Button>
     <img  src={pic2} alt="mobile"  style={{
          width:'500px',
          height:'500px',
         position: 'absolute',
         left: 'calc(50% - 100px/2)',
         top: '1655px',
         bottom: '0%',
         boxShadow:'9px 9px 9px #8D8DDA',
         borderRadius:'3cm'
         

         
         
         

     }}></img>
      
    
    </div>
  

  <div className='eli3'></div>

  <div className="foot">
         
           <label id="testi">Testimonials</label>
           <Typography id="others"gap={'10px'}> Read What Others Have To Say</Typography>

       <div className="boxx1"></div>
       <div className="boxx2"></div>
       <div className="boxx3"></div>


       

  </div>
     

     <HomeFoot/>



  
   
    



</div>

  )
}

export default Homee