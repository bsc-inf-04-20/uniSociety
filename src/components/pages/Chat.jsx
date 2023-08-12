import React from 'react'
import { useEffect } from 'react';

function Chat() {


  useEffect(()=>{
    console.log("this is the chat")
  }, [])


  return (
    <div>Chat</div>
  )
}

export default Chat