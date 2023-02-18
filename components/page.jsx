import { useState } from "react";
import Button from '@mui/material/Button';
export default function Page({data})
{
     
     const totalitems= data.length;
     const totalPages= Math.round((totalitems/10));
     const [UpperLimit,setUpperLimit] = useState(10);
     const [LowerLimit,setLowerLimit] = useState(0);
     const [page,setPage] = useState(0);
     function shiftPage(){
          if (LowerLimit==totalPages){
               return;
          }
          setUpperLimit(UpperLimit+10);
          setLowerLimit(LowerLimit+10);
          setPage(page+1);
     }
     function backPage(){
          if (LowerLimit==0){
               return;
          }
          setUpperLimit(UpperLimit-10);
          setLowerLimit(LowerLimit-10);
          setPage(page-1);
     }
     
   const arr1 = data.slice(LowerLimit,UpperLimit);
     return(
          <div className="searchResult">
               {arr1.map((item)=>{
                    return(
                         <div>
                              <a className="link" href = {item.a}>{item.t}</a>
                              <p className="desc">{item.d}</p>
                         </div>
                    )
               }
               )}
               <div className="bottom">

               <Button variant="contained" onClick={backPage}>Back</Button>
               <Button variant="contained" onClick={shiftPage}>Next</Button>
               
               <p>
                    Showing page {page} of {totalPages} 
               </p>
               </div>
          </div>
     )
          
}


