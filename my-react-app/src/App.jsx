
import "./App.css";
import List from "./List.jsx";

function App() {
  const name = "Isabell";
  const luckyNumber = Math.floor(Math.random() * 100);

  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const headingStyle = {
    color: "tomato",
    fontSize: "48px",
  };

  return (
    <div>
      <h1 style={headingStyle}>{greeting}, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <List />
    </div>
  );
}

export default App;
