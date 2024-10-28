import { useState } from "react"
import '../styles/search.css'
function Search(){
    const[searchValue, setSearchValue] = useState('')
    function handleOnChange(e){
        setSearchValue(e.target.value)
    }

    return(
        <div className="content">
        <input
        type="input"
        placeholder="Search cars"
        className="search"
        value={searchValue}
        onChange={handleOnChange}
        />
        </div>
    )
}
export default Search