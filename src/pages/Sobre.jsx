²// src/pages/Sobre.jsx
import React from 'react';
import SobreIcon from '../assets/Sobre.svg';

function Sobre() {
  return (
    <>
      <section class="bg-white py-12 px-6 lg:px-32 mt-28">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold text-[#063F50] mb-8 text-center mt-24">Sobre a Resutex</h2>

          <div class="text-[#2F4858] space-y-6 ">
            <div  className='flex items-center'>
            <p>
            A crescente digitalização de informações na sociedade contemporânea, evidenciou diversos entraves relacionados à morosidade do tratamento de informações de exames na área da saúde, um desafio multifacetado que afeta tanto indivíduos como organizações. Embora a adoção de tecnologias avançadas tenha promovido eficiência e inovação, o descaso pelo investimento em infraestrutura digital das corporações, a resistência a mudanças por parte dos profissionais, (que muitas vezes estão acostumados a processos manuais) e a carência de treinamentos adequados para o uso dessas tecnologias, são fatores que contribuem para a não implementação de medidas eficazes. Essa situação não apenas compromete a produtividade operacional das instituições de saúde, como afeta diretamente a qualidade do atendimento ao paciente, gerando um ciclo vicioso que prejudica o desenvolvimento sustentável da infraestrutura tecnológica. Esse artigo visa levantar questões acerca da temática, oferecendo uma resolução que possa atender ao corpo social.
            </p>

<h2>Oi, estou testando o github</h2>
            
            </div>
            <div>
              <img src={SobreIcon} alt="" className='flex itens-center' />
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
