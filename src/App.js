import { useState } from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DATABASE = [
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
function App() {
    const [datas, setDatas] = useState(DATABASE);

    const saveNewExpenseDataHandler = (newData) => {
        setDatas((prevDatas) => {
            return [...prevDatas, newData];
        });
    };

    return (
        <div className="App">
            <NewExpense onSaveNewExpenseData={saveNewExpenseDataHandler} />
            <Expenses data={datas} />
        </div>
    );
}

export default App;
