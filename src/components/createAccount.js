import React from "react"
import { useState } from "react";
import  styled  from 'styled-components';
import { BeatLoader, HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";





const CreateAccount=()=>{

     const [loading, setLoading]=useState(false);

    const [username, setUsername]=useState(""); 
    const [name, setName]=useState("");
    const [gender, setGender]=useState("M");
    const [dd, setDay]=useState("1st");
    const [mm, setMonth]=useState("January")
    const [yy, setYear]=useState(`${new Date().getFullYear()}`)
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [yearOfStudy, setYearOfStudy]=useState("");

    const navigation = useNavigate()

    let birthday=`1st january ${new Date().getFullYear()}`

    const months = [
      { label: 'January', value: "January" },
   
      { label: 'February', value: "February" },
   
      { label: 'March', value: "March" },

      { label: 'April', value: "April" },

      { label: 'May', value: "May" },

      { label: 'June', value: "June" },

      { label: 'July', value: "July" },

      { label: 'August', value: "August" },

      { label: 'september', value: "September" },

      { label: 'October', value: "October" },

      { label: 'November', value: "November" },

      { label: 'December', value: "December" },
    ];

    let years=[];

    for(let i=new Date().getFullYear(); i>=1900; i--){
      years.push({label: i+"", value: i});
    }

    let days=[];

    for(let i=1; i<=31; i++){
      if(i===1 || i===21 || i===31){
        days.push({label: i+"st", value: i});
        continue;
      }else if(i===2 || i===22){
        days.push({label: i+"nd", value: i});
        continue;
      }
      days.push({label: i+"th", value: i});
    }

    const handleDayChange = (event) => {

      setDay(event.target.value);
      
    };

    const handleMonthChange = (event) => {

      setMonth(event.target.value);
  
     
    };

    const handleYearChange = (event) => {

      setYear(event.target.value);
    
   
    };


    const submitAction=(e)=>{  

      e.preventDefault();

      if(username==="" || name==="" ||email==="" || password==="" || yearOfStudy==="" || dd==="" || mm===""|| yy==="" || gender===""){
        alert("all field are mandetory")
      }
      else{

        setLoading(true);
        
        console.log(dd);
        console.log(mm);
        console.log(yy);

        
        birthday=`${dd} ${mm} ${yy}`
 
        
        console.log(birthday)

        console.log(birthday);

        fetch('https://dull-red-meerkat-hem.cyclic.app/users', {
          method: 'POST',
          mode:'cors',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
             username: username,
             name: name,
             sex:gender,
             birthday:birthday,
             email:email,
             password:password,
             yearOfStudy:yearOfStudy
          }),
       }).then((res)=>{
        console.log(res.json)
        setLoading(false)
        navigation('/login');
       }).catch((err)=>{
        console.log(err)
       })

      }

    }

    return(
        <FormStyle onSubmit={submitAction}>
          <h1>Enter you information below</h1>
          <h2>You are almost there</h2>
          <h3>{loading?(   
             <HashLoader color="#36d7b7" />
              ):("Almost There...")}</h3>
          <div>
          <input size={30} type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder='username'/>
          </div>

          <div>
          <input size={30} type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='name'/>
          </div>

          <div>
          <input size={30} type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/>
          </div>

          <div>
          <input size={30} type="text" value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/>
          </div>

          <div>
          <input size={30} type="text" value={yearOfStudy} onChange={e=>setYearOfStudy(e.target.value)} placeholder='year of study'/>
          </div>

          <div>
            <label>Sex :</label>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value={'M'}>M</option>
              <option value={'F'}>F</option>
            </select>
          </div>
         
         <div style={{display: 'flex'}}>
          <label>Birthday :</label>
         <div style={{display :'flex',flexDirection:'column', alignContent:'center', textAlign:'center', justifyContent:'center'}}>
             <label>year</label><br/>
             <select value={yy} onChange={handleYearChange}>

                {years.map((option) => (

                 <option value={option.value}>{option.label}</option>

                  ))}
             </select>
           </div>

           <div style={{display :'flex',flexDirection:'column', alignContent:'center', textAlign:'center', justifyContent:'center'}}>
             <label>Month</label><br/>
             <select value={mm} onChange={handleMonthChange}>

                {months.map((option) => (

                 <option value={option.value}>{option.label}</option>

                  ))}
             </select>
           </div>

           <div style={{display :'flex',flexDirection:'column', alignContent:'center', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
             <label >day</label><br/>
             <select value={dd} onChange={handleDayChange}>

                {days.map((option) => (

                 <option value={option.value} style={{color:'black'}}>{option.label}</option>

                  ))}
             </select>
           </div>
         </div>

          {
            loading? <BeatLoader color="#36d7b7" />:(<button type="submit" className="btn" style={{width:'200px'}}>GO</button>)
          }


        </FormStyle>
    )
}

const FormStyle=styled.form`
    padding:10px;
    position:absolute;
    left:20%;

    div{
       width:100%; 
       padding:10px
    }

    input {
      color:white;
      border:none;
      background-color:#333;
      border-bottom:1px solid #1890ff;
      padding:5px 10px
      outline:0;
      font-size: 1rem;
  }

  input text :focus ::-webkit-input-placeholder{
     transition:text-indent 0.4s 0.4s ease;
     text-indent: -100%;
     opacity:1;
  }

    select {
        border-bottom:1px solid #ccc;
        background:linear-gradient(35deg, #494949, #313131);
        color:violet;
        padding:1rem 3rem;
        border-radius:1rem;
        outline:none;
        margin:1rem;
    }
`;

export default CreateAccount;