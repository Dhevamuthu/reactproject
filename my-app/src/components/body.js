import Sareeitem from "./saree_cards";

import { saree_data } from "../common/mock_data";
import { useState } from "react";

//Routing


const Body=()=>{
    const [searchtext,setSearchText]=useState("");
    const [filtering,setfiltering]=useState(saree_data);

    function handleOnchange(e){
        
        setSearchText(e.target.value);

    }
    function filtersaree(){
        const filtering= saree_data.filter(sar=>{
            return sar.name.toLowerCase().includes(searchtext.toLowerCase());
        });
        setfiltering(filtering);
        console.log(filtering);

    }

    return(
      <>
      <div className="search-bar">
        <input type="text" onChange={handleOnchange}></input>
        <button onClick={filtersaree}>Search</button>
      </div>
      <div className="saree-cont">
        {
          filtering.map(Saree=> {
            return(
              <Sareeitem key={Saree.id} saree_data={Saree}/>
            )
          })
  
        }
      
      
      </div>
      
      </>
      
    );
  };

  export default Body; 