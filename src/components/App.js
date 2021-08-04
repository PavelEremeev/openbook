import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';
import Preloader from './Preloader';
import { openLibraryApi } from '../utils/OpenLibraryAPI'
import NotFound from './NotFound';
import NewBookList from './NewBookList';

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()

  const [foundedBooks, setFoundedBooks] = useState()

  // useEffect(() => {
  //   setLoading(true)
  //   openLibraryApi.getDataList()
  //     .then((data) => setData(data))
  //     .then(() => setLoading())
  //     .catch(setError);
  // }, [])


  // function handleSearchWord(searchWord) {
  //   openLibraryApi.getDataList(searchWord)
  //     .then((res) => {
  //       if (res.numFound !== 0) {
  //         const foundedBooks = res.docs;

  //       }
  //     })
  // }

  function handleSearchWord(searchWord) {
    setError(false)
    setLoading(true)
    setData(null)
    openLibraryApi.getDataList(searchWord)
      .then((data) => {
        if (data.numFound !== 0) {
          setData(data)
            .then(() => setLoading())
        } if (data.numFound === 0) {
          setLoading(false)
          setError(true)
        }
      })
      .catch((err) => {
        setLoading(false)
        setError(true)
        console.log(err)
      })
  }

  return (
    <div className="App">
      <Header></Header>
      <SearchForm onSearchWord={handleSearchWord}></SearchForm>
      {/* <SearchForm></SearchForm> */}
      <Preloader isLoading={loading}></Preloader>
      <NotFound isEmpty={error}></NotFound>
      {data ? <NewBookList initialBooks={data.docs}></NewBookList> : ''}
    </div>
  );
}

export default App;
