import { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CarForm from '../components/CarForm'
import CarPage from '../components/CarPage'
function Home(){
    const[isFormOn, setIsFormOn] = useState(false)
    const [cars, setCars]= useState([])
    const handleFormClick=()=> setIsFormOn((isOn)=> !isOn)
    useEffect(()=>{
        fetch('http://localhost:3001/Cars')
        .then(r=>r.json())
        .then(data=> setCars(data))
    },[])

    function addCar(newCar){
        setCars([...cars, newCar])
    }

console.log(cars)
    return(
       <div className='home'>
        <NavBar />
        <Header />
        <button className={!isFormOn?"list-btn": "back-btn"} onClick={handleFormClick}>{!isFormOn?"List Car" : "Back"}</button>
        {!isFormOn? <CarPage cars={cars} /> : <CarForm onAddCar ={addCar}/>   }

       </div>
    )
}

export default Home