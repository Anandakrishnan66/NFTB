import React, { isValidElement } from 'react'
import {useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { Validator } from 'react';
import validator from 'validator'
import { color, textTransform } from '@mui/system';
function Signup() {
  
  const[mess,setMess]=useState(" ");
  
    const handleChange=(e)=>{
       
      var email=e.target.value
        if(validator.isEmail(email)){
          setMess('valid');

           
              
        }
        else{
          setMess("not valid");
          
        }
    
      
        }

        var handleColor=(e)=>{
          console.log(mess);
          const col='';
          if(e.key==='Enter'){
          if(e.target.value==='valid'){
           document.getElementById('tEmail').style.color="red"
          }
          else{
            const col={
              color:'red'

            }
          }
        }
          return col
        }

    

    

    

    
  return (
      <div>
    <div className='signup'>

      <FormControl  variant='outlined'>
          

            <TextField  
               aria-relevant='text' 
               onInput={(e)=>{
                 handleChange(e);
               }} 
                
               onChange={(e)=>{
                 
                 handleColor(e);
                 
               
               }}

               label="email"   required='true' id ='tEmail' >
                 
           </TextField>
           
           <label style={{color:'red'}}>{mess}</label>

           <input
             
                
               onChange={(e)=>{
                handleColor(e)
               
               }}
               type='password'
              required='true' id ='tPass' >
                 
           </input>

           
               

          
      </FormControl>




    </div>
    </div>
  )
}

export default Signup