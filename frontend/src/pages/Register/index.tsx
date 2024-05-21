import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Conteiner, LogoContent } from './styles';
import logoImg from '../../assets/logo.svg';
import personalDataImg from '../../assets/personalData.svg';
import addressDataImg from '../../assets/addressData.svg';
import professionalDataImg from '../../assets/professionalData.svg';

interface ServerResponseRegister {}

const Register: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCEP] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [homephone, setHomephone] = useState('');
  const [field, setField] = useState('');
  const Add = [
    'Médico',
    'Enfermeiro',
    'Fonoaudiologo',
    'Técnico de Enfermagem',
  ].map((Add) => Add);
  const [crm, setCRM] = useState('');
  const [primary_specialty, setPrimarySpecialty] = useState('');
  const [secundary_specialty, setSecundarySpecialty] = useState('');

  interface ServerResponse {
    user: {
      id: string;
      name: string;
      avatar: string;
      field: string;
    };
    token: string;
  }

  async function handleRegister(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
      field,
      crm,
      primary_specialty,
      secundary_specialty,
    };
    try {
      await api.post('/user', data);
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
      history.push('/uploads');
    } catch (err) {
      alert('Erro no cadastro tente novamente');
    }
  }

  return (
    <>
      <LogoContent>
        <img className="logo" src={logoImg} alt="Salvus" />
      </LogoContent>
      <Conteiner>
        <Link to="/" className="btn-secundary">
          Voltar
        </Link>
        <h1>Registro</h1>
        <form onSubmit={handleRegister}>
          <hr />
          <div className="content">
            <div>
              <h5>Dados Pessoais</h5>
              <input
                id="name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo *"
                required
              />
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                required
              />
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha *"
                required
              />
              <input
                value={cpf}
                type="text"
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF *"
                required
              />
              <input
                value={dateofbirth}
                type="date"
                onChange={(e) => setDateofbirth(e.target.value)}
                placeholder="Data de nascimento *"
                required
              />
              <input
                value={cellphone}
                type="text"
                onChange={(e) => setCellphone(e.target.value)}
                placeholder="Telefone celular *"
                required
              />
              <input
                value={homephone}
                type="text"
                onChange={(e) => setHomephone(e.target.value)}
                placeholder="Telefone residencial"
              />
            </div>
            <img src={personalDataImg} alt="Personal Data" />
          </div>
          <hr />
          <div className="content">
            <div>
              <h5>Endereço Residencial</h5>
              <input
                value={cep}
                type="text"
                onChange={(e) => setCEP(e.target.value)}
                placeholder="CEP *"
                required
              />
              <input
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Endereço *"
                required
              />
              <input
                value={city}
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade *"
                required
              />
              <input
                value={state}
                type="text"
                onChange={(e) => setState(e.target.value)}
                placeholder="Estado *"
                required
              />
            </div>
            <img src={addressDataImg} alt="Personal Data" />
          </div>
          <hr />
          <div className="content">
            <div>
              <h5>Dados Pessoais</h5>
              <select onChange={(e) => setField(e.target.value)} required>
                <option value="">Selecione uma Área</option>
                {Add.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
              <input
                value={crm}
                type="text"
                onChange={(e) => setCRM(e.target.value)}
                placeholder="CRM *"
                required
              />
              <input
                value={primary_specialty}
                type="text"
                onChange={(e) => setPrimarySpecialty(e.target.value)}
                placeholder="Especialidade primária *"
                required
              />
              <input
                value={secundary_specialty}
                type="text"
                onChange={(e) => setSecundarySpecialty(e.target.value)}
                placeholder="Especialidade secundária"
              />
            </div>
            <img src={professionalDataImg} alt="Personal Data" />
          </div>
          <button type="submit" className="btn-primary">
            Cadastrar
          </button>
        </form>
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

export default Register;
