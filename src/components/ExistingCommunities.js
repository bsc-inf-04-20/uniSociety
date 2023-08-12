import React, { useContext, useEffect } from 'react'
import userContext from '../contexts/userContext';
import {HiOutlineUserGroup} from 'react-icons/hi';

function ExistingCommunities(props) {
  

  return (
    <>
       <ol style={{height:'400px', overflowX:'hidden', overflowY:'scroll'}}>
       {props.societies.map((society)=>(
         <li style={{margin:'1rem'}} key={society.society_id}>
           <div class="flip-card">
                 <div class="flip-card-inner">
                   <div class="flip-card-front">
                      <h2>{society.society_name}</h2>
                      <HiOutlineUserGroup/>
                   </div>
                   <div class="flip-card-back">
                      <h1>Focus: {society.focus}</h1>
                      <p>Description: {society.society_description}</p>
                      <button>Request</button>
                   </div>
                 </div>
           </div>
         </li>
       ))}
    </ol>
    </>
  )
}

export default ExistingCommunities