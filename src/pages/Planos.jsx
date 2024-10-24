import React from 'react';

function Planos() {
  return (
    <>
    <div className="bg-[#009A97] mt-12 p-8">
        <h2 className="text-white text-2xl text-center my-8 mt-20 font-bold">Comece a Gerenciar a sua saúde em poucos cliques</h2>
        <h2 className="text-white text-xl text-center my-8">As soluções da Resultex irão transformar a seus cuidados com diagnósticos e condições de saúde</h2>
      </div>
      <div className="bg-[#9db0a3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {/* PLANO BÁSICO */}
        <div className="bg-gray-800 border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-white text-xl font-bold text-center mb-4">PLANO BÁSICO</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center text-white"> - Cadastro de até 70 exames por mês</li>
            <li className="flex items-center text-white"> - Acesso à visualização de resultados em formato digital e laudos explicativos</li>
            <li className="flex items-center text-white"> - Lembretes mensais para consultas e exames + prioridades de atendimento em laboratórios</li>
            <li className="flex items-center text-white"> - Suporte via e-mail e Whatsapp</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4 text-green-600">R$ 29,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>

        {/* PLANO PADRÃO */}
        <div className="bg-gray-800 border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-xl font-bold text-center mb-4 text-white">PLANO PADRÃO</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center text-white"> - Cadastro de exames ilimitados</li>
            <li className="flex items-center text-white"> - Visualização de resultados em gráficos e relatórios detalhados</li>
            <li className="flex items-center text-white"> - Lembretes personalizados para exames e consultas</li>
            <li className="flex items-center text-white"> - Compartilhamento fácil de resultados com médicos</li>
            <li className="flex items-center text-white"> - Suporte via chat ao vivo</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4 text-green-600">R$ 49,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>

        {/* PLANO PREMIUM */}
        <div className="bg-gray-800 border rounded-lg shadow-md p-6 mt-20">
          <h3 className="text-xl font-bold text-center mb-4 text-white">PLANO PREMIUM</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center text-white"> - Cadastro de exames ilimitados</li>
            <li className="flex items-center text-white"> - Acesso a análises avançadas de resultados</li>
            <li className="flex items-center text-white"> - Notificações automáticas sobre resultados disponíveis</li>
            <li className="flex items-center text-white"> - Relatórios em PDF para download</li>
            <li className="flex items-center text-white"> - Armazenamento seguro em nuvem</li>
            <li className="flex items-center text-white"> - Suporte prioritário 24/7</li>
            <li className="flex items-center text-white"> - Acesso a webinars e conteúdos educacionais sobre saúde</li>
          </ul>
          <p className="text-center text-2xl font-bold mb-4 text-green-600">R$ 79,90</p>
          <button className="w-full bg-[#009A97] text-white py-2 rounded-lg">ASSINAR</button>
        </div>
      </div>
      </>
  );
}

export default Planos;

