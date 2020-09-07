import React from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';

// as cores utilizadas no projeto
const colors = {
  green: '#1DB954',
  light: '#fff',
  dark: '#212121',
  background: '#f0f0f0',
};

function MyApp({ Component, pageProps }) {
  // passando as props para o componente (página) chamado
  return <Component {...pageProps} colors={colors} />;
}

export default MyApp;
