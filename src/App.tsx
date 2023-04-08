import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Main from './pages/main/Main';
import 'aos/dist/aos.css';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';
import Contacts from './pages/contacts/Contacts';

function App() {

  return (
    <section className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </section>
  );
}

export default App;
