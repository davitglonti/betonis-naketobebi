import React, {useState} from 'react'
import Images from './Images'
import '../App.css';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const Carrousel = () => {
    const [current, setCurrent] = useState(0)
     const length = Images.length
    
// add next click function
    const nextSlide=()=>{
     setCurrent(current === length - 1 ? 0: current + 1)
   
    }
//add prev click function
    const prevSlide=()=> {
      setCurrent(current === 0 ? length - 1: current-1 )
    }
//add timeout function
   setTimeout(() => {
      setCurrent(current === length - 1 ? 0: current + 1)
    }, 3000)

  return (
<>
{Images.map((slide,index)=>{
 return (
  <div className={index === current ? 'slide active' : 'slide'}
  key={index}>

    {index === current && (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <p  className='slidehead'>{slide.title}</p>
                    <img className="carrousel " src={slide.image}  alt="First slide" />
                  </div>
                  
                </div>
               
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="sr-only" onClick={()=>{prevSlide()}}><GrLinkPrevious/></span>
                  
                </a>
               
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                
                  <span className="sr-only" onClick={()=>{nextSlide()}}><GrLinkNext/></span>
                </a>
              </div>
    )}
      </div>
      //aaaj
  ) 
})}
</>         
         
//  aaaj
  )
}

export default Carrousel

//////// aaaj