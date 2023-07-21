import React, { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";
import "./NewExpense.css";

const NewExpense = () => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((showForm) => !showForm);
  };
  console.log(showForm);

  return (
    <div className="new-expense">
      {!showForm ? (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      ) : (
        <ExpenseForm onShowForm={showExpenseForm} />
      )}
    </div>
  );
};

export default NewExpense;
