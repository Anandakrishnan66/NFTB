import { useState  } from "react"
export const Form = () => {
    const [Username,setUsername]=useState('')

    const handleSubmit = (evet) => {
             evet.preventDefault()
             alert(`form data is ${Username}`)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input 
            type='text' 
            value={Username} 
            onChange={(event) => setUsername(event.target.value)}>
                
            </input>
            <button type='submit'>Submit</button>
        </div>
    </form>
}