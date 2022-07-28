import React from 'react'
import '../components/css/catalog.css'
import CatalogProps from './CatalogProps'
import CompletedProjectsData from './CompletedProjectsData'
import { Link } from 'react-router-dom'
const Completedprojects = () => {
   const handleClick = () => {
       console.log('aaaj')
      }
  return (
    <>
    <h1 style={{textAlign: 'center', backgroundColor:'darkblue', color:'white'}}>ჩვენი ნამუშევრები</h1>
    <div className='completedprojects' >
      
    {CompletedProjectsData.map((item)=>{
        return (
          <div key={item.id}>
            <CatalogProps 
            
            image={item.gallery} 
            h1={item.h1}
             h4={item.h4}
              info={item.info}
                onClick={handleClick()}  
                navigator= {  <Link to={`../Catalog/${item.id}` }  className="links">
                  {/* add button */}
                <button className="btn btn-primary">add more</button>
              </Link>}
           />
                       </div>
        )
    })}
    
    </div>
    </>
  )
}

export default Completedprojects;