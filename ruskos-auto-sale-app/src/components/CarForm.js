import { useState } from "react"

function CarForm({onAddCar}){
    const [makeInput, setMakeInput] = useState('');
    const [modelInput, setModelInput]=useState('');
    const [yearInput, setYearInput] = useState('');
    const [priceInput, setPriceInput]= useState('');
    const [imgInput, setImgInput] = useState('');
    const [sellerInput, setSellerInput]=useState('');
    const [listed, setListed] = useState(false);
    const [name,setName] = useState('');
    const [make, setMake]=useState('');
    const [model, setModel]= useState('')
    const [year, setYear]= useState('');
    function handleSubmit(e){
        e.preventDefault();
        const newCar = {
            make: makeInput,
            model: modelInput,
            year: parseFloat(yearInput),
            price: parseFloat(priceInput),
            image:imgInput,
            seller: sellerInput
        }
      fetch('http://localhost:3001/Cars', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newCar)
      })
        .then(r=>r.json())
        .then(car=>onAddCar(car))
        sellerInput === '' ? setListed(false) : setListed(true)
        setName(sellerInput)
        setMake(makeInput)
        setModel(modelInput)
        setYear(yearInput)
        setMakeInput('');
        setModelInput('');
        setYearInput('');
        setPriceInput('')
        setImgInput('');
        setSellerInput('');
    }



    return(
        <>
        <form onSubmit={handleSubmit} className='car-form'>
            <h2 className="carform-title">List Your Car Here</h2>
            <input
            className="form-input" 
            placeholder="make..."
            value={makeInput}
            onChange={e=>setMakeInput(e.target.value)} />
            <br/>
            <input
            className="form-input"
            placeholder="model..."
            value={modelInput}
            onChange={e=>setModelInput(e.target.value)} />
            <br/>
            <input 
            className="form-input"
            placeholder="year..."
            value={yearInput}
            onChange={e=>setYearInput(e.target.value)} />
            <br/>
            <input 
            className="form-input"
            placeholder="price..."
            value={priceInput}
            onChange={e=>setPriceInput(e.target.value)} />
            <br/>
            <input 
            className="form-input"
            placeholder="image..."
            value={imgInput}
            onChange={e=>setImgInput(e.target.value)} />
            <br/>
            <input 
            className="form-input"
            placeholder="owner..."
            value={sellerInput}
            onChange={e=>setSellerInput(e.target.value)} />
            <br/>
            <button className="form-btn" type="submit">List Car</button>
        </form>
        { listed ?<h1>Thank You {name} for submmiting your {year} {make} {model} your Vehicle is now listed</h1>: null}
        </>
    )
}


export default CarForm