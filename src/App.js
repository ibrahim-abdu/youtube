import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import {  darkTheme,lightTheme} from './utils/Theme';

function App() {
  const Container=styled.div`
    display:flex

  `;
  const Main=styled.div`
    flex:7;
    background-color:#1B1B1B
  `;
  const Wrapper=styled.div``;

  const [darkMode, setDarkMode] = useState(true)

  
  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>

    <Container>
      <Menu darkMode={darkMode}  setDarkMode={setDarkMode} />
      <Main>
        <Navbar/>
        <Wrapper>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
            <p>video</p>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
