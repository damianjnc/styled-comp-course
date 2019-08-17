import React from "react";
import "./App.css";
import StyledHeader from './components/StyledHeader'
import PropsButton, {BigButton} from './components/PropsButton'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      box-sizing:border-box;
    }
    body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`


function App() {
  return (
    <div>
        <GlobalStyle />
        <BigButton>big button</BigButton>
        <StyledHeader title='something'/>
        <PropsButton color='red'>button number 1</PropsButton>
        <PropsButton color='blue'>button number 2</PropsButton>
        <PropsButton>button number 3</PropsButton>
    </div>
  );
}

export default App;
