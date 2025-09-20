import React, { useState } from 'react'

 function ShowHidePassword() {
  const[Status, SetStatus] = useState(false);
  return (
    <div>
      <h1 className='text-primary'>ShowHide Password</h1>
      <input type={Status ?"text" : "password"} className='p-2 bg-success'/>
      <button onClick={()=>SetStatus(!Status)}className='p-2 '>
        {Status ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
export default ShowHidePassword;