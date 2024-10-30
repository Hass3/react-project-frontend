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
        placeholder="Search cars"
        className="search"
        value={searchValue}
        onChange={handleOnChange}
        />
        <input type="checkbox" placeholder="hi"/>
        <label>Less Than $10,000</label>
        </div>
    )
}
export default Search