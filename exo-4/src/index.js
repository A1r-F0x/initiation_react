import React from 'react';
import './index.css';
import App from './App';
import React from 'react';
import Clients from './Clients';
function App() {
  const clients = ["Batman", "Spiderman", "IronMan"];
  return (
    <div>
      <h1>Liste des clients :</h1>
      <Clients clients={clients} />
    </div>
  );
}
export default App;