import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useOdonStates } from '../Components/utils/global.context'
import { routes } from '../Components/utils/routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    { /* const [doctores,setDoctores] = useState ([])

  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)
    .then(respuesta=> setDoctores(respuesta.data))
  },[url])
*/}


  const {odontState} = useOdonStates()

  {/*<Card name={odon.name} username={odon.username} id={odon.id}>*/}
  {/*</Card>*/}
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        { /*  doctores.map(doctor=><Card name={doctor.name} username={doctor.username} id={doctor.id} />)*/} 

        {/*<Card name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)*/} 
        
        {odontState.odonList.map(odontologo=> <Link to={'/detail/' + odontologo.id} key={odontologo.id}>
          <Card name={odontologo.name} username={odontologo.username} id={odontologo.id}/>
        </Link>)}
      </div>
    </main>
  )
}

export default Home