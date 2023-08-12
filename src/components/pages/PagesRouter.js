import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './Chat';
import Profile from './Profile';
import Search from './Search';
import GroupList from './GroupList';
import Homepage from './Homepage';
import { useContext } from 'react';
import userContext from '../../contexts/userContext';
import { useEffect } from 'react';
import OriginalPage from '../OriginalPage';
import Community1 from '../../images/Community1.jpg';



function PagesRouter() {

  const {user, showNavBar, setShowNavBar} = useContext(userContext);

  let divStyle = {
  };

  useEffect(()=>{
    console.log("this is the pages router");
  }, [])


  const id=user;

  const baseRoute=`/${id}/`

  const base=`/${id}/home`;
  const groupList=`/${id}/groupList`;
  const profile=`/${id}/profile`;
  const chat=`/${id}/chat`;
  const search=`/${id}/search`

  const URL= window.location.href.toString().split("/")


  if(user!==-1 && URL[URL.length-1]==='home'){
    setShowNavBar(true);
  }




  return (
    <div className={divStyle}>{
       showNavBar?(<OriginalPage/>):null
      }
        <Routes>
           <Route  path={groupList} element={<GroupList/>}/>
           <Route  path={base} element={<Homepage/>}/>
           <Route  path={profile} element={<Profile/>}/>
           <Route  path={chat} element={<Chat/>}/>
           <Route  path={search} element={<Search/>}/>
        </Routes>
    </div>    
  )
}

export default PagesRouter