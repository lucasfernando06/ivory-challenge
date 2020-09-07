import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import api from '../../../services/api';
import goHome from '../../../utils/goHome';
import Page from '../../../components/Page';
import User from '../../../Issue/User';
import Text from '../../../Issue/Text';

const IssueData = ({ colors, data }) => {
  // convertendo a string formatada em objeto
  const issue = data ? JSON.parse(data) : {};

  return (
    <Page title={`Issue ${issue.id}`}>
      <Container style={{ padding: '60px 0' }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column mobile={16} tablet={16} computer={5}>
              <User colors={colors} user={issue?.user} />
            </Grid.Column>
            <Grid.Column mobile={16} table={16} computer={11}>
              <Text issue={issue} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Page>
  );
};

// obtendo os dados da issue pelo server side, então a página será carregada após o retorno do método
export async function getServerSideProps(ctx) {
  const { params } = ctx;

  const response = await api
    .get(`/issues/${params?.id}`)
    .catch(() => goHome(ctx.res));

  // passando os dados em forma de string no padrão JSON
  return {
    props: { data: JSON.stringify(response?.data || {}) },
  };
}

export default IssueData;
