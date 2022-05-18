import {useState} from'react'

export const Mess =(props) =>{

    const [message,setMessage]= useState('welcome you visitor')
    return(
     <div className='App'>
         <h1 className="mess">{message} {props.name}</h1>
            <button onClick={()=> setMessage("Thank you for subscribing")}>Subscribe</button>
               
     </div>

    )
}