import React from "react";
import doctor from '../assets/doctor.jpg'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <img className="card-img" src={doctor} alt="" />
          <h3>{name}</h3>
          <h3>{username}</h3>
          <h3>{id}</h3>
          <button onClick={addFav} className="favButton">⭐</button>


          
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
