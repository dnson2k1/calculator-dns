/* eslint-disable no-eval */
import React, { useState } from "react";
import "./calculator.scss";
import { BTNS, BTN_ACTIONS } from "./btnConfig";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (item) => {
    switch (item.action) {
      case BTN_ACTIONS.ADD:
        const oper = item.display !== "x" ? item.display : "*";
        setExpression(expression + oper);
        break;
      case BTN_ACTIONS.THEME:
        document.body.classList.toggle("dark");
        break;
      case BTN_ACTIONS.DELETE:
        setExpression(expression.slice(0, -1)); // or curr.lenght - 1
        break;
      case BTN_ACTIONS.CLEAR:
        setExpression("");

        break;
      case BTN_ACTIONS.CALC:
        if (expression.trim().length <= 0) return;
        let res = eval(expression);
        setExpression(String(res));

        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__result">
        <div className="calculator__result__exp">{expression}</div>
      </div>
      <div className="calculator__btns">
        {BTNS.map((item) => (
          <button
            key={item.id}
            className={item.class && item.class}
            onClick={() => handleClick(item)}
          >
            {item.display}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
