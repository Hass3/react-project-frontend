import { useState, useEffect } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CarPage from '../components/CarPage'

function Home() {
    const [cars, setCars] = useState([])
  

    useEffect(() => {
        fetch('http://localhost:3001/Cars')
            .then(r => r.json())
            .then(data => setCars(data))
    }, [])

   
    return (
        <div className='home'>
            <NavBar />
            <Header />
            <CarPage cars={cars} setCars={setCars}/>
        </div>
    )
}

export default Home