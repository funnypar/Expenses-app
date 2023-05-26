import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExpenseForm;
