import React from 'react';
import BudgetForm from '@/components/BudgetForm';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const RequestQuote = () => {
  return (
    <main className="m-auto">
        <NavBar />
        <div className="m-auto mt-3 lg:mt-6 w-full p-6 lg:w-1/2">
            <h1 className='lg:text-4xl md:text-3xl  text-center mb-10 text-2xl'>
              Solicitar Orçamento
            </h1>
            <BudgetForm />
        </div>
        <Footer />
    </main>
  )
}

export default RequestQuote