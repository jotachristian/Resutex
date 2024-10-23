import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/resutex-logo.svg';
import Sobre from './pages/Sobre'; 
import Planos from './pages/Planos'; 
import Home from './pages/Home'; 
import Contato from './pages/Contato'; // Importa a página Planos


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='bg-[#5ADB94] p-5 py-3 fixed top-0 left-0 w-full z-50'>
        <div className='flex justify-between items-center'>
          <a href="/">
          <img src={logo} alt="Logo" className='h-13 p-0' /></a>
          <div
            className={`md:hidden space-y-1 cursor-pointer z-50 ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className={`block h-1 w-7 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`block h-1 w-7 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`block h-1 w-7 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>

          {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-[#5ADB94] flex flex-col items-center justify-center gap-4 mt-4 md:hidden z-40">
              <a href="/sobre" className="text-[#2F4858] text-xl">SOBRE</a>
              <a href="/planos" className="text-[#2F4858] text-xl">PLANOS</a>
              <a href="/contato" className="text-[#2F4858] text-xl">CONTATO</a>
              <a href="teste3.html" className="text-[#ffffff] text-xl bg-[#008492] rounded-xl p-2">ENTRAR</a>
            </div>
          )}

          <div className="hidden md:flex justify-end gap-4 flex-wrap p-2">
            <a href="/sobre" className="text-[#2F4858] text-xl p-2">SOBRE</a>
            <a href="/planos" className="text-[#2F4858] text-xl p-2">PLANOS</a>
            <a href="/contato" className="text-[#2F4858] text-xl p-2">CONTATO</a>
            <a href="teste3.html" className="text-[#ffffff] text-xl bg-[#008492] rounded-xl p-2">ENTRAR</a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Componente Home deve ser criado */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
