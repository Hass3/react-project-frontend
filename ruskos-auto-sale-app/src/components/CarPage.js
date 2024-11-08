import { useState } from "react"
import CarContainer from "./CarContainer"
import CarForm from "./CarForm"
import Search from "./Search";
function CarPage({ cars, setCars, isFormOn }) {
    const [searched, setSearched] = useState('');
    const [clicked, setClicked]= useState(false);

    function onSearch(search) {
        setSearched(search)
    }

    function addCar(newCar) {
        setCars([...cars, newCar])
    }
//Create button, when clicked all cars less than 10,000 are displayed



    const displayedCars = cars.filter(car =>{
      const search =   car.make.toLowerCase().includes(searched.toLowerCase()) || car.model.toLowerCase().includes(searched.toLowerCase())
      const filter = clicked === true ? car.price < 10000 : cars;
      return search && filter
}
    )
 
    return (
        <>
            {!isFormOn?<button onClick={()=>setClicked(prev=>!prev)}>{!clicked ? "Filter Under $10,000": "Show All Cars"}</button>: null}
            {!isFormOn ? <Search onSearch={onSearch} /> : null }
            {!isFormOn ? <h1 style={{ justifySelf: "center" }}>Browse Vehicles</h1>: null}
            <br />
            {!isFormOn ? <CarContainer cars={displayedCars} onSearch={onSearch} /> : <CarForm onAddCar={addCar} />}
        </>
    )
}

export default CarPage