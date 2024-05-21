import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import FooterBar from '../../components/Footerbar';
import BTNuser from '../../assets/BTNuser.svg';
import { Main, Card, Graph } from './styles';

import Chart from '../../components/Chart';

interface ServerResponse {
  amountByField: Array<AmountByField>;
  registerAmount: number;
}

interface AmountByField {
  name: string;
  value: number;
}
const Dashboard: React.FC = () => {
  const [amountsField, setAmountField] = useState([
    {
      name: 'Técnico de Enfermagem',
      value: 0,
    },
    {
      name: 'Médico',
      value: 0,
    },
    {
      name: 'Enfermeiro',
      value: 0,
    },
    {
      name: 'Fonoaudiologo',
      value: 0,
    },
  ]);
  const [registers, setRegisters] = useState(0);
  useEffect(() => {
    api.get<ServerResponse>('info').then((response) => {
      // setAmountByField(response);
      setRegisters(response.data.registerAmount);
      setAmountField(response.data.amountByField);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <Topbar />
        <Card>
          <h4>Total de profissionais cadastrados</h4>
          <div>
            <img src={BTNuser} alt="users" />
            <h1>{registers}</h1>
          </div>
        </Card>
        {amountsField.map((value) => (
          <Card key={value.name}>
            <h4>{value.name}</h4>
            <div>
              <h1>{value.value}</h1>
            </div>
          </Card>
        ))}
      </Main>
      <Graph>
        <div>
          <h4>Profissionais x Categoria</h4>
          <div className="conteiner">
            <ul>
              {amountsField.map((value) => (
                <li key={value.name}>
                  <h3>{value.name}</h3>
                  <span>{value.value}</span>
                </li>
              ))}
            </ul>
            <div className="grafh">
              <Chart amount={amountsField} />
            </div>
          </div>
        </div>
      </Graph>
      <FooterBar />
    </>
  );
};

export default Dashboard;
