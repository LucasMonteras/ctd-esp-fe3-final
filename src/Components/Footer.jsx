import React from 'react'
import DH from '../assets/DH.png'
import facebook from '../assets/ico-facebook.png'
import instagram from '../assets/ico-instagram.png'
import tiktok from '../assets/ico-tiktok.png'
import whatsapp from '../assets/ico-whatsapp.png'


const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <div className='iconos'>
          <div>
            <img  className='DH-logo' src={DH} alt='DH-logo' />
          </div>
          <div className='iconoRedes'>
            <img className='logoRedes' src={facebook} alt='logo-facebook' /> 
            <img className='logoRedes' src={instagram} alt='logo-instagram' />
            <img className='logoRedes' src={tiktok} alt='logo-tiktok' />
            <img className='logoRedes' src={whatsapp} alt='logo-whatsapp' />
          </div>
        </div>
    </footer>
  )
}

export default Footer
