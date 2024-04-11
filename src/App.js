import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List  from './components/List/List';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';

const App = () => {
  return (
    <div>
    <Navbar/>
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Container>
    </div>
  );
};

export default App;   