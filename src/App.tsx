import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Main from './pages/main/Main';
import 'aos/dist/aos.css';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';
import Contacts from './pages/contacts/Contacts';
import Error from './pages/404/Error';

function App() {

  return (
    <section className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </section>
  );
}

export default App;
