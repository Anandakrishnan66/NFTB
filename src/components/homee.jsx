import React from 'react'
import '/home/ananda/Desktop/react1/my-app/src/pages/home.css'
//import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
//import Typography from '@mui/material/Typography';
//import Alert from '@mui/material/Alert';
//import LinearProgress from '@mui/material/LinearProgress';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function Homee() {
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

  
         <div className='T4'>

         </div>

         <div>

         </div>



  
   
    



</div>

  )
}

export default Homee