import React from 'react'
import '../App.css'
import CatalogData from './CatalogData'
import { useParams } from 'react-router-dom';
const CatalogFullInfo = () => {
    const params = useParams();
    console.log(params)
    const productinfo = CatalogData.filter((item) => {
        if(item.id == params.product){
          return item;
      }
      console.log(productinfo)
   })
  return (
    <>
    {productinfo.map((item)=>{
        return (
            <div className='tablehead'>
            <table class="table">
      <caption>ბივთის მონაცემები</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ფასი</th>
          <th scope="col">რაოდენობა</th>
          <th scope="col">სიგრძე</th>
          <th scope="col">სიმაღლე</th>
        </tr>
      </thead>
      <tbody>
    
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@</td>
        </tr>
        </tbody>
        </table>
        </div>
        )
    })}
       
       </>
    
  )
}

export default CatalogFullInfo