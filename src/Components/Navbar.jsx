import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <h1>DH Odonto</h1>
      <div className='links'>
      <Link to={routes.home}><h4 className='link'>Home</h4></Link>
      <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
      <Link to={routes.favs}><h4 className='link'>Favs</h4></Link>
      <button className='favButton'>☀ 🌙</button>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
     
    </nav>
  )
}

export default Navbar