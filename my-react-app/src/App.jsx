import "./App.css";

function App() {
  const name = "Isabell";
  const luckyNumber = Math.floor(Math.random() * 100);

  const headingStyle = {
    color: "tomato",
    fontSize: "48px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello, {name}!</h1>
      <p>Your lucky number is {luckyNumber}</p>

      <ul className="my-list">
        <li>Reading</li>
        <li>Traveling</li>
        <li>Music</li>
      </ul>
    </div>
  );
}

export default App;