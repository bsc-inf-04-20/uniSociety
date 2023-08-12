import React, { useContext, useEffect, useState } from 'react'
import  styled  from 'styled-components';
import   {BiWinkSmile} from 'react-icons/bi'
import {BiSearchAlt} from 'react-icons/bi';
import userContext from '../contexts/userContext';
import ExistingCommunities from './ExistingCommunities';
import SocietiesSearch from './SocietiesSearch';

function SocietyList(props) {

    const {token}=useContext(userContext)

    const [societies, setSocieties]=useState([])
    const [searchContent, setSearchContent]=useState("");
    const [showExistingList, setShowexistingList]=useState(true);
  
    const URL='https://dull-red-meerkat-hem.cyclic.app/societies'
  
    useEffect(()=>{
      fetch(URL, {
       method: 'GET',
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + token,
          }
      }).then(res=>res.json())
        .then((data)=>{
         setSocieties([...data]);
    })},[])


const SearchBox={
  border:'none',
  background:'white',
  fontSize:'1.5rem',
  color:'black',
  padding:'1rem 3rem',
  borderRadius:'1rem',
  outline:'none',
  width:'50%',
  margin:'1rem',
}


  


  return (
    <MainContent>  
    <div style={{fontSize:'1.5rem'}}> 
    <BiSearchAlt></BiSearchAlt>
    <input style={SearchBox} type='text' placeholder={"search communities"} 
     value={searchContent} onClick={()=>setShowexistingList(false)} onChange={(e)=>setSearchContent(e.target.value)}/>    
    </div>
    <h2>Where do you belong?</h2>

       {showExistingList?(<ExistingCommunities societies={societies} token={token}/>):(<SocietiesSearch searchContent={searchContent} societies={societies} setShowexistingList={setShowexistingList}/>)}

    <h3>Non of your liking?</h3> 
    <h4 style={{margin:'2px'}}>Why not create your own by clicking the button below <BiWinkSmile /></h4>
   
    <button className='btn' onClick={()=>props.setScene(2)}>CREATE</button>

  </MainContent>
  )
}

const MainContent=styled.div`
background:rgb(0,0,0,0.6);
overflow:hidden;
border-radius:15px;
border:0.1px white solid;
width:900px;
height:800px;
color:white
`;



export default SocietyList