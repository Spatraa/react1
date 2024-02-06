import './ExpenseItem.css';
import './ExpenseDate';
import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    // const[deleted,setDelete]=useState(false);
   const[title,setTitle]=useState(props.title);

   const handler=()=>{
    setTitle("Updated");
    console.log(title);
   }
    // const clickHandler=()=>{
    //  setDelete(true);
    // }
    // if(deleted){
    //     return null;
    // }
    return(
        <div className="expense__item">
         <ExpenseDate date={props.date}/>
            <div className='expense__description'>
             <h2>{title}</h2>
             <div className='expense__price'>${props.amount}</div>
            </div>
            <button onClick={handler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;