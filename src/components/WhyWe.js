import React from 'react'
import '../components/css/footer.css'
import WhyWeData from './WhyWeData'
const WhyWe = ()=> {


    return (
        <>
         <h1 className='advantages'>უპირატესობები</h1>
           <div className='whe'>
             {WhyWeData.map((item)=>{
                return (
                    <div className='li' key={item.id}>
                        <img src={item.image} className='infoicon'/>
                        <h3 className='service'> {item.info} </h3>
                    </div> 
                )
             })}
    
         </div>
        </>
    )
}

export default WhyWe;

