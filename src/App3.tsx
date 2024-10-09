import React, { useState } from "react";

const App3 = () => {
  const [num, setNum] = useState([5, 10, 14, 27, 42]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 5,
      }}
    >
      {num.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                padding: 5,
                marginRight: 5,
              }}
            >
              {item}
            </h3>

            <button
              onClick={() => {
                console.log(item);
                let newNum = [];
                for (let i = 0; i < num.length; i++) {
                  if (i === index) {
                    console.log("equal", index, i);
                  } else {
                    newNum.push(num[i]);
                  }
                }

                setNum(newNum);
                console.log(newNum);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          let newNum2 = [...num];
          newNum2.push(10);
          setNum(newNum2);
          console.log(newNum2);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App3;
