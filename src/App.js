import ExpenseItem from "./components/ExpenseItem";

function App() {
    const dataDateItem = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2023, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2023, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2023, 5, 12),
        },
    ];
    return (
        <div className="App">
            <h2>Let's get started! </h2>
            <ExpenseItem
                title={dataDateItem[0].title}
                amount={dataDateItem[0].amount}
                date={dataDateItem[0].date}
            />
            <ExpenseItem
                title={dataDateItem[1].title}
                amount={dataDateItem[1].amount}
                date={dataDateItem[1].date}
            />
            <ExpenseItem
                title={dataDateItem[2].title}
                amount={dataDateItem[2].amount}
                date={dataDateItem[2].date}
            />
            <ExpenseItem
                title={dataDateItem[3].title}
                amount={dataDateItem[3].amount}
                date={dataDateItem[3].date}
            />
        </div>
    );
}

export default App;
