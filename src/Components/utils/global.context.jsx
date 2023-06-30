import axios from "axios";
import { createContext, useReducer } from "react";
import {  useContext ,useState,useEffect } from "react";
import { themes } from "./themes";
import { themeReducer } from "./themesReducer";



const InitialThemeState = { theme: themes.light };

const ThemeStates = createContext();











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

  const [state, dispatch] = useReducer(themeReducer, InitialThemeState);
  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };




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
    <ThemeStates.Provider value={{theme: state.theme,
      setTheme,}}>
      <OdonState.Provider value={{odontState,odonDispatch}} >
      {children}
      </OdonState.Provider>
      
    </ThemeStates.Provider>
  );
};
export const useThemeStates = () => useContext(ThemeStates);
export const useOdonStates =() => useContext(OdonState)

