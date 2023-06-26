import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [doctores,setDoctores] = useState ([])

  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)
    .then(respuesta=> setDoctores(respuesta.data))
  },[url])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {doctores.map(doctor=><Card name={doctor.name} username={doctor.username} id={doctor.id} />)}        
      </div>
    </main>
  )
}

export default Home