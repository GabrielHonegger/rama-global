import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const PEFC = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Certificado PEFC
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                O Certificado PEFC (Programme for the Endorsement of Forest Certification) é uma 
                certificação internacional dedicada a promover a gestão florestal sustentável. 
                Fundado em 1999 na Europa, o PEFC surgiu como resposta à necessidade de garantir 
                que produtos de origem florestal, como madeira e papel, sejam obtidos de florestas 
                que seguem práticas ambientalmente corretas, socialmente benéficas e economicamente viáveis.
                    <br /><br />
                    <span className='font-bold text-lg'>Como Surgiu?</span>
                    <br />
                    O PEFC foi estabelecido por proprietários de florestas europeus que buscavam 
                    um sistema de certificação que pudesse garantir que a percepção do manejo 
                    florestal sustentável fosse respeitada. O programa é um esforço coletivo que 
                    envolve a participação de vários stakeholders, incluindo ONGs ambientais, 
                    indústrias, consumidores e comunidades locais.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/certificado-pefc.webp" alt="certificado-pefc" className='w-full rounded-xl max-h-80 object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
                O PEFC é promovido por diversas organizações em todo o mundo, operando em mais 
                de 50 países. Ele é administrado por entidades locais que garantem que os padrões 
                de manejo florestal do PEFC sejam seguidos, promovendo a certificação de florestas 
                e produtos florestais de acordo com suas diretrizes.
                <br /><br />
                <span className='font-bold text-lg'>Importância do Certificado PEFC</span>
                <br />
                A importância do Certificado PEFC está em sua capacidade de assegurar aos 
                consumidores que os produtos florestais que adquirem são provenientes de fontes 
                sustentáveis e responsáveis. Isso contribui para a proteção das florestas, da 
                biodiversidade e das comunidades que dependem desses ecossistemas, promovendo 
                uma gestão que satisfaça as necessidades das gerações atuais sem comprometer as futuras.
                <br /><br />
                <span className='font-bold text-lg'>Para Que Tipo de Empresa é o Selo PEFC?</span>
                <br />
                O selo PEFC é especialmente relevante para empresas atuantes nos setores de 
                madeira, papel e produtos derivados, como móveis e embalagens. A certificação 
                permite que essas empresas se destaquem no mercado, mostrando seu compromisso 
                com a sustentabilidade e atraindo a atenção de consumidores que valorizam práticas 
                responsivas e éticas.
                <br /><br />
                <span className='font-bold text-lg'>Vantagens do Certificado PEFC</span>
                <br />
                Algumas vantagens de obter a certificação PEFC incluem:
              </p>
              <ul className='px-7 mt-2 mb-3 list-disc'>
                    <li>
                      Acesso a Novos Mercados: Muitos consumidores e empresas priorizam produtos 
                      certificados, ampliando as oportunidades de negócio.
                    </li>
                    <br />
                    <li>
                      Credibilidade e Imagem: A certificação melhora a reputação da empresa, 
                      demonstrando seu compromisso com a sustentabilidade.
                    </li>
                    <br />
                    <li>
                      Conformidade Legal: O PEFC ajuda as empresas a se manterem em conformidade 
                      com legislações ambientais, evitando sanções.
                    </li>
                    <br />
                    <li>
                      Gestão Sustentável: As empresas que obtêm o selo tendem a melhorar a 
                      eficiência de seus processos e a gestão dos recursos.
                    </li>
                </ul>
                <p className='my-0'>
                  <span className='font-bold text-lg'>Conclusão</span>
                  <br />
                    Em resumo, o Certificado PEFC é uma ferramenta essencial na promoção do 
                    manejo florestal sustentável. Ele garante que os produtos florestais sejam 
                    produzidos de acordo com altos padrões de responsabilidade.
                  <br /><br />
                    A Rama Global é uma empresa de consultoria especializada em ajudar 
                    empresas a se qualificarem para o Certificado PEFC. Com uma equipe experiente, 
                    a Rama Global orienta sua empresa em todas as etapas do processo de certificação, 
                    desde a compreensão dos requisitos até a preparação da documentação necessária. 
                    Se sua empresa está interessada em obter o Certificado FSC e deseja garantir 
                    que todo o processo seja realizado de forma tranquila e eficiente, a Rama Global 
                    está à disposição para ajudar. Se você quiser tirar qualquer 
                    dúvida que tiver a equipe da Rama Global terá prazer em responder suas perguntas 
                    e fornecer as soluções necessárias para que você alcance a certificação com sucesso. 
                    Ao contar com a Rama Global, você está mais próximo de se destacar no mercado e 
                    se comprometer com um futuro sustentável.
                </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default PEFC