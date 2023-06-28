import { useSelector } from "react-redux";

function CarValue(){
    const value = useSelector(({cars: {data, searchTerm}}) =>
        data
        .filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, car) => acc + car.cost, 0)
    )

    return <div className="car-value"><h3>Total Cost: ${value}</h3></div>
}

export default CarValue;