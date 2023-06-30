import axios from "axios";
import { createContext, useReducer } from "react";
import {  useContext ,useState,useEffect } from "react";



export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);




  export const OdonState = createContext()

  const initialOdonState ={
    odonList:[],
    odontologo:{},
    favs: JSON.parse(localStorage.getItem('favs')) ||  []
    
  }

  const odonReducer = (state,action) =>{
    switch(action.type){
      case 'GET_LIST':
        return{ ...state,odonList: action.payload}
      case'GET_ODONT':
        return {...state, odontologo: action.payload}
      case'FAVS':
        return {...state, favs: [...state.favs, action.payload]}
      case'DELETE_FAVS':
        return {...state,favs: action.payload}
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


    useEffect(()=>{
      localStorage.setItem('favs',JSON.stringify(odontState.favs))
    },[odontState.favs])


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

