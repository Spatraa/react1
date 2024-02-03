import './ExpenseItem.css';
function ExpenseItem(props){
    return(
        <div className="expense-item">
            <div >{props.date.toISOString()}</div>
        <div className="description">
            <div className="title">{props.title}</div>
        <div className="price">${props.amount}</div>
        </div>
        </div>
    )
}

export default ExpenseItem;