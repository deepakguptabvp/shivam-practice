import React, { useState } from "react";

const App5 = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [userList, setUserList] = useState([
    { name: "Deepak Gupta", age: 24 },
    { name: "Deepak Gupt", age: 94 },
    { name: "Deepak Gupta", age: 24 },
  ]);

  return (
    <div
      style={{
        margin: 30,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        style={{ margin: 20 }}
        onChange={(e) => {
          console.log(e.target.value);
          setFirstName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Second Name"
        value={secondName}
        onChange={(e) => {
          console.log(e.target.value);
          setSecondName(e.target.value);
        }}
      />

      <button
        style={{
          margin: 20,
        }}
        onClick={() => {
          if (firstName && secondName) {
            if (userList.length == 3) {
              let name = `${firstName}  ${secondName}`;
              let newArray = [];
              for (let i = 0; i < userList.length; i++) {
                newArray[i] = {
                  ...userList[i],
                  age: userList[i].age - 1,
                };
              }
              let a = [{ name: name, age: 30 - 1 }, ...newArray];
              console.log(a);
              setUserList(a);
              setFirstName("");
              setSecondName(""); 
            } else {
              let name = `${firstName}  ${secondName}`;
              let newArray = [];
              for (let i = 0; i < userList.length; i++) {
                newArray[i] = {
                  ...userList[i],
                  age: userList[i].age + 1,
                };
              }

              let a = [{ name: name, age: 30 }, ...newArray];
              console.log(a);
              setUserList(a);
              setFirstName("");
              setSecondName("");
            }
          }
        }}
      >
        Add Entry
      </button>

      {/* List of results  */}
      <ul>
        {userList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App5;
