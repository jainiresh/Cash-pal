import React,{ createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
  transactions : [
    { id : 1, text:'Alok', amount:500},
    { id : 2, text:'Sasuke', amount: -1000},
    { id : 3, text:'Taki', amount:3500},
    { id : 4, text:'Anohana', amount: -500},
  ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider

export const GlobalProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //dispatch Actions
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      details : id
    })
  }

  function addTransaction(details){
    dispatch({
      type: 'ADD_TRANSACTION',
      details
    })
  }

  return (
  <GlobalContext.Provider value={{transactions : state.transactions,
   deleteTransaction,
   addTransaction}}>
    {children}
  </GlobalContext.Provider>);
}