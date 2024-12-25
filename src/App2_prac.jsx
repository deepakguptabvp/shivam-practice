import React, { useState } from "react";

const App2 = () => {
  // use state to manage title and color of the text
  const [title, setTitle] = useState("Hii buddy!");
  const [isColorRed, setIsColorRed] = useState(false);

  const charCount = title.length;

  const vowelCount = () => {
    let count = 0;
    for (let i = 0; i < title.length; i++) {
      if (
        title[i] === "a" ||
        title[i] === "e" ||
        title[i] === "i" ||
        title[i] === "o" ||
        title[i] === "u"
      ) {
        count = count + 1;
      }
    }
    return count;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color:  title === "Welcome to the Food Blog" && isColorRed === true ? "red" : "black" }} >
        {title}
        <br />
        Character {charCount};
        <br />
        Vowel Count {vowelCount()}
      </h1>

      <button 
        onClick={() => {
          if (title === "Hii buddy!") {
            setTitle("Welcome to the Food Blog");
          } else {
            setTitle("Hii buddy!");
          }
        }}
        style={{ marginRight: 15, cursor: "pointer" }}
      >
        Change Text
      </button>

      <button
        onClick={() => {
          if (title === "Welcome to the Food Blog") {
            setIsColorRed(!isColorRed);
          } else {
            setIsColorRed(false);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        Change Color
      </button>
    </div>
  );
};

export default App2;
