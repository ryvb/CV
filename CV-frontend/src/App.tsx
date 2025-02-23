import React from 'react'
import { Container } from '@mui/material'

import { CvPart } from "./types";
import LanguageData from "./components/LanguageData";
import PersonalData from "./components/PersonalData";

const cvPersonal: CvPart[] = [
  {
    name: 'Roy Voorbach',
    birth_date: '04-05-1993',
    address: 'Bosland 6',
    postal_code: '3751 KD',
    city: 'Bunschoten',
    email: 'royvb@hotmail.com',
    phonenr: '+ 31 6 30961259',
    kind: 'personal'
  }
];

const cvLanguage: CvPart[] = [
  {
    name: 'Nederlands',
    fluency: 'Moedertaal',
    kind: 'language'
  },
  {
    name: 'Engels',
    fluency: 'Vloeiend',
    kind: 'language'
  },
  {
    name: 'Thai',
    fluency: 'Basis',
    kind: 'language'
  }
];


const App = () => {
  const title = 'CV';


  return (
    <Container>
      <div>
        <h1>{title}</h1>


        <div><PersonalData cvParts={cvPersonal} /></div>
        <div><LanguageData cvParts={cvLanguage} /></div>
      </div>
    </Container>
  )
}

export default App

/*
const cvParts: CvPart[] = [
  {
    name: 'Roy Voorbach',
    birth_date: '04-05-1993',
    address: 'Bosland 6',
    postal_code: '3751 KD',
    city: 'Bunschoten',
    email: 'royvb@hotmail.com',
    phonenr: '+ 31 6 30961259',
    kind: 'personal'
  },
  {
    name: 'Nederlands',
    fluency: 'Moedertaal',
    kind: 'language'
  },
  {
    name: 'Engels',
    fluency: 'Vloeiend',
    kind: 'language'
  },
  {
    name: 'Thai',
    fluency: 'Basis',
    kind: 'language'
  }
];

  return (
    <Container>
      <div>
        <div>{title}</div>
        <div><CvContent cvParts={cvParts} /></div>
      </div>
    </Container>
  )


*/