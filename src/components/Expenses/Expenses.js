import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.data.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                );
            })}
        </Card>
    );
}

export default Expenses;
