import { useState } from "react";
import "./App.css";

const App = () => {

  const [title, setTitle] = useState("Hello");
  const [isRed, setIsRed] = useState(false);

  const count = title.length;

  const vowelCount = () => {
    let count = 0;
    for (let i = 0; i < title.length; i++) {
      if (
        title[i] === "a" ||
        title[i] === "i" ||
        title[i] === "e" ||
        title[i] === "o" ||
        title[i] === "u"
      ) {
        count = count + 1;
        // console.log(count);
      }
    }
    return count;
  };

  console.log(vowelCount());

  return (
    <div>
      <h1  style={{ color: title === "Hii" && isRed === true ? "red" : "black" }}>
        {title} {count} {vowelCount()}
      </h1>
      <button
        onClick={() => {
          if (title === "Hello") {
            setTitle("Hii");
          } else {
            setTitle("Hello");
          }
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          if (title === "Hii") {
            setIsRed(!isRed);
          } else {
            setIsRed(false);
          }
        }}
      >
        Color Change
      </button>
    </div>
  );
};

export default App;
