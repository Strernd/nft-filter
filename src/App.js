import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function genItems(k) {
    const added = [];
    for (let i = 0; i < 1000 * k; i++) {
      const obj = {
        color: Math.random() > 0.5 ? "red" : "green",
      };
      added.push(obj);
    }
    console.log("hey");
    setItems([...items, ...added]);
  }

  function filterGreen() {
    const filtered = items.filter((x) => x.color === "green");
    setItems(filtered);
  }

  function iterateRemaining() {
    const propMap = new Map();
    items.forEach((x) => {
      propMap.set(x.color, true);
    });
    alert("done");
  }

  return (
    <div className="App">
      <header className="App-header">Filter Test</header>
      <div>
        <div>
          <a onClick={() => genItems(10)}>Add 10k</a>
          <a onClick={() => genItems(100)}>Add 100k</a>

          <p>Current: {items.length}</p>
        </div>

        <div>
          <a onClick={() => filterGreen()}>Filter Green</a>
        </div>

        <div>
          <a onClick={() => iterateRemaining()}>Iterate Remaining</a>
        </div>
      </div>
    </div>
  );
}

export default App;
