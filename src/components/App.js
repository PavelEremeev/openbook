import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';

function App() {

  const [data, setData] = useState('');

  return (
    <div className="App">
      <Header></Header>
      <SearchForm></SearchForm>
    </div>
  );
}

export default App;
