import { useState } from "react"
import Search from "./Search"
import CarContainer from "./CarContainer"
function CarPage(){

    return(
        <>
        <Search />
        <br/>
        <CarContainer />
        </>
    )
}

export default CarPage