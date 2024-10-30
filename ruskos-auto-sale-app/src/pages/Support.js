
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function Support(){

    return(
        <>
        <NavBar/>
        <Header/>
        <h2>Help and Support</h2>
        <p>Leave email and name to support our on going bussiness</p>
        <form>
            <input placeholder="email"/>
            <input placeholder='name'/>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )


}

export default Support