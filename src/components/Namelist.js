export const Namelist =() =>{
    const names=['Bruce ','clerk','diana']
    return <div className="App">
        {
            names.map((nam)=> {
                return <h2 key={nam}>{nam}</h2>
            })
        }
    </div>
}