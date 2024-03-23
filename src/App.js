
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
