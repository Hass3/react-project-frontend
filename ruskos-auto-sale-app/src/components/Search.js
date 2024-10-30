import { useState } from "react"

function Search({onSearch}){
    const[searchValue, setSearchValue] = useState('')

    function handleOnChange(e){
        setSearchValue(e.target.value)
        onSearch(e.target.value)
    }

    return(
        <div className="content">
        <input
        type="input"
        placeholder="Search Vehicle by Make or Model"
        className="search"
        value={searchValue}
        onChange={handleOnChange}
        />
        </div>
    )
}
export default Search