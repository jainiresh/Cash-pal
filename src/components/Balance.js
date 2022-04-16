import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  const { transactions } = useContext(GlobalContext);

  // console.log('here', transactions);
  // const total = '0.000'
  const amount = transactions.map(trans => trans.amount);
  const total = amount.reduce((accumulator, curr) => accumulator + curr, 0).toFixed(2);
 
  return (
    <div>
      <h4>Current Balance</h4>
      <h1>Rs {total}</h1>
    </div>
  )
}

export default Balance;
