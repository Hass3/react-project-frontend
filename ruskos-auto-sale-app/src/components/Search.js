import { useState } from "react"

function Search(){
    const[searchValue, setSearchValue] = useState('')
    function handleOnChange(e){
        setSearchValue(e.target.value)
    }

    return(
        <input
        type="input"
        placeholder="Search cars"
        value={searchValue}
        onChange={handleOnChange}
        />
    )
}
export default Search