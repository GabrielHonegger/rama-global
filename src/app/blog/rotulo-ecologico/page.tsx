import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const RotuloEcologico = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
                Certificado de Rótulo Ecológico
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                  A Certificação de Rótulo Ecológico é uma certificação que indica que um produto foi produzido de 
                  maneira ambientalmente sustentável, garantindo que sua fabricação envolve práticas que minimizam 
                  o impacto negativo no meio ambiente. Essa certificação, que pode variar em seus critérios e normas 
                  dependendo do país e do tipo de produto, surgiu como uma resposta à crescente conscientização sobre 
                  a preservação ambiental e a demanda dos consumidores por produtos sustentáveis.
                    <br /><br />
                    <span className='font-bold text-lg'>Como Surgiu?</span>
                    <br />
                    O conceito de rótulo ecológico começou a ser desenvolvido na década de 1980, 
                    com o intuito de proporcionar aos consumidores uma maneira clara de identificar 
                    produtos que respeitam normas ambientais rigorosas. Em 1992, durante a Conferência 
                    das Nações Unidas sobre Meio Ambiente e Desenvolvimento (também conhecida como a Cúpula da 
                    Terra), a importância dos rótulos ecológicos foi reforçada como um meio de incentivar o 
                    mercado a adotar práticas sustentáveis.
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/certificado-rotulo-ecologico.jpeg" alt="certificado-fsc" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
                Os rótulos ecológicos são emitidos por diversas organizações em todo o mundo, cada uma 
                com seus critérios específicos de certificação. Essas normas podem ser aplicadas a uma ampla 
                gama de produtos, incluindo alimentos, produtos de limpeza, cosméticos, têxteis e eletrônicos.
                A implementação e fiscalização das certificações são realizadas por instituições que atuam em 
                conformidade com padrões internacionais e locais.
                <br /><br />
                <span className='font-bold text-lg'>Importância da Certificação de Rótulo Ecológico</span>
                <br />
                  A Certificação de Rótulo Ecológico é importante porque oferece aos consumidores 
                  a garantia de que os produtos que estão adquirindo são produzidos de forma sustentável. 
                  Isso contribui para a proteção do meio ambiente ao incentivar práticas de produção 
                  responsáveis e a utilização de recursos naturais de forma consciente. Dessa forma, ela 
                  ajuda a promover uma economia mais verde e a apoiar empresas que demonstram compromisso 
                  com a sustentabilidade.
                <br /><br />
                <span className='font-bold text-lg'>Para Que Tipo de Empresa é o Selo de Rótulo Ecológico?</span>
                <br />
                  A certificação é importante para empresas que produzem uma ampla gama de produtos, desde 
                  alimentos e bebidas até produtos domésticos e industriais. Com a certificação de rótulo ecológico, 
                  as empresas conseguem se diferenciar no mercado, atraindo consumidores que priorizam a 
                  sustentabilidade em suas decisões de compra. Além disso, a certificação pode abrir novas 
                  oportunidades de mercado e parcerias, tanto no setor privado quanto no público.
                <br /><br />
                <span className='font-bold text-lg'>Vantagens do Certificação de Rótulo Ecológico</span>
                <br />
                As vantagens de obter a certificação de rótulo ecológico incluem:
              </p>
              <ul className='px-7 mt-2 mb-3 list-disc'>
                    <li>
                      Credibilidade e Confiança do Consumidor: Produtos com rótulo ecológico são 
                      vistos como mais confiáveis por consumidores que se preocupam com a sustentabilidade.
                    </li>
                    <br />
                    <li>
                      Diferenciação de Marca: A certificação ajuda a destacar a marca no mercado 
                      competitivo, mostrando comprometimento com práticas sustentáveis.
                    </li>
                    <br />
                    <li>
                      Acesso a Novos Mercados: Certificações de rótulo ecológico podem abrir portas 
                      para clientes que exigem produtos sustentáveis em suas compras.
                    </li>
                    <br />
                    <li>
                      Conformidade Regulamentar: Empresas certificadas podem ter maior facilidade 
                      em atender às legislações ambientais em vigor, evitando possíveis multas e sanções.
                    </li>
                </ul>
                <p className='my-0'>
                  <span className='font-bold text-lg'>Conclusão</span>
                  <br />
                  Em resumo, a Certificação de Rótulo Ecológico é uma importante ferramenta para 
                  promover a sustentabilidade na produção de bens de consumo. Essa certificação garante 
                  que os produtos atendem a altos padrões ambientais e ajuda os consumidores a fazer escolhas 
                  mais conscientes e responsáveis.
                  <br /><br />
                  Para empresas que desejam obter a Certificação de Rótulo Ecológico, a Rama Global é uma 
                  consultoria especializada que pode oferecer apoio nesse processo. Com uma equipe qualificada, 
                  a Rama Global ajuda as empresas a entender os critérios necessários para a certificação, 
                  orientando-as em todas as etapas, desde a avaliação inicial até a implementação de melhorias necessárias.
                  <br /><br />
                  Se você está interessado na Certificação de Rótulo Ecológico para seus 
                  produtos e deseja saber como podemos ajudar, entre em contato. A Rama Global 
                  está disposta a responder a quaisquer dúvidas que você 
                  possa ter. Estamos prontos para ajudar sua empresa a alcançar as certificações 
                  necessárias e a se destacar no mercado como uma opção sustentável, contribuindo 
                  assim para um futuro mais saudável e responsável.
                </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default RotuloEcologico