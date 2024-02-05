import './ExpenseItem.css';
import './ExpenseDate';
import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    const[deleted,setDelete]=useState(false);
    const clickHandler=()=>{
     setDelete(true);
    }
    if(deleted){
        return null;
    }
    return(
        <div className="expense__item">
         <ExpenseDate date={props.date}/>
            <div className='expense__description'>
             <h2>{props.title}</h2>
             <div className='expense__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;