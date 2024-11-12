import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contrateme.css';

const Contrateme = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página
    
    // Suas credenciais e IDs do EmailJS
    const serviceId = 'service_1uyrgti';
    const templateId = 'template_pqm9ygn';
    const publicKey = 'iP8CuL01sXKQYU0-1';
    
    // Parâmetros dinâmicos para o template
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: name,
      message: message,
    };

    // Enviar o e-mail usando o EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email enviado com sucesso!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Erro ao enviar o email:', error);
      });
  };

  return (
    <div className="contratameprincipal">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <label>Email</label>
        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label>Message</label>
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Enviar email</button>
      </form>
    </div>
  );
};

export default Contrateme;
