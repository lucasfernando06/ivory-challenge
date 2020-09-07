import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

// Loader simples para exibição
const Loading = ({ colors }) => {
  return (
    <Dimmer active inverted style={{ backgroundColor: colors.background }}>
      <Loader size="large" />
    </Dimmer>
  );
};

export default Loading;
