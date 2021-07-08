import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';
import Preloader from './Preloader';
import { openLibraryApi } from '../utils/OpenLibraryAPI'
import NotFound from './NotFound';

function App() {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  const [foundedBooks, setFoundedBooks] = useState('')

  useEffect(() => {
    setLoading(true)
    openLibraryApi.getDataList()
      .then((data) => setData(data))
      .then(() => setLoading())
      .catch(setError);
    console.log(data)
    console.log(data.docs)
  }, [])

  // function handleSearchWord(searchWord) {
  //   openLibraryApi.getDataList(searchWord)
  //     .then((res) => {
  //       if (res.numFound !== 0) {
  //         const foundedBooks = res.docs;

  //       }
  //     })
  // }

  return (
    <div className="App">
      <Header></Header>
      {/* <SearchForm onSearchWord={handleSearchWord}></SearchForm> */}
      <SearchForm></SearchForm>
      <Preloader isLoading={loading}></Preloader>
      <NotFound isEmpty={error}></NotFound>
      <div>{data.docs[0].title}</div>
    </div>
  );
}

export default App;
