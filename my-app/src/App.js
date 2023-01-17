import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Grocery } from "./components/Grocery";

const grocery = [
  {
    name: 'Apple',
    quantity: 3,
    id: 1,
  },
  {
    name: 'Oranges',
    quantity: 2,
    id: 2,
  },
  {
    name: 'Cucumber',
    quantity: 4,
    id: 3,
  },
  {
    name: 'Potatos',
    quantity: 4,
    id: 4,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* <Grocery name='apple' quantity={2} />
      <Grocery name='orange' quantity={4} />
      <Grocery name='cucumber' quantity={3} /> */}
        {grocery.map((g) => (
          <Grocery name={g.name} quantity={g.quantity} key={g.id.toString()} />
        ))}
      </div>
    </div>
  );
}

export default App;
