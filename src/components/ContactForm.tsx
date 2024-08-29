'use client'

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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
    name: z.string().min(2, {
        message: "Nome precisa conter pelo menos 2 caracteres"
    }).max(30, {
        message: "Digite apenas o primeiro nome"
    }),
    email: z.string().email({
        message: "Insira um email válido"
    }),
    message: z.string().min(3, {
        message: "Digite sua mensagem"
    }).max(500, {
        message: "Mensagem pode conter no máximo 500 caracteres"
    })
  })

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: ""
        },
    })

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
      const {name, email, message } = values;

      try {
        await fetch('/api/message', {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            message: message
          })
        })
        console.log(values)
        setSuccessMessage('Mensagem enviada com sucesso! Você receberá uma resposta o mais breve possível.')
        form.reset()
      } catch (error) {
        console.error('Failed to submit the form', error);
        setErrorMessage('Ocorreu um erro ao enviar a solicitação.');
      }
    }

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="lg:space-y-6 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Nome</FormLabel>
                  <FormControl>
                    <Input className='text-md py-3' placeholder="ex: Felipe" {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-md'>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea className='text-md' rows={5} placeholder="ex: Olá, gostaria de saber
                    como funciona o processo de consultoria FSC." {...field} />
                  </FormControl>
                  <FormDescription>
                    
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='border-2 font-light border-slate-950 md:text-md text-sm  font-inter rounded-full hover:bg-white hover:text-slate-950 bg-slate-950 ml-auto py-[10px] text-white transition duration-200'>Enviar Mensagem</Button>
            {successMessage && <p  style={{ marginTop: '5px', marginBlockStart: '0 !important' }} className='text-green-600'>{successMessage}</p>}
            {errorMessage && <p  style={{ marginTop: '5px', marginBlockStart: '0 !important' }} className='text-red-500'>{errorMessage}</p>}
          </form>
        </Form>
      )
}