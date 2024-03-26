import { useState } from "react";
import "./App.css";

function App() {
  const [valueInput, setValueInput] = useState(0);

  const [arrInput, setArrInput] = useState([]);

  const handleInput = (e) => {
    setValueInput(e.target.value);
    const answer = [];
    let today = "monday"
    if(today === 'wednesday'){
      if (e.target.value < 1000 && !isNaN(valueInput)) {
        for (let i = 1; i <= e.target.value; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            answer.push("wizz wuzz");
          } else if (i % 3 === 0) {
            answer.push("wizz");
          } else if (i % 5 === 0) {
            answer.push("wuzz");
          } else {
            answer.push(i.toString());
          }
          setArrInput(answer);
        }
      } else {
        console.log("not valid action");
        window.alert("Not valid action");
      }

    }else{

      if (e.target.value < 1000 && !isNaN(valueInput)) {
        for (let i = 1; i <= e.target.value; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            answer.push("fizz buzz");
          } else if (i % 3 === 0) {
            answer.push("fizz");
          } else if (i % 5 === 0) {
            answer.push("buzz");
          } else {
            answer.push(i.toString());
          }
          setArrInput(answer);
        }
      } else {
        console.log("not valid action");
        window.alert("Not valid action");
      }

    }

  };

  console.log(arrInput);

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Test
          </label>
          <input
            onChange={(e) => handleInput(e)}
            type="number"
            className="form-control"
            value={valueInput}
          />
          <div id="emailHelp" className="form-text">
            Well never share your email with anyone else.
          </div>
        </div>
      </form>
      <ul>
        {arrInput?.map((value, i) => {
          const styleElement =
            value === "fizz" ? "blue" : value === "buzz" ? "green" : "white";
          console.log(styleElement);
          return (
            <li style={{ color: `${styleElement}` }} key={i}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
