import React from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default Expenses;
