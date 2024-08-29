import CTAButton from '@/components/CTAButton'
import Link from 'next/link'
import React from 'react'

const Post3 = () => {
  return (
    <main className="m-auto">
      <div className="m-auto mt-3 lg:mt-6 w-full lg:w-10/12 px-6 lg:py-4">
            <h1 className='lg:text-4xl md:text-3xl  text-center lg:mb-10 mb-5 text-2xl'>
              5 Passos para a Obtenção do Selo FSC
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row">
              <div  className="lg:w-1/2 w-full lg:pr-6 flex-wrap mt-3">
                <p>
                Para que uma empresa possa receber a certificação FSC®, 
                vários requisitos precisam ser observados. Elaboramos aqui uma 
                relação de 5 passos primordiais que devem ser seguidos:
                <br /><br />
                <b className='text-lg'>1. Possuir Fornecedores Certificados</b>
                <br /><br />
                Para a certificação de cadeia de custódia, é imprescindível que a empresa possua 
                fornecedores de matéria-prima certificada. Se inicialmente a operação não possui 
                um fornecedor certificado pelo FSC, ela poderá indicar em seu processo de 
                certificação quais são os potenciais fornecedores certificados, lembrando que a 
                permissão para a utilização da marca do FSC, contudo, somente será possível após 
                a evidência de aquisição de materiais certificados. Outro ponto importante a 
                destacar é que as normas do FSC não proíbem uma empresa certificada de continuar 
                trabalhando com fornecedores não-certificados. 
                </p>
              </div>
              <div className='md:w-1/2 md:m-auto lg:m-0 w-full'>
                <img src="/blog/post3.jpg" alt="post1" className='w-full rounded-xl h-auto object-cover' />
              </div>
            </div>
            <div className='w-full mb-8 md:mb-4 mt-5'>
              <p>
              É necessário, entretanto, que o 
              sistema de gestão da cadeia de custódia esteja bem estruturado para identificar 
              e fazer a separação entre processos certificados e processos não-certificados.
              <br /><br />
              <b className='text-lg'>2. Implementar um sistema de gestão da Cadeia de Custódia FSC</b>
              <br /><br />
              A empresa candidata à certificação deverá se preparar para a certificação, adequando ou implementando um sistema de controle eficiente que garanta o cumprimento de todos os requisitos aplicáveis das normas do FSC para cadeia de custódia. É necessário definir os procedimentos para o controle e gestão do sistema de cadeia de custódia da organização, garantindo que os mesmos são adotados por todos os envolvidos no processo. Além disso, a empresa precisa desenvolver uma metodologia para rastrear todo o volume de material envolvido na produção certificada, demonstrando controles em relação à matéria-prima obtida, processos produtivos e produtos acabados.
              <br /><br />
              <b className='text-lg'>3. Estabelecer e implementar um plano de treinamento</b>
              <br /><br />
              A organização precisará desenvolver um plano de treinamento cobrindo todos os requisitos normativos aplicáveis, e implementá-lo no que diz respeito ao treinamento efetivo dos colaboradores envolvidos em cada etapa do processo de cadeia de custódia.
              <br /><br />
              <b className='text-lg'>4. Passar por auditoria de certificação</b>
              <br /><br />
              Após implementar o sistema de gestão da cadeia de custódia FSC conforme as normas aplicáveis, o empreendimento já estará apto a passar pela auditoria de certificação, que será realizada por uma entidade certificadora credenciada pelo FSC. O contato das certificadoras credenciadas no FSC Brasil pode ser acessado <span className='font-bold underline'><Link target='_blank' href="https://br.fsc.org/br-pt/certificacao/certificadoras">neste link</Link></span>.
              <br /><br />
              No contato inicial com a certificadora, a organização deverá preencher alguns formulários contendo informações sobre a sua atividade e sobre o seu sistema de gestão da cadeia de custódia, além de assinar a proposta de certificação para que seja feito o agendamento da auditoria.
              <br /><br />
              <b className='text-lg'>5. Aguardar a emissão do certificado</b>
              <br /><br />
              Após ser aprovada em auditoria, o próximo passo é aguardar a emissão do certificado e do código de licença para que possa utilizar o selo FSC e vender produtos como sendo certificados pelo FSC. Este prazo varia conforme a certificadora, e pode levar aproximadamente de 10 a 60 dias para ser emitido. Ao receber o número da certificação, a empresa conclui a etapa de obtenção da certificação FSC, e inicia uma nova etapa: a manutenção de sua certificação.
              <br /><br />
              A Rama Global acompanha os clientes em todas as etapas do processo de obtenção e manutenção da certificação FSC, de forma prática, rápida e eficiente.
              </p>
            </div>
        </div>
        <div className='text-center mb-10'>
          <CTAButton text='Solicite um Orçamento' />
        </div>
    </main>
  )
}

export default Post3