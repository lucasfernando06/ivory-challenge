// Função para voltar para a home no Server side
const goHome = (res) => {
  res?.writeHead(302, {
    Location: 'http://localhost:3000',
  });

  res?.end();
};

export default goHome;
