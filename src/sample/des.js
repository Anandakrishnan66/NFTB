import './des.css'
//import React,{useState } from 'react'

export const Des=()=>{
    
    const design={
        fontSize:'50px',
        color:'azure' ,
        background:'black',
        paddingLeft:'20cm',
        marginTop:'0px',
        paddingTop:'2cm',
        marginRight:'-3cm',
        textShadow:'4.6px 4px 6px darkgrey ',
        boxShadow:'4px 4px 2px white'




        

    }
    const click =()=>{
        alert("Entered")
    }
   const hoverin=(event)=>{

       event.target.style.background='black';
       event.target.style.color='white'
   }
   const hoverout=(event)=>{
       event.target.style.background=" white";
       event.target.style.color="black";
   }
  

  
    
    return( 
         <div  >
           
           <switch  >
               
               <div  style={design}>
                   NFT
                       <div className='rect'>
                           
                       <button onMouseOver={hoverin} onMouseOut={hoverout}id="but1">HOME</button>
                       
                       </div>
                       <div className='rect1'><button onMouseOver={hoverin} onMouseOut={hoverout}id="but1">NFT TOKEN</button></div>
                       <div className='rect2'><button onMouseOver={hoverin} onMouseOut={hoverout}id="but1">About Us</button></div>
                       <div className='rect3'><button onMouseOver={hoverin} onMouseOut={hoverout}id="but1">Contact Us</button></div>

               </div>
               <div style={design}> 
               
           </div>


           </switch>
           <div className='body'>
               
            <input onMouseEnter={hoverin} onMouseOut={hoverout} className='inp' placeholder="ENTER  AMOUNT"></input>
            
            <button onMouseOver={hoverin} onMouseOut={hoverout} onClick={click} id='but'>Click</button>
           </div>


    </div>)
}