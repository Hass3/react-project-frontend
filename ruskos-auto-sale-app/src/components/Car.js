import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import { useParams } from "react-router-dom"
function Car(){
    const[car, setCar]=useState({})
    const[sent, setSent]=useState(false)
    const[messageInput, setMessageInput]=useState('');
    const[nameInput, setNameInput]=useState('')
    const [name, setName]=useState('')
    const parms = useParams()
    const userId = parms.id
    
    useEffect(()=>{
        fetch(`http://localhost:3001/Cars/${userId}`)
        .then(r=>r.json(''))
        .then(data=> setCar(data))
    }, [userId])

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSent(true)
        setName(nameInput)
        setNameInput('');
        setMessageInput('');
    }

    
    return(
    <>
        <NavBar/>
        <Header/>
         <form onSubmit={handleSubmit}>
            <input  placeholder={`send message to ${car.seller}`} value={messageInput} onChange={e=> setMessageInput(e.target.value)}/>
            <br/>
            <input placeholder="please put your name here" value={nameInput} onChange={e=>setNameInput(e.target.value)}/>
            <button>Send</button>
            {sent ? <p> Your message was sent {`${name}`} the seller will recive it soon</p>: null}
         </form>
    </>
    )


}
export default Car