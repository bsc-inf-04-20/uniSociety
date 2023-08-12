import React from 'react'
import { useState} from 'react';
import  styled  from 'styled-components';
import Community1 from '../../images/Community1.jpg';
import SocietyList from '../SocietyList';
import CreateSociety from './../CreateSociety';

function Search() {

  const [scene, setScene]=useState(1)

 if(scene==1){
  return (
    <MainBody>
      <h1>FIND YOUR SOCIETY</h1>
      <div style={{display:'inline-block', borderRadius:'15%'}}>
        <SocietyList setScene={setScene}/>
      </div>
    </MainBody>
  )
 }

 if(scene==2){
  return (
    <MainBody>
      <h1>FIND YOUR SOCIETY</h1>
      <div style={{display:'inline-block', borderRadius:'15%'}}>
        <CreateSociety setScene={setScene}/>
      </div>
    </MainBody>
  )
 }

}


const MainBody=styled.div`
   background-image:url(${Community1}) ;
   background-color: rgb(0,0,0,0.5);
   background-blend-mode: multiply;
   border-top:0.1px white solid;
   background-size:cover;
   width:100%;
   position:absolute;
   left:0px;
   height:150%;
   text-align:center;
   justify-content:center;
   align-content:center;
   
`;



export default Search