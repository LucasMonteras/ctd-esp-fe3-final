import React from 'react'
import Card from '../Components/Card'
import { useOdonStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    { /* const [doctores,setDoctores] = useState ([])

  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)
    .then(respuesta=> setDoctores(respuesta.data))
  },[url])
*/}


  const {odontState,odonDispatch} = useOdonStates()






  {/*<Card name={odon.name} username={odon.username} id={odon.id}>*/}
  {/*</Card>*/}
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        { /*  doctores.map(doctor=><Card name={doctor.name} username={doctor.username} id={doctor.id} />)*/} 
        {/*<Card name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)*/} 
        
        {odontState.odonList.map(odontologo=> 
          <div className="cardHome"> 
            
            <Card key={odontologo.id} odontologo={odontologo} name={odontologo.name} username={odontologo.username} id={odontologo.id}  />
            
            {/*<button onClick={addFav} className="favButton">⭐</button>*/}
        </div>
        )}
      </div>
    </main>
  )
}

export default Home