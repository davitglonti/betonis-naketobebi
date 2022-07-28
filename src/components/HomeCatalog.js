import React, {useState} from 'react'
import '../components/css/catalog.css'
import CatalogData from './CatalogData'
import { Link } from 'react-router-dom';
import CatalogProps from './CatalogProps';
const HomeCatalog = () => {
  const [category, setCategory]= useState(CatalogData)
  const [change, setChange]=useState(false)
  
  const handleClick=()=>{
    setChange(prevCheck => !prevCheck)
    setCategory(category.filter((item)=>{
      if(item.danamati){
        return item;
      }
      else {
        return item;
      }
      
    }))
    
  }
  
  return (
    <>
    {change ?   <>
    <section className='homeheader'>
      <h1>პოპულარული ნივთები</h1>
      <button onClick={()=>handleClick()} className='btn btn-primary'> ახალი </button>
      </section>
   <div className='completedprojects'>
   {category.map((item)=>{
    return (
      <div key={item.id}>
      
      <CatalogProps 
      image={item.image} 
      h1={item.title}
       h4={item.price}
        info={item.information}
          
          navigator= {  <Link to={`../Catalog/${item.id}` }  className="links">
            {/* add button */}
          <button className="btn btn-primary" >add more</button>
        </Link>}
     />
  
     {/* ase mushaobs damatebis gilaki */}
    
                 </div>
    )
   })}
    </div>
   </>:
    <>
      <section className='homeheader'>
    <h1>ახალ დამატებული ნივთები</h1>
     <button onClick={()=>handleClick()} className="btn btn-primary"> პოპულარული </button>
     </section>
   <div className='completedprojects'>
   {category.slice(1).map((item)=>{
    return (
      <div key={item.id}>
      
      <CatalogProps 
      image={item.image} 
      h1={item.title}
       h4={item.price}
        info={item.information}
          
          navigator= {  <Link to={`../Catalog/${item.id}` }  className="links">
            {/* add button */}
          <button class="btn btn-primary">add more</button>
        </Link>}
     />
  
     {/* ase mushaobs damatebis gilaki */}
    
                 </div>
    )
   })}
    </div> 
    </> }
    
    </>
  )

}
   
   


export default HomeCatalog;


/*
import React from 'react'
import '../components/css/catalog.css'
import CatalogData from './CatalogData'
import { Link } from 'react-router-dom';
const HomeCatalog = () => {
  return (
    <div>
        <h1> ფავორიტები</h1>
    <div className='cards'>
{CatalogData.slice(1, -1).map((item)=>{
    return (
        
        <div class="catalogCard">
            <img src={item.image} className='cataloggallery'/>
          <div className="cataloginfo">
            <h1>{item.title}</h1>
            <h4>{item.price} ლარი</h4>
            
            <p>რაოდენობა: {item.quantity}</p>
            <Link to={`./Catalog/${item.id}`} className="links">
                <br></br>
                         <button class="btn btn-primary">მეტი</button>
                       </Link>
                       </div>
            </div>
           
           
    )
})}

    </div>
    <Link to={`/Catalog`} className="link">
<button className='links'>სრული კატალოგი</button>
</Link>
</div>
    
  )
}

export default HomeCatalog;

*/












/*



      <>
      <Sacdel 
      image={item.image} 
      h1={item.title}
       h4={item.h4}
        info={item.information}
          onClick={handleClick()}  
          navigator= {  <Link to={`../Catalog/${item.id}` }  className="links">
           
            <button class="btn btn-primary">add more</button>
            </Link>}
         />
      
     
        
                     </>
      )
               
               
        )
    })}
    
        </div>
        <Link to={`/Catalog`} className="link">
    <button className='links'>სრული კატალოგი</button>
    </Link>
    </div>
        
      )
    }
*/