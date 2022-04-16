import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';
function Transaction({transaction}) {

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = (transaction.amount < 0) ? '-' : '+';
  const classStyle = (transaction.amount < 0) ? 'minus' : 'plus';

  return (
    <li className={classStyle}>
        {transaction.text} <span>{sign} Rs {Math.abs(transaction.amount)}</span>
        <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
  )
}

export default Transaction;