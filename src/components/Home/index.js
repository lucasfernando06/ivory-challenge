import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Loading from '../Loader';
import api from '../../services/api';

// opções do header da tabela
const header = [
  {
    id: 1,
    text: 'Issue Number',
    width: 2,
    position: 'center',
  },
  {
    id: 2,
    text: 'Title',
  },
  {
    id: 3,
    text: 'Created At',
    width: 2,
  },
  {
    id: 4,
    text: 'Updated At',
    width: 2,
  },
  {
    id: 5,
    text: 'Labels',
    width: 3,
  },
  {
    id: 6,
    text: 'State',
  },
  {
    id: 7,
    text: 'Info',
  },
];

const Home = ({ colors }) => {
  const [itens, setItens] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // requisição única para obter os dados da API
  useEffect(() => {
    const fetch = async () => {
      const response = await api
        .get('/issues')
        .catch(() => setIsLoading(false));
      setItens(response?.data || []);
      setIsLoading(false);
    };

    fetch();
  }, []);

  // exibe a tabela apenas depois de obter os dados
  return isLoading ? (
    <Loading colors={colors} />
  ) : (
    <Table colors={colors} header={header} itens={itens} />
  );
};

export default Home;
