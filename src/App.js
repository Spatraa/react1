import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: 'Car Insurance', amount: 295, date: new Date(2024, 2, 2) },
    { title: 'Car Insurance', amount: 295, date: new Date(2024, 2, 2) },
    { title: 'Car Insurance', amount: 295, date: new Date(2024, 2, 2) }
  ];

  return (
    <div className="App">
      {expense.map((expen, index) => (
        <ExpenseItem
          key={index}
          title={expen.title}
          amount={expen.amount}
          date={expen.date}
        />
      ))}
    </div>
  );
}

export default App;
