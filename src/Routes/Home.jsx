import React from 'react'
import Card from '../Components/Card'
import { useOdonStates, useThemeStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {



  const {odontState,} = useOdonStates()
  const { theme } = useThemeStates();





  
  return (
    <main style={{ background: theme.background, color: theme.font }} className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      
        
        {odontState.odonList.map(odontologo=> 
          <div className="cardHome"> 
            <Card key={odontologo.id} odontologo={odontologo} name={odontologo.name} username={odontologo.username} id={odontologo.id}  />
        </div>
        )}
      </div>
    </main>
  )
}

export default Home