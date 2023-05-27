import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [inputStorage, setInputStorage] = useState({
        title: "",
        amount: "",
        date: "",
    });
    const titleChangeHandler = (event) => {
        setInputStorage((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    };
    const amountChangeHandler = (event) => {
        setInputStorage((prevState) => {
            return {
                ...prevState,
                amount: event.target.value,
            };
        });
    };
    const dateChangeHandler = (event) => {
        setInputStorage((prevState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newExpenseDatas = {
            ...inputStorage,
            date: new Date(inputStorage.date),
        };
        props.onSaveExpenseData(newExpenseDatas);

        setInputStorage(() => {
            return {
                title: "",
                amount: "",
                date: "",
            };
        });
    };

    return (
        <form className="new-expense__controls" onSubmit={submitHandler}>
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={inputStorage.title}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={inputStorage.amount}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2020-01-01"
                    value={inputStorage.date}
                    onChange={dateChangeHandler}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExpenseForm;
