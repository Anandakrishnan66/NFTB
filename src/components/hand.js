export const Hand =()=>{
    const clickhandler=(event,count=1)=>{
          console.log("Button clicked",count,event)
    }
    return(
        <div>
<button onClick={clickhandler}>click</button>
<button onClick={(event) => clickhandler(event,5)}>click</button>
   </div>
    )
}