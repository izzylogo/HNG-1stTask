// import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
