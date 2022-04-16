import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const[text, setText] = useState('');
  const[amount, setAmount] = useState(0);
  
  const { addTransaction } = useContext(GlobalContext);

  const submitHandler = (e) =>{
    e.preventDefault();

    addTransaction({name : text, amount:Number(amount)});
  }

  return (
    <>
      <h3>Add a fresh transaction !</h3>
      <form id='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter Your Text here ...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount
          <br />
          (negative - expense, positive - income)</label>
        <input type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amout...'/>
        </div>
        <button type='submit' className='btn'> Add transaction</button>
      </form>
    </>
  )
}


export default AddTransaction;