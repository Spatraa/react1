const ExpenseForm=()=>{
    const titleChangeHandler=(event)=>{
    console.log(event.target.value);
    }
    return(
        <div>
            <form>
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="number"/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date"/>
                    </div>
                </div>
                <div>
                    <button>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;