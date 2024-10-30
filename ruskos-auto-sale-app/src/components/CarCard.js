import { useState } from "react"
import { Link } from "react-router-dom"
function CarCard({car}){
    const [fav, setFav] = useState(false)

    return(
        <div className="car-card">
            <button onClick={()=>setFav((fav)=>!fav)} className={fav? "remove-fav":''}>{!fav?"Add To Fav ☆": "★"}</button> 
            <h1 className="card-title">{car.make}</h1>
            <img className="card-image" src={car.image} alt={car.make}/>           
            <h2>{car.model}</h2>
            <h2 className="year">{car.year}</h2>
            <h3>{"$"+car.price}</h3>
            <p>{car.seller}</p>
                <Link className="link" to={`/carseller/${car.id}`}>Send Private Message</Link>
        </div>
    )


}


export default CarCard