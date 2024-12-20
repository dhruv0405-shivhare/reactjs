import { useState } from "react"
function Theme(){
    const [theme,setTheme]=useState('white')
    function change(){
        setTheme('black')
    }


    return(
        <>
        <body style={{backgroundColor:theme , height:"100vh"}}>
           <button onClick={change()}>CHANGE</button>
        </body>
        </>
    )
}

export default Theme