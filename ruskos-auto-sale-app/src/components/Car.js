import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import { useParams } from "react-router-dom"
function Car(){
    const[car, setCar]=useState({})
    const userId = useParams()
    console.log(userId)
    return(
    <>
        <NavBar/>
        <Header/>
        <h1>hello</h1>
    </>
    )


}
export default Car