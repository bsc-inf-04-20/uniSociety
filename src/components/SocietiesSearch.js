import React, { useEffect } from 'react'
import { useState } from 'react';
import {HiOutlineUserGroup} from 'react-icons/hi';

function SocietiesSearch({searchContent,societies, setShowexistingList}) {

const [results, setResults]=useState([])

const searchSocieties=()=>{


     const keyWords=searchContent.toLowerCase().trim().split(/\s+/);

     console.log("keyword :"+ keyWords);

     let newList=societies.filter(society=>{

     const lowerCaseSearches={
         name:society.society_name.toLowerCase(),
         description:society.society_description.toLowerCase(),
         focus:society.focus.toLowerCase()
    }


  for(let i=0;i<keyWords.length;i++){
    if(lowerCaseSearches.name.includes(keyWords[i]) || lowerCaseSearches.description.includes(keyWords[i]) || lowerCaseSearches.focus.includes(keyWords[i])){
      return society;
    }
  }

 })
 setResults(newList);
}

useEffect(searchSocieties, [searchContent])


  return (
    <>
    <h2>results:</h2>

    <ol style={{height:'400px', overflowX:'hidden', overflowY:'scroll'}}>
       {results.map((society)=>(
         <li id={society.society_id} style={{margin:'1rem'}}>
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

   <button className='btn' onClick={()=>setShowexistingList(true)}>Back</button>

    </>
  )
}

export default SocietiesSearch