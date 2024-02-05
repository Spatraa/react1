import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: 'Car Insurance', amount: 295, date: new Date(2024, 2, 2) },
    { title: 'Car Insurance', amount: 300, date: new Date(2024, 3, 3) },
    { title: 'Car Insurance', amount: 395, date: new Date(2024, 4, 4) }
  ];

  return (
    <div className="App">
      <h2>Let's get Started!</h2>
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
