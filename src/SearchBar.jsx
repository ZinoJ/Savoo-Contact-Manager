import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import ContactContext from "./ContactContext";

const SearchBar = () => {
   const { setSearch } = useContext(ContactContext);
   
   return (
     <div className="search">
       <BiSearch style={{ fontSize: "1.3em" }} />
       <input
         type="text"
         placeholder="Search contacts"
         onChange={(e) => setSearch(e.target.value)}
       />
     </div>
   );
 };

 export default SearchBar