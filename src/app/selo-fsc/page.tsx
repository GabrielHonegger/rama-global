import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const SeloFSC = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Selo FSC
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                    O Selo FSC (Forest Stewardship Council) é uma certificado 
                    internacional criada para garantir que produtos florestais como madeira, 
                    papel e outros derivados sejam originados de florestas manejadas de forma 
                    responsável. Fundado em 1993, o FSC surgiu em resposta à crescente preocupação 
                    com a devastação das florestas em todo o mundo, buscando promover o manejo 
                    florestal sustentável e a conservação dos recursos naturais.
                    <br /><br />
                    <span className='font-bold text-lg'>Como Surgiu?</span>
                    <br />
                    O FSC foi estabelecido durante uma reunião em Toronto, Canadá, 
                    onde líderes de organizações ambientais, empresas de setor madeireiro 
                    e comunidades indígenas se reuniram para discutir soluções que abordassem 
                    a exploração insustentável das florestas.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/certificado-fsc.jpg" alt="certificado-fsc" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
                O objetivo era fornecer um 
                sistema de certificação que garantisse a sustentabilidade e a responsabilidade 
                na administração das florestas.
                <br /><br />
                O Conselho foi formado por representantes de diferentes grupos, incluindo 
                ONGs ambientais, a indústria madeireira, comunidades locais e organizações 
                sociais. O FSC opera em nível mundial e suas diretrizes são aplicadas em vários 
                países, promovendo a certificação de manejo florestal em mais de 80 países.
                <br /><br />
                <span className='font-bold text-lg'>Importância do Selo FSC</span>
                <br />
                A importância do Selo FSC reside na sua capacidade de assegurar aos 
                consumidores que os produtos florestais que adquirem foram feitos de forma 
                sustentável e responsável. Ao garantir que as florestas sejam manejadas de 
                acordo com critérios sociais, ambientais e econômicos rigorosos, o FSC ajuda 
                a proteger os ecossistemas florestais, a biodiversidade e as comunidades que 
                dependem dessas florestas.
                <br /><br />
                <span className='font-bold text-lg'>Para Que Tipo de Empresa é o Selo FSC?</span>
                <br />
                O selo FSC é especialmente relevante para empresas que atuam nos setores de madeira, 
                papel e produtos derivados, como móveis e embalagens. Essas empresas se beneficiam 
                da certificação ao se diferenciar no mercado, demonstrando seu compromisso com a 
                sustentabilidade e atraindo consumidores cada vez mais conscientes ambientalmente.
                <br /><br />
                <span className='font-bold text-lg'>Vantagens do Selo FSC</span>
                <br />
                Ter o selo FSC traz diversas vantagens para as empresas, como:
              </p>
              <ul className='px-7 mt-2 mb-3 list-disc'>
                    <li>
                      <b>Acesso a Novos Mercados</b>: Muitos consumidores e empresas exigem 
                      produtos certificados como condição para compra, aumentando a base de clientes.
                    </li>
                    <br />
                    <li>
                      <b>Credibilidade e Imagem</b>: O certificado melhora a reputação das empresas, sinalizando 
                      responsabilidade socioambiental.
                    </li>
                    <br />
                    <li>
                      <b>Conformidade Legal</b>: O FSC ajuda as empresas a se manterem em conformidade com legislações e 
                      regulamentos ambientais, evitando multas e sanções.
                    </li>
                    <br />
                    <li>
                      <b>Gestão Sustentável</b>: As empresas que obtêm o certificado tendem a 
                      melhorar seus processos de gestão e eficiência dos recursos.
                    </li>
                </ul>
                <p className='my-0'>
                  <span className='font-bold text-lg'>Conclusão</span>
                  <br />
                  Em suma, o Selo FSC representa uma importante ferramenta na 
                  luta pela sustentabilidade das florestas ao redor do mundo. Ele garante que 
                  as práticas de manejo florestal respeitem normas rigorosas e contribui para 
                  a proteção do meio ambiente e das comunidades que dele dependem. Para empresas 
                  que buscam se destacar no mercado atual, o selo FSC não é apenas um 
                  diferencial competitivo, mas uma responsabilidade com o futuro do planeta.
                  <br /><br />
                  Além dos benefícios e da importância do Selo FSC, é fundamental 
                  contar com o apoio de profissionais especializados para navegar pelo processo 
                  de certificação. É aí que entra a Rama Global, uma empresa de consultoria que 
                  se dedica a auxiliar empresas a se qualificarem para o selo FSC. Com a 
                  experiência e o conhecimento necessários, a Rama Global pode ajudar sua empresa 
                  a entender os requisitos do processo, desenvolver um plano de ação eficaz e 
                  preparar toda a documentação necessária para a certificação.
                  <br /><br />
                  Se sua empresa está interessada em obter o Selo FSC e deseja garantir 
                  que todo o processo seja realizado de forma tranquila e eficiente, a Rama Global 
                  está à disposição para ajudar. Se você quiser tirar qualquer 
                  dúvida que tiver a equipe da Rama Global terá prazer em responder suas perguntas 
                  e fornecer as soluções necessárias para que você alcance a certificação com sucesso. 
                  Ao contar com a Rama Global, você está um passo mais perto de se destacar no mercado, 
                  demonstrar seu compromisso com a sustentabilidade e contribuir para um futuro mais 
                  responsável.
                </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default SeloFSC