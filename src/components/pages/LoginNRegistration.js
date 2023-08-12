import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import userContext from '../../contexts/userContext';
import CreateAccount from '../createAccount'
import OriginalPage from '../OriginalPage'
import Loginpage from './../LoginPage';
import Homepage from './Homepage';
import GroupList from './GroupList';
import Profile from './Profile';
import Chat from './Chat';
import Search from './Search';

function LoginNRegistration(props) {



  return (
    <Routes>
           <Route path='/login' element={<Loginpage token={props.token} setToken={props.setToken} setUser={props.setUser}/>} />
           <Route path='/createaccount' element={<CreateAccount/>}/>
    </Routes>
  )
}

export default LoginNRegistration