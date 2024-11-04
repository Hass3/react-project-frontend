import CarCard from "./CarCard"

function CarContainer({ cars }) {

    return (
        <div className="card-container">

            {cars.map(car =>
                <CarCard
                    key={car.id}
                    car={car}
                />)}
        </div>
    )




}

export default CarContainer