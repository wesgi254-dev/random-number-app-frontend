import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    fetch("https://random-number-app-backend-production.up.railway.app/")
      .then((res) => res.json())
      .then((data) => setNumber(data.number))
      .catch((err) => console.error("Error fetching number:", err));
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Random Number App</h1>
      <p>The number from the backend is:</p>
      <h2>{number !== null ? number : "Loading..."}</h2>
    </div>
  );
}

export default App;
