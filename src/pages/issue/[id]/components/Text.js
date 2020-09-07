import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import Date from '../../../../utils/moment';

// Componente para exibição dos dados simples da issue. Contém markdown.
function Text({ issue }) {
  return (
    <Card className="card">
      <Card.Content className="flexColumn">
        <h1>{issue.title}</h1>
        <span style={{ marginTop: 10 }}>
          {`• • Updated at: ${Date(issue.updated_at)} • •`}
        </span>
        <Divider style={{ margin: '30px 0' }} />
        <div className="markdownContainer">
          <ReactMarkdown source={issue.body} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default Text;
