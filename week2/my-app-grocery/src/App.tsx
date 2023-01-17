import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Grocery } from './Grocery';

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
      <Header title='Grocery List' totalItems={grocery.length}/>
      {grocery.map((g) => (
          <Grocery name={g.name} quantity={g.quantity} key={g.id.toString()} />
        ))}
    </div>
  );
}

export default App;
