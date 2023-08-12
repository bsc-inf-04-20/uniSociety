import React, { useContext } from 'react';
import  styled  from 'styled-components';
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsChatText } from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {CgLogOut} from "react-icons/cg";
import {TiGroup} from "react-icons/ti";
import userContext from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

  const {user, setUser, setToken, setShowNavBar} = useContext(userContext);

  const navigate=useNavigate()

  const id=user;

  const base=`/${id}/home`;
  const groupList=`/${id}/groupList`;
  const profile=`/${id}/profile`;
  const chat=`/${id}/chat`;
  const search=`/${id}/search`;



  return (
    <List>
       <SLink to={base}>
          <AiFillHome/>
          <label>Home</label>
        </SLink>
        <SLink to={groupList}>
          <TiGroup/>
          <label>groupList</label>
        </SLink>
        <SLink to={profile}>
          <VscAccount/>
          <label>profile</label>
        </SLink>
        <SLink to={chat}>
          <BsChatText/>
          <label>chat</label>
        </SLink>
        <SLink to={search}>
          <BiSearchAlt2/>
          <label>search</label>
        </SLink>
        <SLink  to='/login'>
          <CgLogOut/>
          <label>logout</label>
        </SLink>
    </List>
  )
}

const List=styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink=styled(NavLink)`
display :flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin-right:2rem;
text-decoration:none;
border:none;
height:3rem;
cursor:pointer;
transform:scale(0.8);
width:5rem;

transition: box-shadow 0.2s ease-in-out; 

  &:hover {
    font-size:1.5rem;
    font-weight: bold;
    cursor:pointer;
    box-shadow: 0px 4px 2px -2px rgba(24, 144, 255, 0.8);
  }



h4{
    color:white;
    font-size:0.8rem;
}

svg{
    color:white;
    font-size:1.5rem;
    
}
&.active{
  border-bottom:2px white solid;

    svg{
        color:white;
    }
    h4{
        color:white;
    }
}

`;


export default NavigationBar