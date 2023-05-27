import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const expenseDatas = { ...expenseData, id: Math.random().toString() };
        props.onSaveNewExpenseData(expenseDatas);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
