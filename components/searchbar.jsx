// const axios = require('axios');
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
export default function SearchBar({setResults}) {

const [status,setStatus] = useState('typing');

  return (
     <form onSubmit= {
          async function handleSubmit(e){
               e.preventDefault();
               setStatus("Loading");
               try{
               const res = await axios.get(`http://localhost:3000/api/${e.target[0].value}`);
               setStatus("Loaded");
               console.log(res)
               const SearchResults = res.data.output.results;  
               setResults(SearchResults); 
               } catch (err) {
                    console.log(err);
               }
              }
     } input>
          
          <div className="center">
          {/* <TextField id="outlined-basic" label="Search" variant="outlined" /> */}
          <input type="text" name="search" placeholder="try searching OWASP!" />
          <button className="">
               Submit</button>
          </div>
     </form>
  )
}

     

