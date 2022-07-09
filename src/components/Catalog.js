import React from 'react'
import '../App.css';
//import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CatalogData from './CatalogData'
import { Link } from 'react-router-dom';
const Catalog = () => {
   
  return (
    <div className="head">
    {CatalogData.map((item)=>{
        return (
           <div class="wrapper"  key={item.id}>
            
              <div class="card">
                <div class="card-body">
                    <img src={item.image}className="card-img-top"/>
                    <section className='textsection'>
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-price">{item.price} ლარი </p>
                  <Link to={`./${item.id}`} className="links">
                  <button class="btn btn-primary">მეტი</button>
                    </Link>
                  </section>
                </div>
              </div>
            
           
          </div>
        
        )  
    })}
   </div>
  )
}

export default Catalog