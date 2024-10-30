import { useState } from "react"

function CarForm({onAddCar}){
    const [makeInput, setMakeInput] = useState('');
    const [modelInput, setModelInput]=useState('');
    const [yearInput, setYearInput] = useState('');
    const [priceInput, setPriceInput]= useState('');
    const [imgInput, setImgInput] = useState('');
    const [sellerInput, setSellerInput]=useState('');
    
    return(
        <>
        <form className='car-form'>
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
            <button className="form-btn" type="submit">List Car</button>
        </form>
        <h1></h1>
        </>
    )
}


export default CarForm