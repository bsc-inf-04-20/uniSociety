import React from 'react'
import  styled  from 'styled-components';
import PagesRouter from './pages/PagesRouter';
import NavigationBar from './NavigationBar';
import UniLogo from '../images/UniLogo.png';



function OriginalPage() {
  return (
  
    <Container>
        <Header>
          <img src={UniLogo} className='image' alt="logo" style={{border:'2px grey solid'}}/>
             <NavigationBar/>
        </Header>  
    </Container>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  margin-top: 20px;
`;


export default OriginalPage;

