import React from 'react'

import '../components/css/catalog.css'
const CatalogProps = (props) => {
  return (
    
        
        <div className='cards'>

        
        <div class="catalogCard">
            <img src={props.image} alt='error' className='cataloggallery'/>
          <div className="cataloginfo">
            <h1>{props.h1}</h1>
            <h4>{props.h4}</h4>
            
            <p>{props.info} </p>
                <br></br>
                      
                      {props.navigator}
                       </div>
            </div>
           
    </div>
    
  )
}

export default CatalogProps;