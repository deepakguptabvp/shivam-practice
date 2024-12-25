import React from "react";
import SearchBar from "./SearchBar";
import "./index.css";
import CartItems from "./CartItems";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Search Users</h1>
      {/* <SearchBar /> */}
      <CartItems/>
    </div>
  );
}

export default App;
