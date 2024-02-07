import {useState} from 'react';


const ExpenseForm=()=>{
    const[enteredTitle,setenteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    // const[useInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // });
    const titleChangeHandler=(event)=>{
     setenteredTitle(event.target.value);

    // setUserInput({
    //  ...useInput,
    //  enteredTitle:event.target.value
    // });
    // setUserInput((prevState)=>{
    //  return {...prevState,enteredTitle:event.target.value}
    // });
    };

    const amountChaneHandler=(event)=>{
     setEnteredAmount(event.target.value);

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}
    //    });
     };

    const dateChangeHandler=(event)=>{
     setEnteredDate(event.target.value);

    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value}
    //    });
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        // console.log("Title:", enteredTitle);
        // console.log("Amount:", enteredAmount);
        // console.log("Date:", enteredDate);
        console.log(expenseData);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="number" onChange={amountChaneHandler}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;