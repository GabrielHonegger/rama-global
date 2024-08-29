import { Heading, Html, Text, Img } from "@react-email/components";
import * as React from "react";

type MessageProps = {
  name: string,
  email: string,
  message: string
}

export default function Message({ name, email, message }: MessageProps) {
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
      <Heading style={CustomHeadingStyle}>Informações do Contato</Heading>
      <Text style={CustomTextStyle}><b>Nome</b>: {name}</Text>
      <Text style={CustomTextStyle}><b>Email</b>: {email}</Text>
      <Text style={CustomTextStyle}><b>Mensagem</b>:</Text>
      <Text style={MessageStyle}>{message}</Text>
    </Html>
  );
}
