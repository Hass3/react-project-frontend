import { useState } from "react"
import CarContainer from "./CarContainer"
import CarForm from "./CarForm"
import Search from "./Search";
function CarPage({ cars, setCars }) {
    const [searched, setSearched] = useState('');
    const [isFormOn, setIsFormOn] = useState(false);
    const handleFormClick = () => setIsFormOn((isOn) => !isOn)


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
            <button className={!isFormOn ? "list-btn" : "back-btn"} onClick={handleFormClick}>{!isFormOn ? "List Car" : "Back"}</button>
            {!isFormOn ? <Search onSearch={onSearch} /> : null }
            {!isFormOn ? <h1 style={{ justifySelf: "center" }}>Browse Vehicles</h1>: null}
            <br />
            {!isFormOn ? <CarContainer cars={displayedCars} onSearch={onSearch} /> : <CarForm onAddCar={addCar} />}
        </>
    )
}

export default CarPage