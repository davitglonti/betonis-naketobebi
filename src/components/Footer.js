import React from 'react'
import '../components/css/footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
 const Footer = () => {
  return (
    <>
    
        <div className="footer">
        <h1 style={{fontSize:'80px'}}>Footer</h1>
            <section className='footericon'>
        <a href='https://www.rre.com/'target="_blank" ><FaFacebookF className='icon'/> </a>
        <a href='https://react-icons.github.io/react-icons/search?q=phone'target="_blank" > <IoLogoYoutube className='icon'/> </a>
        <a href='https://react-icons.github.io/react-icons/search?q=phone'target="_blank" > <BsTelephone className='icon'/> </a>
        <IoLogoYoutube className='icon'/>
        </section>
        <div className='footerinfo'>
        <section >
       <h4>Company Name</h4>
        <p className='section'> dkjlsafoigelihjklihor
        <br></br>
        yy</p>
       </section>
       <section>
       <h4>Products</h4>
        <p> rikuli</p>
        <p>safexuri</p>
        <p>sayvavile</p>
        <p>wylis soko</p>
       </section>
       <section>
       <h4>Products</h4>
        <p> rikuli</p>
        <p>safexuri</p>
        <p>sayvavile</p>
        <p>wylis soko</p>
       </section>
       <section>
       <h4>Products</h4>
        <p> rikuli</p>
        <p>safexuri</p>
        <p>sayvavile</p>
        <p>wylis soko</p>
       </section>
       
       </div>
      </div>
      </>
  )
}

export default Footer;


    