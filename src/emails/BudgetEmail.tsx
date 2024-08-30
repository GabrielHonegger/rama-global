import { Heading, Html, Text, Img } from "@react-email/components";
import * as React from "react";

type BudgetEmailProps = {
  name: string,
  email: string,
  phone: string,
  certificate: string,
  company: string,
  cnpj: string,
  employeesNumber: string,
  address: string,
  city: string,
  state: string,
  branches: string,
  anotherCertificate: string,
  outsource: string,
  message: string
}

export default function BudgetEmail({ name, email, phone, certificate, company, cnpj, employeesNumber, address, city, state, 
  branches, anotherCertificate, outsource, message
}: BudgetEmailProps) {
  const CustomTextStyle = {
    fontFamily: "'Arial', sans-serif",
    fontSize: '16px',
    color: '#333'
  }

  const MessageStyle = {
    ...CustomTextStyle,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
  }

  const CustomHeadingStyle = {
    fontFamily: "'Arial', sans-serif"
  }

  return (
    <Html lang="pt">
      <Heading style={CustomHeadingStyle}>Informações da Solicitação</Heading>
      <Text style={CustomTextStyle}><b>Nome</b>: {name}</Text>
      <Text style={CustomTextStyle}><b>Email</b>: {email}</Text>
      <Text style={CustomTextStyle}><b>Telefone</b>: {phone}</Text>
      { certificate && <Text style={CustomTextStyle}><b>Certificado</b>: {certificate}</Text> }
      { company && <Text style={CustomTextStyle}><b>Nome da Empresa</b>: {company}</Text> }
      { cnpj && <Text style={CustomTextStyle}><b>CNPJ</b>: {cnpj}</Text> }
      { employeesNumber && <Text style={CustomTextStyle}><b>Número de Funcionários</b>: {employeesNumber}</Text> }
      { address && <Text style={CustomTextStyle}><b>Endereço</b>: {address}</Text> }
      { city && <Text style={CustomTextStyle}><b>Cidade</b>: {city}</Text> }
      { state && <Text style={CustomTextStyle}><b>Estado</b>: {state}</Text> }
      <Text style={CustomTextStyle}><b>Deseja certificar filiais?</b> {branches}</Text>
      <Text style={CustomTextStyle}><b>Possui alguma outra certificação?</b> {anotherCertificate}</Text>
      <Text style={CustomTextStyle}><b>Terceiriza alguma etapa da produção?</b> {outsource}</Text>
      { message && <Text style={CustomTextStyle}><b>Mensagem</b>:</Text> }
      { message && <Text style={MessageStyle}>{message}</Text> }
    </Html>
  );
}
