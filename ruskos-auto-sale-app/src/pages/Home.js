import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import '../styles/Carform.css'
import CarForm from '../components/CarForm'
function Home(){
    

    return(
       <div className='home'>
        <NavBar />
        <Header />
        <Search />
        <CarForm />
       </div>
    )
}

export default Home