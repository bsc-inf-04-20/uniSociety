import React, { useEffect, useState } from 'react'
import  styled  from 'styled-components'
import Desk2 from '../../images/Desk2.jpg';
import UniLogo from '../../images/UniLogo.png';
import UnimaLogo from '../../images/UnimaLogo.png';
import Questionmark from '../../images/QuestionMark.jpg';


function Homepage() {

    const[scene1, setScene1]=useState(false);
    const[scene2, setScene2]=useState(false);
    const[scene3, setScene3]=useState(false);

    const handleScene1=()=>{
        setScene2(false);
        setScene3(false)
        setScene1(true);
    }

    const handleScene2=()=>{
        setScene1(false);
        setScene3(false)
        setScene2(true);
    }

    const handleScene3=()=>{
        setScene1(false);
        setScene2(false)
        setScene3(true);
    }


   const imageStyle={
                margin:'1rem',
                border:'2px white solid'
                }

    const UniSociety=(<p>
          Uni-society is a digital movement seeking to unite clubs and form a hub through
          which communities can share and communicate ideas. 
          This breaks the barrier agsinst cross society communication
          amongst pupils in the University
          </p>)

    const Unima=(<p>
                 Unima is one of the most prestigious Universities in Malawi and with 
                 good recognition and reputation across in Africa, known for producing some 
                 of the big figures and intellects in in the country. Unima offers programs
                 across a wide span of interests in academia ranging from law, arts and economics
                 to ICT. For more information hit the link below to visit their website.
                 <a href='https://unima.ac.mw/about/unima-at-a-glance'>unima.ac.mw</a>

                </p>)  
                
    const functions=(<p>
                     This website, as per the uni-society digital movement seeks to connect
                     clubs and societies. Allowing them to make quick communications and coordinate
                     events and activities. A user will search and request to join a society in the
                      <label style={{color:'yellow'}}> search</label> box. Upon being accepted, the community, as an option will show up in the <label  style={{color:'yellow'}}>group list</label> and 
                      selecting it will make the group chat appear in the <label  style={{color:'yellow'}}>chat</label> section.
                    </p>)

  return (
        <MainBody >
            <h1 style={{color:'white',}}>HOME</h1>

           <div style={{display:'inline-block', borderRadius:'15%'}}>
            <MainContent>
              <Column onMouseOver={handleScene1}>
                  <img className='image' style={imageStyle} src={UniLogo} alt="uni-society logo"/>
                  <h2 style={{margin:'1px'}}>UNI-SOCIETY</h2>
                  {scene1? UniSociety:(
                    <h2 style={{color:'blue'}} >Hover to expand</h2>
                  )}  
              </Column>

              <Column onMouseOver={handleScene2}>
                 <img className='image' style={imageStyle} src={UnimaLogo} alt="unima-logo" />
                  <h2 style={{margin:'2px'}}>UNIMA</h2>  
                  {scene2? Unima:(
                    <h2 style={{color:'blue'}} >Hover to expand</h2>
                  )}  
              </Column>

              <Column onMouseEnter={handleScene3}>
                 <img className='image' style={imageStyle} src={Questionmark} alt="unima-logo" />
                  <h2 style={{margin:'1px'}}>Where next?</h2>  
                  {scene3? functions:(
                    <h2  style={{color:'blue'}} >Hover to expand</h2>
                  )}  
              </Column>

            </MainContent>
           </div>


        </MainBody>
    
  )
}


const MainBody=styled.div`
   background-image:url(${Desk2}) ;
   background-color: rgb(0,0,0,0.5);
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

const MainContent=styled.div`
display:flex;
background:rgb(0,0,0,0.9);
overflow:hidden;
border-radius:25px;
border:0.1px white solid;
width:1010px;
height:435px;
`

const Column=styled.div`
display:flex;
flex-direction: column;
margin:1rem;
height:410px;
width:400px;
align-content:left;
justify-content:left;
text-align:left;
justify-items:left;
padding:1rem;
border-radius:5%;

transition: box-shadow 0.2s ease-in-out; 

  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.9);
    border:0.1px blue solid;
  }

`;



export default Homepage