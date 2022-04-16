import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);
 console.log(transactions);

 const newTrans = transactions.map((t)=>{
  return <Transaction key={t.id} transaction={t}/>
 })
  return (
    <>
    <h3>
      Your transactions
    </h3>
    <ul id='list' className='list'>
      {newTrans}
    </ul>
    </>
  )
}


export default TransactionList;