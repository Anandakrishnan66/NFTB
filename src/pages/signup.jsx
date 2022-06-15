import React from 'react'
import {useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
function Signup() {
  const [lab,setLab]=useState(" ");
  const[mess,setMess]=useState(" ");
    const handleChange=(e)=>{
        if(e.target.value==="ananda@"){
             setLab(e.target.value)
             setMess("valid")
              console.log('yes')
              
        }
        else{
          setMess("not valid")
        }
    
        
    }
    const errorMessage=()=>{
      if(test(lab)){
        setMess("valid")
      }
      else{
        setMess('not valid')
      }
  }
  return (
      <div>
    <div className='signup'>

      <FormControl  variant='outlined'>
          

            <TextField   onChange={(e)=>handleChange(e)} label="email"type={'email'} id="filled-basic" variant='outlined' >
                 
           </TextField>
           <label style={{color:'red'}}>{mess}</label>

            

           
               

          
      </FormControl>




    </div>
    </div>
  )
}

export default Signup