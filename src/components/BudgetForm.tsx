'use client'

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import DOMPurify from 'dompurify';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string()
        .min(1, { message: "Nome é obrigatório" })
        .min(2, { message: "Nome precisa conter pelo menos 2 caracteres" })
        .max(30, { message: "Digite apenas o primeiro nome" }),

    email: z.string()
        .min(1, { message: "Email é obrigatório" })
        .email({ message: "Insira um email válido" }),
        
    phone: z.string()
        .min(1, { message: "Telefone é obrigatório" }),
    certificate: z.enum(['FSC', 'PEFC', "ESG", "Rótulo Ecológico", "Mais de Um Certificado", "Não Sei", ""]),
    company: z.string(),
    cnpj: z.string(),
    employeesNumber: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    branches: z.enum(['Sim', 'Não', "Sem Resposta"]),
    anotherCertificate: z.enum(['Sim', 'Não', "Sem Resposta"]),
    outsource: z.enum(['Sim', 'Não', "Sem Resposta"]),
    message: z.string().max(500, {
        message: "Mensagem pode conter no máximo 500 caracteres"
    })
  })

function formatPhoneNumber(value: string): string {
  if (!value) return value;
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length < 3) return phoneNumber;
  if (phoneNumber.length < 8) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
}

function formatCNPJ(value: string): string {
  if (!value) return value;
  const cnpj = value.replace(/\D/g, '');
  if (cnpj.length <= 2) return cnpj;
  if (cnpj.length <= 5) return `${cnpj.slice(0, 2)}.${cnpj.slice(2)}`;
  if (cnpj.length <= 8) return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5)}`;
  if (cnpj.length <= 12) return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8)}`;
  return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`;
}

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
          certificate: "",
          company: "",
          cnpj: "",
          employeesNumber: "",
          address: "",
          city: "",
          state: "",
          branches: "Sem Resposta",
          anotherCertificate: "Sem Resposta",
          outsource: "Sem Resposta",
          message: ""
        },
    })

    const [successMessage, setSuccessMessage] = useState("");
    
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(values: z.infer<typeof formSchema>) {
      const { name, email, phone, certificate,company, cnpj, employeesNumber, address, city, state, 
        branches, anotherCertificate, outsource, message } = values;

      try {
        await fetch('/api/budget', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: DOMPurify.sanitize(name),
            email: DOMPurify.sanitize(email),
            phone: DOMPurify.sanitize(phone),
            certificate: DOMPurify.sanitize(certificate),
            company: DOMPurify.sanitize(company),
            cnpj: DOMPurify.sanitize(cnpj),
            employeesNumber: DOMPurify.sanitize(employeesNumber),
            address: DOMPurify.sanitize(address),
            city: DOMPurify.sanitize(city),
            state: DOMPurify.sanitize(state),
            branches: DOMPurify.sanitize(branches),
            anotherCertificate: DOMPurify.sanitize(anotherCertificate),
            outsource: DOMPurify.sanitize(outsource),
            message: DOMPurify.sanitize(message)
          })
        })
        setSuccessMessage('Solicitação enviada com sucesso! Você receberá um retorno o mais breve possível.')

        form.reset()
      } catch (error) {
        setErrorMessage('Ocorreu um erro ao enviar a solicitação.');
      }
    }

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="lg:space-y-5 space-y-8">
            {/* Nome */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Nome</FormLabel>
                  <FormControl>
                    <Input className='text-md py-3' placeholder='ex: Felipe' {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Email</FormLabel>
                  <FormControl>
                    <Input className='text-md' placeholder="ex: felipe@exemplo.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Telefone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
              <FormItem>
                <FormLabel className='text-md'>Telefone</FormLabel>
                <FormControl>
                  <Input
                    className='text-md'
                    value={formatPhoneNumber(field.value)}
                    onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
            />
            {/* Certificado */}
            <FormField
              control={form.control}
              name="certificate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Escolha o Certificado Desejado:</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-[300px]">
                      <SelectValue placeholder="Selecione um Certificado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Certificados</SelectLabel>
                        <SelectItem value="FSC">FSC</SelectItem>
                        <SelectItem value="PEFC">PEFC</SelectItem>
                        <SelectItem value="ESG">ESG</SelectItem>
                        <SelectItem value="Rotulo-Ecologico">Rótulo Ecológico</SelectItem>
                        <SelectItem value="Mais-de-Um">Mais de Um Certificado</SelectItem>
                        <SelectItem value="Nao-Sei">Não Sei</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Empresa */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Empresa</FormLabel>
                  <FormControl>
                    <Input className='text-md' {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* CNPJ */}
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
              <FormItem>
                <FormLabel className='text-md'>CNPJ</FormLabel>
                <FormControl>
                  <Input
                    className='text-md'
                    placeholder="XX.XXX.XXX/000X-XX"
                    value={formatCNPJ(field.value)}
                    onChange={(e) => field.onChange(formatCNPJ(e.target.value))}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
              )}
            />
            {/* N° de Colaboradores: */}
            <FormField
              control={form.control}
              name="employeesNumber"
              render={({ field }) => (
                <FormItem className='w-1/2 lg:w-1/3'>
                  <FormLabel className='text-md'>N° de Colaboradores</FormLabel>
                  <FormControl>
                    <Input className='text-md' placeholder="ex: 35" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Endereço */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Endereço</FormLabel>
                  <FormControl>
                    <Input className='text-md' placeholder="ex: Rua das Flores, 123 Bairro Jardim Primavera" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Cidade */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Cidade</FormLabel>
                  <FormControl>
                    <Input className='text-md' placeholder="ex: São Paulo" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Estado */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Estado</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione um Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Estados</SelectLabel>
                        <SelectItem value="Acre">AC</SelectItem>
                        <SelectItem value="Alagoas">AL</SelectItem>
                        <SelectItem value="Amapá">AP</SelectItem>
                        <SelectItem value="Amazonas">AM</SelectItem>
                        <SelectItem value="Bahia">BA</SelectItem>
                        <SelectItem value="Ceará">CE</SelectItem>
                        <SelectItem value="Distrito Federal">DF</SelectItem>
                        <SelectItem value="Espírito Santo">ES</SelectItem>
                        <SelectItem value="Goiás">GO</SelectItem>
                        <SelectItem value="Maranhão">MA</SelectItem>
                        <SelectItem value="Mato Grosso">MT</SelectItem>
                        <SelectItem value="Mato Grosso do Sul">MS</SelectItem>
                        <SelectItem value="Minas Gerais">MG</SelectItem>
                        <SelectItem value="Pará">PA</SelectItem>
                        <SelectItem value="Paraíba">PB</SelectItem>
                        <SelectItem value="Paraná">PR</SelectItem>
                        <SelectItem value="Pernambuco">PE</SelectItem>
                        <SelectItem value="Piauí">PI</SelectItem>
                        <SelectItem value="Rio de Janeiro">RJ</SelectItem>
                        <SelectItem value="Rio Grande do Norte">RN</SelectItem>
                        <SelectItem value="Rio Grande do Sul">RS</SelectItem>
                        <SelectItem value="Rondônia">RO</SelectItem>
                        <SelectItem value="Roraima">RR</SelectItem>
                        <SelectItem value="Santa Catarina">SC</SelectItem>
                        <SelectItem value="São Paulo">SP</SelectItem>
                        <SelectItem value="Sergipe">SE</SelectItem>
                        <SelectItem value="Tocantins">TO</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Deseja certificar filiais? */}
            <FormField
              control={form.control}
              name="branches"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Deseja certificar filiais?</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      className='flex space-x-4'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Sim" id="r2" />
                        <Label htmlFor="r2">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Não" id="r3" />
                        <Label htmlFor="r3">Não</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Possui alguma outra certificação? */}
            <FormField
              control={form.control}
              name="anotherCertificate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Possui alguma outra certificação?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Sim" id="r2" />
                        <Label htmlFor="r2">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Não" id="r3" />
                        <Label htmlFor="r3">Não</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Terceiriza alguma etapa da produção? */}
            <FormField
              control={form.control}
              name="outsource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Terceiriza alguma etapa da produção?</FormLabel>
                  <FormControl>
                    <RadioGroup 
                      className='flex space-x-4'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Sim" id="r2" />
                        <Label htmlFor="r2">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Não" id="r3" />
                        <Label htmlFor="r3">Não</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Por favor utilize este espaço para inserir informações que julgue relevantes:</FormLabel>
                  <FormControl>
                    <Textarea className='text-md' rows={5} {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='border-2 md:text-lg text-md border-slate-950 font-inter rounded-full hover:bg-white hover:text-slate-950 bg-slate-950 ml-auto md:p-6 p-5 font-thin text-white transition duration-200'>Enviar Solicitação</Button>
            {successMessage && <p  style={{ marginTop: '5px', marginBlockStart: '0 !important' }} className='text-green-600'>{successMessage}</p>}
            {errorMessage && <p  style={{ marginTop: '5px', marginBlockStart: '0 !important' }} className='text-red-500'>{errorMessage}</p>}
          </form>
        </Form>
      )
}