import React , { useState } from 'react'

const Controll = () => {
  const [data , setData] = useState();
  const submithandler = (e)=>{
    console.log(e.target.data)
    setData(e.target.value)
  }
  return (
    <div>
      <input
       type="text" 
       name='name'
       value={data}
       />
       <button onClick={(e)=>{submithandler(e)}}>
        Display Name
       </button>

       <h1>{data}</h1>
    </div>
  )
}

export default Controll