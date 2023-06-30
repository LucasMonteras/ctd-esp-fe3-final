import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes'
import { useThemeStates } from './utils/global.context';
import { themes } from './utils/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, setTheme } = useThemeStates();

  const manejarTema = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  };


  return (
    <nav >
      <h2>DH Odonto</h2>
      <div className='links'>
        <Link  to={routes.home}><h4 className='link'>Home</h4></Link>
        <Link  to={routes.contact}><h4 className='link'>Contact</h4></Link>
        <Link  to={routes.favs}><h4 className='link'>Favs</h4></Link>
        <button className='temaButton'
        onClick={manejarTema}
        style={{ background: theme.background, color: theme.font }}
        > ☀ 🌙</button>
      </div>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar