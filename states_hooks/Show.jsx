 import { useState } from "react";

function Show(){
    let[h,setH] = useState(false)
    let p = ''

      if(h){
        p=<h1>The time is now</h1>
      }
      else{
        p=''
      }
    
    return(
  
      <>
          <button onClick={()=>setH(!h)}>Show/Hide</button>
{p}
    </>
  )
}

export default Show


