const AppReducer = (state, action) =>{
  switch(action.type)
  {
    case 'DELETE_TRANSACTION' :
      return{
        ...state,
        transactions: state.transactions.filter((trans) => trans.id !== action.details)
      }
    
      case 'ADD_TRANSACTION' :
        {
          const idToBeAdded = Math.floor(Math.random() * 100000000);
          const temp = {
            id : idToBeAdded,
            text : action.details.name,
            amount : action.details.amount
          }
        return{
          ...state,
          transactions : [...state.transactions, temp]
        }
      }
    default:
      return state;
    
  }
}

export default AppReducer;