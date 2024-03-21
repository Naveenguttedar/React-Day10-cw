import { createGlobalStyle } from 'styled-components';
import React from 'react';
import styled from 'styled-components';
import TextBox from './components/TextBox.jsx'
import Controls from './components/Controls.jsx'
function App() {
    const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  min-height: 100vh;
  background: #5372F0;
}`
    return (
        <Container>
            <GlobalStyle />
            <Wrapper>
            <TextBox />
            <TextBox position={"right"}/>
            </Wrapper>
            <Controls/>
            <Button>Translate Text</Button>
        </Container>
    )
}

const Container = styled.div`
max-width: 800px;
width: 600px;
padding: 30px;
background: #fff;
border-radius: 5px;
box-shadow: 0 10px 20px rgba(0,0,0,0.01);`

const Wrapper=styled.div`
display:flex;
border-top-left-radius:5px;
border-top-right-radius:5px;
border-top: 1px solid #ccc;
border-right:1px solid #ccc;
`
const Button=styled.button`
width: 100%;
padding: 14px;
outline: none;
border: none;
color: #fff;
cursor: pointer;
margin-top: 20px;
font-size: 17px;
border-radius: 5px;
background: #5372F0;
`
export default App
