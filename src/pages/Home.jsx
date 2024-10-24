// src/pages/Home.jsx
import React from 'react';
import Gestao from '../assets/icon-gestao.svg';
import Praticidade from '../assets/Praticidade.svg';
import Organizacao from '../assets/Organizacao.svg';
import Historico from '../assets/historico.svg';
import Agendamento from '../assets/agendamento.svg';
import logo from '../assets/resutex-logo-w.svg';


function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#D2FADF] text-black p-7">
        <div className="md:w-1/2 w-full text-left justify-center mx-32 p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-24">Gerenciar os seus Exames <br />nunca foi tão simples</h1>
          <p className="text-2xl font-bold leading-relaxed">Cadastre seus exames, visualize resultados e <br />Receba alertas sobre consultas futuras de<br /> maneira simples e intuitiva</p>
          <div className="flex gap-5 mt-4">
            <button className="text-white border-3 rounded-2xl">TESTE AGORA</button>
            <button className="text-black bg-transparent border-3 rounded-2xl border-[#000000]">VER PLANOS</button>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center mt-5 md:mt-0 mx-15">
          <img src={Gestao} alt="Boneco-mexendo-em-arquivos" className="max-w-full h-auto" />
        </div>
      </div>

      <h2 className="text-2xl text-center my-8 mt-20">Vantagens do Resutex</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 p-20">
        <div className="flex flex-col items-start">
          <img src={Praticidade} alt="Exame escaneado no Tablet" className="mb-2" />
          <h4 className="font-bold">Praticidade</h4>
          <p>Cadastre seus exames, visualize resultados e <br />Receba alertas sobre consultas futuras de maneira simples e intuitiva</p>
        </div>

        <div className="flex flex-col items-start">
          <img src={Organizacao} alt="Enfileiramento de itens" className="mb-2" />
          <h4 className="font-bold">Organização</h4>
          <p>Cadastre seus exames, visualize resultados e <br />Receba alertas sobre consultas futuras de maneira simples e intuitiva</p>
        </div>

        <div className="flex flex-col items-start">
          <img src={Historico} alt="Relógio" className="mb-2" />
          <h4 className="font-bold">Histórico</h4>
          <p>Cadastre seus exames, visualize resultados e <br />Receba alertas sobre consultas futuras de maneira simples e intuitiva</p>
        </div>

        <div className="flex flex-col items-start">
          <img src={Agendamento} alt="Agenda" className="mb-2" />
          <h4 className="font-bold">Agendamento</h4>
          <p>Cadastre seus exames, visualize resultados e <br />Receba alertas sobre consultas futuras de maneira simples e intuitiva</p>
        </div>
      </div>

      <h2 className="text-2xl text-center my-8 mt-20">Como Funciona</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">

        <div className="flex flex-col items-start bg-green-300 border-4 border-transparent rounded-xl p-10 ">
          <h2 className="text-black mb-6 font-bold text-xl">CADASTRE SEUS EXAMES</h2>
          <p className="text-black text-lg">Crie uma conta em Minutos e cadastre os exames médicos de maneira rápida. Adicione informações como o Tipo do exame, data e local, sem esforço.</p>
        </div>

        <div className="flex flex-col items-start bg-green-300 border-4 border-transparent rounded-xl p-10 ">
          <h2 className="text-black mb-6 font-bold text-xl">VISUALIZAÇÃO DOS RESULTADOS</h2>
          <p className="text-black text-lg">Após a realização dos exames, visualize relatórios e análises detalhadas diretamente na plataforma. Entenda melhor a sua saúde com informações claras e acessíveis.</p>
        </div>

        <div className="flex flex-col items-start bg-green-300 border-4 border-transparent rounded-xl p-10 ">
          <h2 className="text-black mb-6 font-bold text-xl">ALERTAS E LEMBRETES</h2>
          <p className="text-black text-lg">Receba notificações sobre datas de exames e consultas futuras. Com nossos lembretes, você nunca perderá um compromisso importante com a sua saúde.</p>
        </div>
      </div>

      <div className="bg-[#009A97] mt-36 p-8">
        <h2 className="text-2xl text-center my-8 mt-20 font-bold">Comece a Gerenciar a sua saúde em poucos cliques</h2>
        <h2 className="text-xl text-center my-8">As soluções da Resultex irão transformar a seus cuidados com diagnósticos e condições de saúde</h2>
      </div>
      <div className="bg-[#9db0a3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {/* PLANO BÁSICO */}
        <div className="bg-black border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-xl font-bold text-center mb-4">PLANO BÁSICO</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center"> - Cadastro de até 70 exames por mês</li>
            <li className="flex items-center"> - Acesso à visualização de resultados em formato digital e laudos explicativos</li>
            <li className="flex items-center"> - Lembretes mensais para consultas e exames + prioridades de atendimento em laboratórios</li>
            <li className="flex items-center"> - Suporte via e-mail e Whatsapp</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4">R$ 29,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>

        {/* PLANO PADRÃO */}
        <div className="bg-black border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-xl font-bold text-center mb-4">PLANO PADRÃO</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center"> - Cadastro de exames ilimitados</li>
            <li className="flex items-center"> - Visualização de resultados em gráficos e relatórios detalhados</li>
            <li className="flex items-center"> - Lembretes personalizados para exames e consultas</li>
            <li className="flex items-center"> - Compartilhamento fácil de resultados com médicos</li>
            <li className="flex items-center"> - Suporte via chat ao vivo</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4">R$ 49,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>

        {/* PLANO PREMIUM */}
        <div className="bg-black border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-xl font-bold text-center mb-4">PLANO PREMIUM</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center"> - Cadastro de exames ilimitados</li>
            <li className="flex items-center"> - Acesso a análises avançadas de resultados</li>
            <li className="flex items-center"> - Notificações automáticas sobre resultados disponíveis</li>
            <li className="flex items-center"> - Relatórios em PDF para download</li>
            <li className="flex items-center"> - Armazenamento seguro em nuvem</li>
            <li className="flex items-center"> - Suporte prioritário 24/7</li>
            <li className="flex items-center"> - Acesso a webinars e conteúdos educacionais sobre saúde</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4">R$ 79,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>
      </div>

      <footer className="bg-[#063F50] p-8 md:p-16 mt-60">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <div className="flex items-center mb-4 md:mb-0">
      <img src={logo} alt="Logo da Empresa" className="h-20" />
    </div>
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
      <a href="#" className="hover:underline mb-2 md:mb-0">Sobre</a>
      <a href="#" className="hover:underline mb-2 md:mb-0">Contato</a>
      <a href="#" className="hover:underline mb-2 md:mb-0">Política de Privacidade</a>
      <a href="#" className="hover:underline mb-2 md:mb-0">Termos de Serviço</a>
    </div>
  </div>
  <div className="text-center mt-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} RESUTEX. Todos os direitos reservados.</p>
  </div>
</footer>
    </>
  );
}

export default Home;
