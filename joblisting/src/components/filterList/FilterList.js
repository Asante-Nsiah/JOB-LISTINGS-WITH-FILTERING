import React from "react";
import close from "../../public/images/icon-remove.svg";

const FilterList =  ({filteredData, removeKeywords, clearAll }) => {
     return (
 <div className="Filter-container">
     
   <ul>
       {filteredData.map(filter => {
       return <li>
           {filter}
           <button 
           type="button"
           onClick={() => removeKeywords(filter)}>
               <img src="{close}" alt="" />
           </button>
       </li> 
})}
   <a href="#" onClick={ () => clearAll} > 
       Clear
    </a>
    </ul>

 </div>
    );
};

export default FilterList;
  