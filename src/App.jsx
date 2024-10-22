import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/resutex-logo.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex justify-between items-center gap-4 p-5 py-3 fixed top-0 left-0 w-full z-50' style={{ backgroundColor: '#5ADB94' }}>
  <img src={logo} alt="Logo" className='h-13 p-0' />
  <div className='flex justify-end gap-4 flex-wrap p-2'> {/* flex-wrap permite que os itens se movam para a linha seguinte se necessário */}
    <a href="teste.html" className="text-[#2F4858] text-xl p-2" >SOBRE</a>
    <a href="teste2.html" className="text-[#2F4858] text-xl p-2">PLANOS</a>
    <a href="teste3.html" className="text-[#2F4858] text-xl p-2">CONTATO</a>
    <a href="teste3.html" className="text-[#ffffff] text-xl bg-[#008492] rounded-xl p-2">ENTRAR</a>

  </div>
</nav>

    </>
  )
}

export default App
