import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, price }) => {
  const month = date.toLocaleString("ru-RU", { month: "long" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-date">
        <span className="expense-date_month">{month}</span>
        <span className="expense-date_day">{day}</span>
        <span className="expense-date_year">{year}</span>
      </div>
        <h2 className="title">{title}</h2>
      <div className="item">
        <span className="price">{price} сом</span>
      </div>
    </div>
  );
};

export default ExpenseItem;
