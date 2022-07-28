import React,{useState} from 'react'
import Carrousel from './Carrousel'
import Catalog from './Catalog'
import CatalogData from './CatalogData'
import WhyWe from './WhyWe'

import HomeCatalog from './HomeCatalog'
const Home = () => {

  return (
    <>
    <Carrousel/>
    <HomeCatalog/>
    <WhyWe/>
    </>
  )
}

export default Home