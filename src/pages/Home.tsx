import React from 'react'
import Avatares from '../components/Avatares/Avatares'
import Header from '../components/Header/Header'
import SectionDois from '../components/SectionDois/SectionDois'
import SectionUm from '../components/SectionUm/SectionUm'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SectionUm />
      <SectionDois />
      <Avatares />
    </>
  )
}

export default Home
