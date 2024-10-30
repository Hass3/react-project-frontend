import { useState } from "react"
import Search from "./Search"
import CarContainer from "./CarContainer"
function CarPage({cars}){
    const [searched, setSearched] = useState('')

    function onSearch(search){
        setSearched(search)
    }

    const displayedCars = cars.filter(car=> 
       car.make.toLowerCase().includes(searched.toLowerCase()) || car.model.toLowerCase().includes(searched.toLowerCase()))

    return(
        <>
        <Search onSearch={onSearch} />
        <h1 style={{justifySelf: "center"}}>Browse Vehicles</h1>
        <br/>
        <CarContainer cars={displayedCars} />
        </>
    )
}

export default CarPage