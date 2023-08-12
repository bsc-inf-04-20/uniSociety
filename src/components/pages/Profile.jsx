import React from 'react'
import { useEffect, useContext } from 'react';
import  styled  from 'styled-components';
import userImage from '../../images/userImage.png';
import Community1 from '../../images/Community1.jpg';
import userContext from './../../contexts/userContext';
import {AiOutlineMail} from 'react-icons/ai';
import {MdDateRange} from 'react-icons/md';
import {FaGraduationCap} from 'react-icons/fa';

function Profile() {

  const {user, token, userinfo, setUserinfo}=useContext(userContext);

  const URL=`https://dull-red-meerkat-hem.cyclic.app/users/${user}`;

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
          setUserinfo({...data});
       })
    
  },[URL,token]);

  const imageStyle={width:'40px',
                    height:'40px',
                    margin:'1rem',
                    borderRadius:'50%'}



  return (
    <MainBody>
    <h1>PROFILE</h1>
     
    <div style={{display:'inline-block', borderRadius:'5%'}}>
     <SlideComponent >
        <Top> 
          <img src={userImage} alt='user' style={imageStyle}/>
          <h2>{"@"+userinfo.username}</h2>
        </Top>
        <Bottom>
            <BottomSide>
               <h3>Name{": "+userinfo.name}</h3>
              <h3><AiOutlineMail/> Email{": "+userinfo.email}</h3>
              <h3><MdDateRange/> Birthday{": "+userinfo.birthday}</h3>
            </BottomSide>

            <BottomSide style={{borderLeft:'0.1px solid white'}}>
               <h3><FaGraduationCap/> Year Of study{": "+userinfo.yearOfStudy}</h3>
               <h3>sex{": "+userinfo.sex}</h3>
               <button className='btn'>Edit</button>
            </BottomSide>
        </Bottom>
    </SlideComponent>
     </div>
 
</MainBody>
  )
}

const SlideComponent= styled.div`
background:rgb(0,0,0,0.9);
overflow:hidden;
border-radius:15px;
border:0.1px white solid;
width:700px;
height:435px;
color:white
`;

const MainBody=styled.div`
background-image:url(${Community1}) ;
background-color: rgb(0,0,0,0.4);
background-blend-mode: multiply;
border-top:0.1px white solid;
background-size:cover;
width:100%;
position:absolute;
left:0px;
height:100%;
text-align:center;
justify-content:center;
align-content:center;
`;

const BottomSide=styled.div`
  display:flex;
  flex-direction:column;
  width:300px;
  height:200px;
  padding:1rem;
  align-content:left;
  text-align:left;
  justify-content:left;
  justify-items:left;
`;

const Top=styled.div`
  direction:flex;
  flex-direction:inline-block
  width:600px;
  height:100px;
  `;
  
  const Bottom=styled.div`
  margin:4rem;
  padding:2rem;
  display:flex;
  width:600px;
  height:200px;
  `;

export default Profile