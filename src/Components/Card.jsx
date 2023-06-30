import React from "react";
import doctor from '../assets/doctor.jpg'
import { useOdonStates, useThemeStates } from "./utils/global.context";
import { Link } from 'react-router-dom'

const Card = ({ odontologo }) => {

  const { theme } = useThemeStates();

  const {odonDispatch,odontState} = useOdonStates()


  const addFav = ()=>{
    
    const findOdon = odontState.favs.find(odont=>odont.id === odontologo.id)
    if(!findOdon){
    odonDispatch({type:'FAVS', payload: odontologo})
  } else{
    alert('Ya es favorita')
  }
}

  
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + odontologo.id} style={{ background: theme.background, color: theme.font }}>
          <div className="cardHome">
          <img className="card-img" src={doctor} alt="" />
          <h4>{odontologo.name}</h4>
          <h3>{odontologo.username}</h3>
          <h3>{odontologo.id}</h3>
          </div>
          </Link>
          <button  onClick={addFav} className="favButton">❤️</button>
          
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
