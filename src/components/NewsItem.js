import React from 'react'


export default function NewsItem(props) {
   let msg = props.username;
   const alertGo = ()=>{

     console.log(msg);
   }
  return (
    <>
    
    <button type="button" className="btn btn-primary" onClick={alertGo}>{props.username}</button>
    
    </>
  )
}
