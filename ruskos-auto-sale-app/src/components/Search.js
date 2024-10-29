import { useState } from "react"

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