import { useState } from "react";
import Show from "../Show";
import Show2 from "../show2";
import Theme from "../Theme";
function App() {
   let [col,setcol] = useState('yellow')

  function blue(){
    setcol('blue')
  }
  function red(){
    setcol('red')
  }
  function black(){
    setcol('black')
  }
  function orange(){
    setcol('orange')
  }
  return(

    <>
    <div style={{height:"50vh" , width:"50vw" , marginLeft:"20px" , marginBottom:"20px" , backgroundColor: col}}>
      
        


    </div>

    <button onClick={red} style={{marginLeft:"20px"}}>red</button>
<button onClick={blue} style={{marginLeft:"20px"}}>blue</button>
<button onClick={black} style={{marginLeft:"20px"}}>black</button>
<button onClick={orange} style={{marginLeft:"20px" , marginRight:"20px"}}>orange</button>
    <Show/>
    <Show2/>
    <Theme/>
    </>
  )
}

export default App
