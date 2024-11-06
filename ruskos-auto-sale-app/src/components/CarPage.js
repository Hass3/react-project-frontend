import { useState } from "react"
import CarContainer from "./CarContainer"
import CarForm from "./CarForm"
import Search from "./Search";
function CarPage({ cars, setCars, isFormOn }) {
    const [searched, setSearched] = useState('');


    function onSearch(search) {
        setSearched(search)
    }

    function addCar(newCar) {
        setCars([...cars, newCar])
    }

    const displayedCars = cars.filter(car =>
        car.make.toLowerCase().includes(searched.toLowerCase()) || car.model.toLowerCase().includes(searched.toLowerCase()))


    return (
        <>
            {!isFormOn ? <Search onSearch={onSearch} /> : null }
            {!isFormOn ? <h1 style={{ justifySelf: "center" }}>Browse Vehicles</h1>: null}
            <br />
            {!isFormOn ? <CarContainer cars={displayedCars} onSearch={onSearch} /> : <CarForm onAddCar={addCar} />}
        </>
    )
}

export default CarPage