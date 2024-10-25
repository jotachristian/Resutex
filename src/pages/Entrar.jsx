// Entrar.jsx
import React from 'react';
import logo from '../assets/resutex-logo-w.svg';
import imagemEntrada from '../assets/Login-icon.svg';


function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-green-900 to-green-500">
      <div className="flex items-center justify-between w-full mt-12 lg:fixed lg:top-0 lg:left-2 lg:w-1/2">
      <a href="/">
  <img src={logo} alt="Logo" className="h-14 ml-28" />
  </a>
</div>

      {/* Espaço para compensar o header fixo em telas grandes */}
      <div className="pt-16 lg:hidden"></div>

      {/* Lado esquerdo com imagem de ilustração (somente em telas grandes) */}
      <div className="hidden lg:flex lg:flex-col lg:w-1/2 items-center justify-center p-14">
        <div className="w-3/4 h-96 flex items-center justify-center">
          <p>
            <img src={imagemEntrada} alt="Imagem de coração"className='mt-10' />
          </p>
        </div>
      </div>

      {/* Lado direito com o formulário */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4">
        {/* Formulário de login */}
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#008492] focus:border-[#008492] sm:text-sm"
                required
              />
            </div>

            {/* Opções extras */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="h-4 w-4 text-[#008492] border-gray-300 rounded" />
                <span className="ml-2 text-gray-600">Permanecer conectado</span>
              </label>
              <a href="/esqueci-senha" className="text-sm text-[#008492]">Esqueci a senha</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#008492] text-white rounded-lg py-2 px-4 mt-4 hover:bg-[#00737f] focus:outline-none focus:ring-2 focus:ring-[#008492] focus:ring-opacity-50"
            >
              Entrar
            </button>

            <div className="text-center mt-4">
              <a href="/cadastro" className="text-sm text-[#008492]">Não tem uma conta? Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
