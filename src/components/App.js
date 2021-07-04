import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';
import { openLibraryApi } from '../utils/OpenLibraryAPI'

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    openLibraryApi.getDataList().then(
      (data) => setData(data)
    );
    console.log(data)
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <SearchForm></SearchForm>
    </div>
  );
}

export default App;
