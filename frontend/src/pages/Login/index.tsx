import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Text, Conteiner, Form } from './styles';
import { LogoContent } from '../Register/styles';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  interface ServerResponse {
    user: {
      id: string;
      name: string;
      avatar: string;
      field: string;
    };
    token: string;
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    try {
      const response = await api.post<ServerResponse>('session', {
        email,
        password,
      });
      localStorage.clear();
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem(
        'avatar',
        `http://localhost:3333/files/${response.data.user.avatar}`,
      );
      localStorage.setItem('field', response.data.user.field);
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (err) {
      alert('Falha no login tente novamente.');
    }
  }

  return (
    <>
      <LogoContent>
        <img className="logo" src={logoImg} alt="Salvus" />
      </LogoContent>
      <Conteiner>
        <Text>
          <h1>Bem vindo</h1>
          <h3>
            Conectando a <u>Saúde</u> para melhorar a <u>Vida</u> das pessoas.
          </h3>
          <p>
            Faça parte dessa rede de profissionais para que juntos possamos
            melhorar o cuidado, satisfação e qualidade de vida de quem mais
            precisa.
          </p>
          <p>
            Através do sistema Salvus podemos direcionar profissionais em
            diferentes localidades do país, de forma rápida e segura.
          </p>
        </Text>
        <Form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button className="btn-primary" type="submit">
            Login
          </button>
          <a className="forgotPass" href="/">
            Esquece a senha?
          </a>
          <span>Crie sua conta já</span>
          <Link className="btn-secundary" to="/register">
            Criar Conta
          </Link>
        </Form>
      </Conteiner>
      <footer>
        <hr />
        <div>
          <span>Make by: Álefe Cruz</span>
          <span>© 2020</span>
        </div>
      </footer>
    </>
  );
};

export default Login;
