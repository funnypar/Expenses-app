import "./DateItem.css";

function DateItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2023</div>
            <div className="expense-item__description">
                <h2>Buy Keyboard</h2>
                <div className="expense-item__price">$124.46$</div>
            </div>
        </div>
    );
}

export default DateItem;
