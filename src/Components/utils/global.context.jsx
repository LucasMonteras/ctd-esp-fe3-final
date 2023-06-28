import axios from "axios";
import { createContext, useReducer } from "react";
import {  useContext ,useState,useEffect } from "react";



export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);




  export const OdonState = createContext()

  const initialOdonState ={
    odonList:[],
    odontologo:{}
  }

  const odonReducer = (state,action) =>{
    switch(action.type){
      case 'GET_LIST':
        return{odonList: action.payload, odontologo: state.odontologo}
      case'GET_ODONT':
        return {odonList: state.odonList, odontologo: action.payload}
      default:
        throw new Error('No existe el tipo de accion')
    }

  }



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, 

    const [odontState, odonDispatch] = useReducer (odonReducer, initialOdonState)
    const urlList ='https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{
      axios(urlList)
      .then(res=>odonDispatch({type:'GET_LIST',payload: res.data})) 
      .catch(err=>console.log(err))
    },[])

      console.log(odontState);
  return (
    <ContextGlobal.Provider value={{}}>
      <OdonState.Provider value={{odontState,odonDispatch}} >
      {children}
      </OdonState.Provider>
      
    </ContextGlobal.Provider>
  );
};

export const useOdonStates =() => useContext(OdonState)

