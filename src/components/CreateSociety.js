import React from 'react'
import  { useContext, useEffect, useState } from 'react'
import  styled  from 'styled-components';
import {GiFireworkRocket} from 'react-icons/gi'
import userContext from '../contexts/userContext';
import { SyncLoader } from "react-spinners";

function CreateSociety(props) {

  const {user,token}=useContext(userContext);

  const [loading, setLoading]=useState(false);
  
const [name, setName]=useState("");
const [focus, setFocus]=useState("");
const [description, setDescription]=useState("");

const [leaderOne, setLeaderOne]=useState("")
const [leaderTwo, setLeaderTwo]=useState("")
let leaderOneId=-1;
let leaderTwoId=-1;

let societyID=-1;

let users=[];

const[success, setSuccess]=useState("");



//keep track of whether the society description input has reached its word count limit
const [blocked, setBlocked]=useState(false)



const submitAction=(e)=>{
  e.preventDefault();

  setLoading(true);

    if(name==="" || focus==="" || description==="" || leaderOne==="" || leaderTwo===""){
      alert("All fields must be entered")
      setLoading(false)
    }else{
        fetch('https://dull-red-meerkat-hem.cyclic.app/users', {
         method: 'GET',
         mode:'cors',
         headers:{
            Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer " + token,
              }
         }).then((res)=>res.json())
        .then(data=>{
            console.log(data)
            users=[...data]

           

            console.log(users)
    
             for(let i=0;i<users.length;i++){
                if(users[i].email===leaderOne){
                  leaderOneId=users[i].id;
                  console.log(leaderOneId)
                  break;
                  }
               }



               for(let i=0;i<users.length;i++){
                  if(users[i].email===leaderTwo){
                    leaderTwoId=users[i].id;
                    console.log(leaderTwoId)
                    break;
                     }
              }   
  

        if(leaderOneId===-1){
          alert(`${leaderOne} is not on the platform yet`)
          setLoading(false)
        }else{
          if(leaderTwoId===-1){
            alert(`${leaderTwo} is not on the platform yet`)
            setLoading(false)
          }else{
            createSociety()
              }
          }    
         }).
         catch((err)=>{
            console.log(" error from getting users: "+err)
         })
      }

  }

  //creating the society
  const createSociety=()=>{
    fetch('https://dull-red-meerkat-hem.cyclic.app/societies', {
    method: 'POST',
    mode:'cors',
    headers:{
         Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + token,
            },
    body:JSON.stringify({
              society_name:name,
              focus:focus,
              society_description:description
            }),
               
  }).then((res)=>res.json())
  .then(data=>{
    console.log(data)
    societyID=data.society_id
    setLeaders();
  })
  .catch((err)=>{
 console.log("error from getting the society info: "+err)
 })
}


//setting yourself as the leader
const setLeaders=()=>{
    fetch(`https://dull-red-meerkat-hem.cyclic.app/society-leader/${user}/societies/${societyID}`, {
    method: 'POST',
    mode:'cors',
    headers:{
         Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer " + token,
            }
  }).then((res)=>{
  console.log(res.json())
  setFirstLeader();
  }).catch((err)=>{
 console.log("error from setting the leaders"+err)
 })
}

const setFirstLeader=()=>{



         fetch(`https://dull-red-meerkat-hem.cyclic.app/society-leader/${leaderOneId}/societies/${societyID}`, {
         method: 'POST',
         mode:'cors',
         headers:{
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer " + token,
                   }
         }).then((res)=>res.json())
        .then(data=>{
         console.log(data)
         setSecondLeader();
          })
        .catch((err)=>{
         console.log("error from setting the leader 1"+err)
         })
     
      }

const setSecondLeader=()=>{

           

   
          fetch(`https://dull-red-meerkat-hem.cyclic.app/society-leader/${leaderTwoId}/societies/${societyID}`, {
          method: 'POST',
          mode:'cors',
          headers:{
                  Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer " + token,
                  }
              }).then((res)=>res.json())
              .then(data=>{
              console.log(data)

              //resetting all the fields and data to the initial states
              societyID=-1;
              setDescription("");
              setFocus("");
              setName("");
              setLeaderOne("");
              setLeaderTwo("");
              leaderOneId=-1;
              leaderTwoId=-1;
              users=[];
              setLoading(false)
               })
              .catch((err)=>{
               console.log("error from setting the leader 2"+err)
               })
              
            }




const UpdateDescription=(e)=>{
      const count=e.target.value.trim().split(/\s+/);

      if(count.length<=50){
        setDescription(e.target.value)
        setBlocked(false)
      }
      else{
        setBlocked(true)
      }
}


  return (
    <MainContent>
      <h2>{success}</h2>
        <FormStyle onSubmit={submitAction}>
            <div>
            <input type='text'  placeholder='society name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <input type='text' placeholder='society focus' value={focus} onChange={(e)=>setFocus(e.target.value)}/>
            </div>
            <div>
            <textarea placeholder='society description (less that 50 words)' rows='6' cols='40' value={description} onChange={UpdateDescription} style={blocked ? { boxShadow:'0 0 10px red', border:'2px red solid' } : null}></textarea>
            </div>
            <h3>select two other society leaders</h3>
            <div style={{display:'flex'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                   <input type='text' placeholder='leader one' style={{width:'300px'}} value={leaderOne} onChange={(e)=>setLeaderOne(e.target.value)}/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <input type='text' placeholder='leader two' style={{width:'300px'}} value={leaderTwo} onChange={(e)=>setLeaderTwo(e.target.value)}/>
                </div>
            </div>
            {loading?(<SyncLoader color="#36d7b7" />):
            (<button className='btn' style={{ fontSize:'1.2rem'}} type='submit'>Create Society <GiFireworkRocket/></button>)
            }
            <button className='btn' style={{height:'2rem', fontSize:'1.2rem'}} onClick={()=>props.setScene(1)}>Back</button>
        </FormStyle>

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
color:white;
`

const FormStyle=styled.form`
    display:inline-block;
    padding:50px;

    div{
       width:100%; 
       padding:10px;
    }

    input{
        color:white;
        border:none;
        background-color:rgba(0,0,0,0.9);
        border-bottom:1px solid #1890ff;
        width:700px;
        padding:5px 10px
        outline:0;
        font-size: 1.3rem;
        margin:2rem;

        &:hover {
            box-shadow: 0px 0px 10px rgba(24, 144, 255, 0.8);
            border:0.1px blue solid;
          }
    }

    textArea{
        font-size:1.3rem;
        length:100px;
        width:700px;
        background-color:rgba(0,0,0,0.9);
        color:white;
        border:1px #1890ff solid;

        &:hover {
            box-shadow: 0px 0px 10px rgba(24, 144, 255, 0.8);
            border:0.1px blue solid;
          }
    }

    text Area:focus ::-webkit-input-placeholder{
        transition:text-indent 0.4s 0.4s ease;
        text-indent: -100%;
        opacity:1;

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

export default CreateSociety