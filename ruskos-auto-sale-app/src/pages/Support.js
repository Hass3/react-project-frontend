import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function Support(){
    const[nameInput,setNameInput]=useState('');
    const[emailInput, setEmailInput]=useState('');
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[isSent, setIsSent]=useState(false)
    
    function handleSubmit(e){
        e.preventDefault();
        if(emailInput === '' || nameInput === '') setIsSent(false);
        else{setIsSent(true)};
        setName(nameInput);
        setEmail(emailInput);
        setNameInput('');
        setEmailInput('');
    }

    return(
        <>
        <NavBar/>
        <Header/>
        <h2>Help and Support</h2>
        <p style={{fontSize:'20px'}}>Please Leave Your name and Email to support our ongoing bussiness and to keep up with updates</p>
        <form onSubmit={handleSubmit} className="support-form">
            <input
            className="support-input" 
            placeholder="name here..."
            value={nameInput}
            onChange={e=>setNameInput(e.target.value)}
            />
            <input 
            className="support-input" 
            placeholder='email here...'
            value={emailInput}
            onChange={(e)=> setEmailInput(e.target.value)}
            />
            <button className="support-btn" type="submit">Submit</button>
        </form>
        {isSent ? <h1>Thank You {name} will send you more information and updates at {email}</h1>: null}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS-tUMiHHf-JbKXzjzDPkfCjQtVhNJj8sbg&s"/>
        </>
    )


}

export default Support