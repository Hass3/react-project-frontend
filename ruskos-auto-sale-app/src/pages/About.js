import NavBar from "../components/NavBar"
import Header from "../components/Header"


function About (){
 
    return(
        <>
        <NavBar />
        <Header />
        <h1 className="h1">
            ABOUT US
        </h1>
        <article style={{fontSize:"50px"}}>
              We are a team dedicated to help people find their dream cars for unbeatable prices listed by people all across the country
        </article>
        <br/>
        <h2 style={{color:"red"}}>For Techinacal Support Call us at 1-800-000-0400 or Email Us At Ruskosautosale@gmail.com</h2>
        <img className="about-img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rh9S5A5NR9IHKxnhbSQKNajoVv9F5XtCTg&s"/>
        </>


    )


}
export default About