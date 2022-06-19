import { useState } from 'react';
import '/home/ananda/Desktop/react1/my-app/src/pages/sign.css'
import validator from 'validator'
import FormControl from '@mui/material/FormControl';
import { TextField,Button } from '@mui/material';


export default function Sign() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [em,setEm]=useState('');

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
    var email=e.target.value
    setEmail(e.target.value);
    if(validator.isEmail(email)){
        setEm("valid Email");
    }
    else{
        setEm("Not valid Email");
    }

  setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div >
    <div className="form">
    <span className='messages' style={{fontSize:'30px',left:'calc(50% + 4px)'}}>User Registeration</span>
     
     {/*     
    <span >
            {errorMessage()}
           {successMessage()}
        </span> */}


    

    <form className='form1'>
     

        <TextField style={{top:'100px',left:'calc(50% - 100px)'}}
           onChange={handleName} 
            label="Name" value={name} type="text" />

     

         <TextField  style={{top:'200px',left:'calc(50% - 335px)'}}
                onChange={handleEmail} className="input" 
                label='Email' value={email} type="email"  />

               <span  style={{top:'600px',left:'calc(50% - 335px)'}}>{em}</span>


         <TextField  style={{top:'300px',left:'calc(50% - 570px)'}}
              label="Password" onChange={handlePassword} className="input"
                value={password} type="password" /> 

        <Button  style={{
             position: 'absolute',
             width: '253px',
             height: '73px',
            left: 'calc(50% - 50px)',
             top: '500px',
            color:'cornsilk',
             background: '#8D8DDA',
             borderRadius: '83px'
                 }}
        
             onClick={handleSubmit}  type="submit">
               Submit
        </Button>
    
      

    </form>
    </div>
</div>
);
}