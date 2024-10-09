// working on CRUD Operations using array of objects

import React, { useState } from "react";

const App4 = () => {
  const [number, setNumber] = useState([
    { value: 7, status: false, tempValue: 7 },
    { value: 14, status: false, tempValue: 14 },
    { value: 21, status: false, tempValue: 21 },
    { value: 28, status: false, tempValue: 28 },
  ]);

  return (
    <>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
        }}
      >
        {number.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 15,
              }}
              key={index}
            >
              {item.status ? (
                <>
                  <input
                    type="text"
                    value={item.tempValue}
                    onChange={(e) => {
                      let newChangeArray = [];
                      for (let i = 0; i < number.length; i++) {
                        if (i === index) {
                          newChangeArray[i] = {
                            ...number[i],
                            tempValue: e.target.value,
                          };
                        } else {
                          newChangeArray[i] = number[i];
                        }
                      }
                      console.log(newChangeArray);
                      setNumber(newChangeArray);
                    }}
                  />
                  <button
                    style={{ marginInline: 15 }}
                    onClick={() => {
                      let saveNewArray = [];
                      for (let i = 0; i < number.length; i++) {
                        if (i === index) {
                          saveNewArray[i] = {
                            ...number[i],
                            value: number[i].tempValue,
                            status: false,
                          };
                        } else {
                          saveNewArray[i] = number[i];
                        }
                      }
                      console.log(saveNewArray);
                      setNumber(saveNewArray);
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      let cancelNumber = [];
                      for (let i = 0; i < number.length; i++) {
                        if (i === index) {
                          cancelNumber[i] = {
                            ...number[i],
                            value: number[i].value,
                            status: false,
                          };
                        } else {
                          cancelNumber[i] = number[i];
                        }
                      }
                      console.log(cancelNumber);
                      setNumber(cancelNumber);
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <h3>{item.value}</h3>
              )}

              {item.status ? null : (
                <button
                  style={{
                    marginInline: 20,
                  }}
                  onClick={() => {
                    let newNum = [];
                    for (let i = 0; i < number.length; i++) {
                      if (i === index) {
                        console.log(index);
                        newNum[i] = {
                          ...number[i],
                          value: number[i].value,
                          status: true,
                        };
                      } else {
                        newNum[i] = number[i];
                      }
                    }
                    console.log(newNum);
                    setNumber(newNum);
                  }}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => {
                  let newNum = [];
                  for (let i = 0; i < number.length; i++) {
                    if (i === index) {
                      console.log(i, index, "Number Deleted");
                    } else {
                      newNum.push(number[i]);
                    }
                  }
                  console.log(newNum);
                  setNumber(newNum);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App4;
