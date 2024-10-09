import React, { useState } from "react";

const App3_prac = () => {
  const [initialValues, setInitialValues] = useState([
    { value: 29, status: false, tempValue: 29 },
    { value: 40, status: false, tempValue: 40 },
    { value: 54, status: false, tempValue: 54 },
    { value: 68, status: false, tempValue: 68 },
  ]);

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        margin: 10,
      }}
    >
      <h2>Crud Operations using array of Objects</h2>

      {initialValues.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 10,
              // marginRight:1
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
              marginInline: 5,
            }}
            key={index}
          >
            {/* ------for modifying in input element tag && also to Save / Cancel the button----*/}
            {item.status ? (
              <>
                <input
                  type="text"
                  placeholder=" Enter numeric value"
                  value={item.tempValue}
                  style={{ fontSize: 20 }}
                  onChange={(e) => {
                    let changeNumArray = [];
                    for (let i = 0; i < initialValues.length; i++) {
                      if (i === index) {
                        changeNumArray[i] = {
                          ...initialValues[i],
                          tempValue: initialValues[i].value,
                        };
                      } else {
                        changeNumArray[i] = initialValues[i];
                      }
                    }
                    console.log(changeNumArray);
                    setInitialValues(changeNumArray);
                  }}
                />
                <button
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                    marginInline: 10,
                  }}
                >
                  Save
                </button>
                <button
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                    marginInline: 10,
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <h2 style={{ marginRight: 20 }}> {item.value} </h2>
            )}

            {item.status ? null : (
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginInline: 20,
                  padding: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  let editNumArray = [];
                  for (let i = 0; i < initialValues.length; i++) {
                    if (i === index) {
                      editNumArray[i] = {
                        ...initialValues[i],
                        status: true,
                        value: initialValues[i].value,
                      };
                    } else {
                      editNumArray[i] = initialValues[i];
                    }
                  }
                  console.log(editNumArray);
                  setInitialValues(editNumArray);
                }}
              >
                Edit
              </button>
            )}

            <button
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                marginInline: 10,
              }}
              onClick={() => {
                let deleteNumArray = [];
                for (let i = 0; i < initialValues.length; i++) {
                  if (i === index) {
                    console.log("Number Delete on index ", index);
                  } else {
                    deleteNumArray.push(initialValues[i]);
                  }
                }
                console.log(deleteNumArray);
                setInitialValues(deleteNumArray);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App3_prac;
