import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginNRegistration from './LoginNRegistration';
import PagesRouter from './PagesRouter';
import { useContext } from 'react';
import userContext from '../../contexts/userContext';

function ExternalRoutes(props) {
    
  return (
    <BrowserRouter>
        <LoginNRegistration token={props.token} setToken={props.setToken} setUser={props.setUser}/>
        <PagesRouter/>
    </BrowserRouter>
  )
}

export default ExternalRoutes