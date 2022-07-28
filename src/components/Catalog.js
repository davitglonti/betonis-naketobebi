
import React from 'react'
import '../App.css';
//import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CatalogData from './CatalogData'
import CatalogProps from './CatalogProps';
import { Link } from 'react-router-dom';
const Catalog = () => {
  
  return (
    <div className="cataloghead">
    {CatalogData.map((item)=>{
        return (
          <>
      <CatalogProps 
      image={item.image} 
      h1={item.title}
       h4={item.price}
        info={item.information}
  
          navigator= {  <Link to={`../Catalog/${item.id}` }  className="links">
        
            {/* add button */}
          <button className="btn btn-primary">add more</button>
        </Link>}
     />
  
     {/* ase mushaobs damatebis gilaki */}
    
                 </>
        
        )  
    })}
     
   </div>
  
  )
}

export default Catalog
