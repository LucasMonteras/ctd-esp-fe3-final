import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {useOdonStates, useThemeStates} from "../Components/utils/global.context";
import doctor from '../assets/doctor.jpg'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useThemeStates();

  const {odonDispatch,odontState} = useOdonStates()

  const deleteFav =(odon)=>{
    const arrayDelete = odontState.favs.filter(odonfav=> odonfav.id !== odon.id)
    odonDispatch({type:'DELETE_FAVS',payload:arrayDelete})
  }



  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/*<Card name={odontologo.name} username={odontologo.username} id={odontologo.id}/> */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {odontState.favs.map(odon=> 
            <div className="card">
              <img className="card-img" src={doctor} alt="" />
              <h4>{odon.name}</h4>
              <h3>{odon.username}</h3>
              <h3>{odon.id}</h3>
              <button onClick={() => deleteFav(odon)} className="favButton">💔</button>
            </div>
          )}
      </div>
      <Footer/>
    </div>
  );
};

export default Favs;
