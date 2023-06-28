import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useOdonStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import { response } from 'msw'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    
    const {odontState, odonDispatch} = useOdonStates()
    const params = useParams()
    const urlOdont ='https://jsonplaceholder.typicode.com/users/' + params.id
    console.log(params);


    useEffect(()=>{
      axios(urlOdont)
      .then(response=> odonDispatch({type:'GET_ODONT',payload: response.data}))
    },[])


  return (
    <>
    <Navbar/>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
 
 
    <div className='table'>
      <div className='datos'>
        <h3>Name</h3>
        <p>{odontState.odontologo.name}</p>
      </div>
      <div className='datos'>
        <h3>Email</h3>
        <p>{odontState.odontologo.email}</p>
      </div>
      <div className='datos'>
        <h3>Phone</h3>
        <p>{odontState.odontologo.phone}</p>
      </div>
      <div className='datos'>
        <h3>Website</h3>
        <p>{odontState.odontologo.website}</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Detail