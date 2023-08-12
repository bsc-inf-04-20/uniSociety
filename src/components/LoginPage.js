import { useContext, useState, useEffect } from "react";
import userContext from "../contexts/userContext";
import { useRef } from "react";
import  styled  from "styled-components";
import { MagnifyingGlass } from "react-loader-spinner";
import {useNavigate} from "react-router-dom";
import Desk3 from '../images/Desk3.jpg';
import UniLogo from '../images/UniLogo.png'





export default function Loginpage(){

    const { setToken, setUser,setShowNavBar} = useContext(userContext);

    const history=useNavigate();

    const[password, setPassword]=useState("")

    const[email, setEmail]=useState("");

    const [loading, setLoading]=useState(false);

    const [response, setResponse]=useState("");

    useEffect(()=>{
        handleLogout();
    }, [])

    const handleLogout = () => {
        // Clear user and token information from context
        setShowNavBar(false);
        setUser(-1);
        setToken('');

      };


    async function login(e){

        if(password==="" || email===""){
            alert("All fields are mandetory");
        }else{

        e.preventDefault();
         setLoading(true);
          fetch("https://dull-red-meerkat-hem.cyclic.app/auth/login", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(async (res)=>{
            const data=await res.json();
            setToken(data.access_token);
            setUser(data.id);
            console.log(data.access_token);
            console.log(data.id)
            setEmail("");
            setPassword("");
            if(data.id>-1){
            history(`/${data.id}/home`);
                }
            else{
              setResponse("wrong Password")
            }
            setLoading(false);
        }).catch((err)=>{
            console.log(err)
        })
    }
       
    }


    return(
        <MainBody style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
       
        <FormStyle onSubmit={login} style={{   border:'1px white solid', borderRadius:'5%'}}>
        <img   src={UniLogo} alt='unimaLogo' style={{ border: '0px white solid', height: "130px", width: "130px", borderRadius: "50px", marginRight: "2rem" }} />    
        <h1 className="header">UNI-SOCIETY</h1>
            <div>
               <input size={30} type="text" placeholder="email" id="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>

            <div>
               <input size={30 } type="text" placeholder="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn" style={{width:'200px'}}>login</button><br/>
            
            <button className="btn" onClick={()=>history('/createaccount')}>Create Account</button>

            <p>{
                loading?(<MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor = '#c0efff'
                    color = '#e15b64'
                  />):(<label style={{color:'red'}}>{response}</label>)
                }</p>
          
        </FormStyle>
        </MainBody>
    )
}


const MainBody=styled.div`
background-image:url(${Desk3}) ;
background-size:cover;
width:100%;
position:absolute;
left:0px;
height:100%;
display:flex;
`;




const FormStyle=styled.form`
    background: rgba(0,0,0,0.9);
    padding:50px;
    position:absolute;
    width:800px;
    height:600px;
    -webkit-box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.45);
    -moz-box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.45);
     box-shadow: -1px 1px 5px 9px rgba(0,0,0,0.45);

    div{
       width:100%; 
       padding:10px
    }

    input{
        color:white;
        border:none;
        background-color:rgba(0,0,0,0.9);;
        border-bottom:1px solid #1890ff;
        padding:5px 10px
        outline:0;
        font-size: 1rem;
    }

    input :focus ::-webkit-input-placeholder{
       transition:text-indent 0.4s 0.4s ease;
       text-indent: -100%;
       opacity:1;
    }
`;

const styledButton=styled.div`
  border: 2px solid red;
  padding:20px;
  color:white;
  background:linear-gradient(35deg, #494949, #313131);
`