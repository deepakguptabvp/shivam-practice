import React, { useState } from "react";

const App6 = () => {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "kaku",
      age: 28,
      // address: { state: "New Delhi" },
    },
    {
      id: 2,
      name: "Shivam",
      age: 27,
      address: { city: "Pilakhwa", state: "U.p." },
    },
  ]);
  return (
    <div>
      {userList.map((item, index) => {
        return (
          <div
            style={{
              margin: 20,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <p>id: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>
              City: {item?.address?.city} , State: {item?.address?.state}
            </p>
          </div>
        );
      })}

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          margin: 20,
        }}
      >
        <button
          style={{ margin: 20 }}
          onClick={() => {
            let newUSerList = [];
            for (let i = 0; i < userList.length; i++) {
              if (userList[i].name.toLowerCase() === "shivam") {
                newUSerList[i] = {
                  ...userList[i],
                  address: { ...userList[i].address, city: "Goa" },
                };
              } else {
                newUSerList[i] = userList[i];
              }
            }
            console.log(newUSerList);
            setUserList(newUSerList);
          }}
        >
          Change City for user Shivam from _old_ to _Goa__
        </button>
        <button
          onClick={() => {
            let newUserList = [];
            for (let i = 0; i < userList.length; i++) {
              if (userList[i].name === "kaku") {
                newUserList[i] = { ...userList[i], age: 30 };
              } else {
                newUserList[i] = userList[i];
              }
            }
            console.log(newUserList);
            setUserList(newUserList);
          }}
        >
          Change age for user kaku from _old_ to _30__
        </button>
      </div>
    </div>
  );
};

export default App6;
