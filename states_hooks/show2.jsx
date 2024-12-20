import { useState } from "react";

function Show2()
{
  let [Show2,setShow] = useState(false)

  return(
    <>
      <button onClick={()=>setShow(!Show2)}>  {(Show2) ?"HIDE": "DISPLAY" } </button>
      {(Show2) ?<h2>succes</h2> : "" }
    </>
  )
}

export default Show2