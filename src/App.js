import "./styles.css"
import Loginpage from "./components/LoginPage"
import { useState } from "react"
import OriginalPage from "./components/OriginalPage";
import CreateAccount from "./components/createAccount";
import Profile from "./components/pages/Profile";
import authContext from './contexts/authContext';
import ExternalRoutes from './components/pages/ExternalRoutes';
import userContext from "./contexts/userContext";




export default function App(){
 const [user, setUser]=useState(-1)

 const [showNavBar, setShowNavBar]=useState(false);

 const [token, setToken]=useState("");

 const [userinfo, setUserinfo]=useState({});

 return(
  <userContext.Provider value={{user, token, setUser, setToken, showNavBar, setShowNavBar, userinfo, setUserinfo}}>
  <ExternalRoutes token={token} setToken={setToken} setUser={setUser}/>
  </userContext.Provider>
 )


}

