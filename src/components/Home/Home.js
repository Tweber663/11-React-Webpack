import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import Lists from "../Lists/Lists";
import ListForm from "../ListForm/ListForm";

const Home = () => {
    return (
        <div>
            <Hero />
            <Lists />
            <ListForm/>
        </div>
    )
}

export default Home;