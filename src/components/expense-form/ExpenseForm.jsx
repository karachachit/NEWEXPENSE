import React from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const cancelHandler = (e) => {
    e.preventDefault();
    props.onShowForm();
  };

  return (
    <form className="expense-form">
      <div className="expense-form_input">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите ..."
        />

        <FormInput id="price" labelName="Цена" inputType="number" />

        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
        />
      </div>

      <div className="buttons">
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Добавить расходы" />
      </div>
    </form>
  );
};

export default ExpenseForm;
