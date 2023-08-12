import React from 'react'
import { useEffect } from 'react';

function GroupList() {

  const URL='https://dull-red-meerkat-hem.cyclic.app/users'

useEffect(()=>{
   fetch(URL)
}, [])

  return (
        <div>
        <h1 className="header">{"WELCOME TO UNI-SOCIETY"}</h1>

        </div>
  )
}

export default GroupList;