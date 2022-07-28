import React from 'react'
import '../App.css'
import '../components/css/catalog.css'
import CatalogData from './CatalogData'
import { useParams } from 'react-router-dom';
import images from './Images';

const CatalogFullInfo = () => {
  const params = useParams();
  //console.log(params)
 // console.log(gallery)

   // product filter function
   const productinfo = CatalogData.filter((item) => {
    if(item.id == params.productid){
      return item;
  }
})


const fullimages = images.filter((item)=>{
  if(item.id==params.productid){
    return item;
  }
})


  return (
   
    <div>
    {productinfo.map((item)=>{
        return (
            <div className='tablehead' key={item.id} >
            <table className="table table-bordered table-red">
      <caption></caption>
      <thead>
        <tr>
          <th scope="col">დასახელება</th>
          <th scope="col">ფასი</th>
          <th scope="col">რაოდენობა</th>
          <th scope="col">სიგრძე</th>
          <th scope="col">სიმაღლე</th>
        </tr>
      </thead>
      <tbody>
    
        <tr>
          <th scope="row">{item.title}</th>
          <th>{item.price}ლარი </th>
          <td>{item.quantity}</td>
          <td>{item.length}</td>
          <td>@</td>
        </tr>
        </tbody>
       
        </table>
        
        <button type="button" className="btn btn-outline-success">შეკვეთა</button>
      <div className='productimages'>
      {fullimages.map((item)=>{
        return ( 
  <div className='catalogimages'>
  <img src={item.image} className="images"/>
  <img src={item.image2} className="images"/>
  <img src={item.image3} className="images"/>
  <img src={item.image4} className="images"/>
  <img src={item.image5} className="images"/>
  <img src={item.image6} className="images"/>
  </div>


        )
      })}
     
       </div>
        </div>
        )
    })}

       </div>
   

      

      
  )
}

export default CatalogFullInfo