import React from 'react';

import { Container } from '@mui/material';

import LanguageData from "./components/LanguageData";
import PersonalData from "./components/PersonalData";



const App = () => {
  const title = 'CV';

  return (
    <Container>
      <div>
        <h1>{title}</h1>


        <div><PersonalData /></div>
        <div><LanguageData /></div>
      </div>
    </Container>
  )
}

export default App

/*


*/