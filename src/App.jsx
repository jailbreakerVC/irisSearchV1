import { useEffect, useState } from 'react'

import SearchBar from '../components/searchbar'
import Heading from '../components/heading'
import Page from '../components/page'
import './App.css'

function App() {
  function renderData({searchResults}){
    if (searchResults){
      console.log("I HAVE DATA");
    }
    console.log("NO DATA");
  }

  
  const [searchResults,setResults]=useState([]);
  useEffect(()=>{
    console.log(searchResults);
  }
  , [searchResults])
  return (
    <div className="App">
      <div className='topcontainer'>
      {/* <Heading></Heading> */}
      <img src='src/assets/owasp.png'></img>
       <SearchBar setResults={setResults}></SearchBar>
       </div>
       <div className='searchContainer'>
        <Page data={searchResults}></Page>
      </div>
        
    </div>
  )
}

export default App
