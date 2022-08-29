import React, { useState } from "react";
import style from "./style.css";
const Mini_calc = () => {
  // state to hold results
  const [result, setResult] = useState("");
  const operators = ["/", "*", "+", "-", "%", "**"];
  const handleChange = (e) => {
    let btnValue = e.target.innerText;

    if (
      // logical (&&) true if and only if all the operands are true. Otherwise it will be false.
      // when btnvalue is set to one of th operator and result has nothing
      // when btnvalue is set to one of the operator and last value is also an operator
      // then return nothing
      (operators.includes(btnValue) && result === "") ||
      (operators.includes(btnValue) && operators.includes(result.slice(-1)))
    ) {
      return;
    }
    if (!operators.includes(btnValue)) {
      setResult(eval(result + btnValue));
    }

    setResult(result + btnValue);
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  const del = () => {
    if (result == "") {
      return;
    }
    const value = result.slice(0, -1);
    setResult(value);
  };
  const clear = () => {
    setResult("");
  };
  return (
    <div className="app">
      <header>Calculator</header>
      <div className="container">
        <div className="display">{result}</div>
        <div className="keypad">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="btn-blue" value="AC" onClick={clear}>
                    AC
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={del}>
                    C
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    %
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    /
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    7
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    8
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    9
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    {" "}
                    *
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    4
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    5
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    6
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    1
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    2
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    3
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-black" onClick={handleChange}>
                    .
                  </button>
                </td>
                <td>
                  <button className="btn-cyan" onClick={handleChange}>
                    0
                  </button>
                </td>
                <td>
                  <button className="btn-red" onClick={calculate}>
                    =
                  </button>
                </td>
                <td>
                  <button className="btn-blue" onClick={handleChange}>
                    **
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mini_calc;
