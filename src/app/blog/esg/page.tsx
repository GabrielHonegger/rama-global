import CTAButton from '@/components/CTAButton'
import React from 'react'

const ESG = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Certificado ESG
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                  O Certificado ESG (Environmental, Social and Governance) refere-se a um 
                  conjunto de práticas e métricas que avaliam a responsabilidade ambiental, social 
                  e de governança das empresas. Embora não seja uma certificação formal como o FSC ou o 
                  PEFC, o conceito ESG se tornou uma referência crucial para investidores e consumidores 
                  que desejam entender melhor o impacto das empresas em questões sociais e ambientais. 
                  As práticas ESG começaram a ganhar destaque no final dos anos 1990, e ao longo dos anos, 
                  tornou-se um critério importante na tomada de decisões de investimento.
                  <br /><br />
                  <span className='font-bold text-lg'>Como Surgiu?</span>
                  <br />
                  O conceito de ESG surgiu como uma evolução das iniciativas de responsabilidade 
                  social corporativa (RSC) e práticas de investimento sustentável. Em 2006, a ONU 
                  lançou os Princípios para Investimento Responsável (PRI), incentivando investidores 
                  a considerar fatores ESG em suas decisões. Desde então, o ESG tornou-se uma norma essencial 
                  para as empresas que desejam se alinhar com a crescente preocupação global sobre questões 
                  ambientais e sociais.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/certificado-esg.jpg" alt="certificado-esg" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
                O ESG é promovido por uma ampla gama de stakeholders, incluindo governos, organizações 
                não-governamentais, investidores e instituições financeiras. A sua implementação ocorre em 
                todo o mundo, com uma ênfase crescente na transparência e na responsabilidade corporativa.
                <br /><br />
                <span className='font-bold text-lg'>Importância da Certificação ESG</span>
                <br />
                A importância do ESG reside no seu papel em promover práticas empresariais 
                responsáveis que consideram o impacto ambiental, social e de governança. Empresas 
                que adotam práticas ESG geralmente apresentam melhor desempenho financeiro, reputação 
                melhorada e maior resiliência a riscos regulatórios e reputacionais. Além disso, muitos 
                investidores agora usam critérios ESG para avaliar a sustentabilidade e o risco de 
                longo prazo em suas carteiras.
                <br /><br />
                <span className='font-bold text-lg'>Para Que Tipo de Empresa é o Selo ESG?</span>
                <br />
                Empresas de todos os setores se beneficiam ao integrar práticas ESG em suas operações. 
                Isso inclui indústrias como energia, manufatura, tecnologia, agricultura e serviços 
                financeiros. A adoção de práticas ESG não só ajuda na atração de investidores que buscam 
                empresas sustentáveis, mas também melhora o relacionamento com consumidores e outras partes 
                interessadas, muitas vezes levando a um aumento nas vendas e na lealdade à marca.
                <br /><br />
                <span className='font-bold text-lg'>Vantagens da Implementação de Práticas ESG</span>
                <br />
                As vantagens de adotar as práticas ESG incluem:
              </p>
              <ul className='px-7 mt-2 mb-3 list-disc'>
                    <li>
                      Atração de Investimentos: Investidores estão cada vez mais focados em 
                      alocar capital em empresas que demonstram responsabilidade ESG.
                    </li>
                    <br />
                    <li>
                      Melhoria da Reputação: Práticas responsáveis ajudam a construir confiança e credibilidade 
                      com consumidores e stakeholders.
                    </li>
                    <br />
                    <li>
                      Redução de Riscos: Empresas que implementam estratégias ESG eficazes tendem 
                      a ser mais resilientes e estão melhor preparadas para enfrentar crises e mudanças regulatórias.
                    </li>
                    <br />
                    <li>
                      Vantagem Competitiva: A adoção de práticas sustentáveis pode diferenciar uma 
                      empresa no mercado, atraindo clientes que valorizam a responsabilidade social e ambiental.
                    </li>
                </ul>
                <p className='my-0'>
                  <span className='font-bold text-lg'>Conclusão</span>
                  <br />
                  Em resumo, o ESG representa um conjunto de práticas que são essenciais 
                  para empresas que desejam se destacar em um mercado cada vez mais focado na 
                  sustentabilidade e responsabilidade social. A adoção de critérios ESG não 
                  apenas beneficia as empresas, mas também contribui para um futuro mais sustentável
                  e socialmente justo.
                  <br /><br />
                  Para empresas que buscam implementar práticas ESG de forma eficiente, 
                  a Rama Global é uma consultoria que pode oferecer suporte valioso. Com uma 
                  equipe especializada, a Rama Global ajuda as empresas a entender os requisitos 
                  e as melhores práticas relacionadas ao ESG, facilitando o processo de integração 
                  dessas métricas em suas operações.
                  <br /><br />
                  Se você está interessado em melhorar o desempenho ESG da sua empresa e 
                  gostaria de saber como podemos ajudar, não hesite em entrar em contato. 
                  A Rama Global está pronta para a quaisquer 
                  dúvidas que você tenha, com o objetivo de ajudar sua empresa a desenvolver uma 
                  estratégia ESG robusta e eficaz. Ao trabalhar com a Rama Global, você estará 
                  dando um importante passo em direção à sustentabilidade e à responsabilidade 
                  social, além de se destacar no mercado contemporâneo.
                </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default ESG