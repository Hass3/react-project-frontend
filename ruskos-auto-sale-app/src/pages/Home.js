import { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CarForm from '../components/CarForm'
import CarPage from '../components/CarPage'
function Home(){
    const[isFormOn, setIsFormOn] = useState(false)

    const handleFormClick=()=> setIsFormOn((isOn)=> !isOn)



    return(
       <div className='home'>
        <NavBar />
        <Header />
        <button onClick={handleFormClick} style={{background : "red"}}>{!isFormOn?"List Car" : "Back"}</button>
        {!isFormOn? <CarPage /> : <CarForm/>   }

       </div>
    )
}

export default Home