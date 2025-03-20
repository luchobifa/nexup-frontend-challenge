import React from 'react';
import { ProductManager } from './components/ProductManager/ProductManager';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Product List</h1>
      </header>
      <main className="app-main">
        <ProductManager />
      </main>
    </div>
  );
};

export default App;
