import React from 'react';
import Head from 'next/head';

// Componente para exibição personalizada da página utilizando o Next (title, no caso), melhorando SEO
const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
