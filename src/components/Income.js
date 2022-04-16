import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Income = () => {

const {transactions} = useContext(GlobalContext);

  const amount =  transactions.map((trans) => trans.amount)

  const incomeTotal = amount.reduce((acc, curr) => {
    return (curr > 0) ? acc + curr : acc;
  }, 0).toFixed(2);

  const expenditureTotal = amount.reduce((acc, curr) => {
    return (curr < 0) ? acc + Math.abs(curr) : acc;
  }, 0).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+ Rs {incomeTotal}</p>
      </div>
      <div>
        <h4>Expenditure</h4>
        <p className='money minus'>- Rs {expenditureTotal}</p>
      </div>
    </div>
  )
}

export default Income;