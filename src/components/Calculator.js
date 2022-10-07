/* eslint-disable no-eval */
import React, { useState } from "react";

function Calculator() {
  const [previousAns, setPreviousAns] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    // set operand inputs
    setOperand((opr) => opr + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;

    //clear all
    if (value === "ac") {
      setOperand("");
      if (answer > 0) setPreviousAns(answer);
      setAnswer(0);
      return;
    }

    //plus and minus sign
    if (value === "pm") {
      if (operand === "") return;

      let calculated;
      //get last value
      if (Number(operand.slice(-1))) {
        calculated = eval(operand);

        if (Math.sign(calculated) < 0) {
          calculated = Math.abs(calculated);
          setOperand(calculated.toString());
          return;
        } else {
          setOperand(`-` + calculated.toString());
          return;
        }
      }
    }

    let newOperand;
    if (operand.slice(-1) === value) {
      return;
    } else {
      if (!Number(operand.slice(-1))) {
        //remove the last operator from operand
        newOperand = operand.slice(0, -1);
        // check if last operand is 0
        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value);
          return;
        }
        setOperand(newOperand + value);
        return;
      } else {
        setOperand(operand + value);
      }
    }

    switch (value) {
      case "=":
        setAnswer(eval(operand));
        setOperand("");
        if (answer > 0) setPreviousAns(answer);
        break;
      case "+":
        setOperand(eval(operand) + value);
        break;
      case "-":
        setOperand(eval(operand) + value);
        break;
      case "/":
        setOperand(eval(operand) + value);
        break;
      default:
        return;
    }
  };

  const handleDelete = () => {
    if (operand.length > 0) {
      setOperand((op) => op.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="wrapper">
        {/* heading */}
        <div className="ctc c-type">
          <button className="active">Calculator</button>
          <button className="">Converter</button>
        </div>
        {/* calculator screen */}
        <div className="ctc c-screen">
          <div className="c-history-answer">
            <i className="fa-solid fa-clock"></i>
            <span>{previousAns}</span>
          </div>
          <div className="c-answer">
            <span>{answer}</span>
          </div>
        </div>
        {/* calculator inputs */}
        <div className="ctc c-compute">
          <button className="c-reverse" value="rv" onClick={handleDelete}>
            C
          </button>
          <span>{operand ? operand : 0}</span>
        </div>
        {/* calculator numbers */}
        <div className="ctc c-grid">
          <button
            className="top-btn"
            type="button"
            value="ac"
            onClick={handleOperator}
          >
            ac
          </button>
          <button
            className="top-btn"
            type="button"
            value="pm"
            onClick={handleOperator}
          >
            &plusmn;
          </button>
          <button
            className="top-btn"
            type="button"
            value="%"
            onClick={handleOperator}
          >
            %
          </button>
          <button
            className="top-btn special"
            type="button"
            value="/"
            onClick={handleOperator}
          >
            /
          </button>

          <button className="normal" value="7" onClick={handleOperand}>
            7
          </button>
          <button className="normal" value="8" onClick={handleOperand}>
            8
          </button>
          <button className="normal" value="9" onClick={handleOperand}>
            9
          </button>
          <button className="special" value="*" onClick={handleOperator}>
            x
          </button>

          <button className="normal" value="4" onClick={handleOperand}>
            4
          </button>
          <button className="normal" value="5" onClick={handleOperand}>
            5
          </button>
          <button className="normal" value="6" onClick={handleOperand}>
            6
          </button>
          <button className="special" value="-" onClick={handleOperator}>
            -
          </button>

          <button className="normal" value="1" onClick={handleOperand}>
            1
          </button>
          <button className="normal" value="2" onClick={handleOperand}>
            2
          </button>
          <button className="normal" value="3" onClick={handleOperand}>
            3
          </button>
          <button className="special" value="+" onClick={handleOperator}>
            +
          </button>

          <button className="span-two normal" value="0" onClick={handleOperand}>
            0
          </button>
          <button className="normal" value="." onClick={handleOperator}>
            .
          </button>
          <button className="special" value="=" onClick={handleOperator}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
