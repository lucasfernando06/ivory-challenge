import React, { useState } from 'react';
import {
  Icon,
  Label,
  Table,
  Pagination,
  Container,
  Button,
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Date from '../../../utils/moment';

const pageSize = 5;

// a tabela poderia ser genérica, mas como só temos uma no projeto, está de forma direta
const TablePagination = ({ colors, header, itens }) => {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [loadingButtonId, setSoadingButtonId] = useState(null);

  // exibindo os itens com filtro, para utilizar paginação
  const renderItens = () => {
    return itens?.slice((page - 1) * pageSize, page * pageSize);
  };

  // exibindo os labels em formato de 'label'
  const renderLabels = (labels) => {
    return labels?.map((label) => {
      return (
        <Label key={label.id} className="label">
          <Icon
            name="circle"
            style={{
              color: label.color === 'e7e7e7' ? colors.dark : `#${label.color}`,
            }}
          />
          {label.name}
        </Label>
      );
    });
  };

  // exibindo o header que criamos no componente 'Home'
  const renderHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          {header?.map((item) => (
            <Table.HeaderCell
              key={item.id}
              textAlign={item?.position}
              width={item?.width}
            >
              {item.text}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
    );
  };

  // exibindo os estados em forma de ícone
  const renderState = (data) => {
    const state = {
      open: <Icon className="marginSideAuto" name="lock open" />,
      closed: <Icon className="marginSideAuto" name="lock" />,
    };

    return <Label>{state[data]}</Label>;
  };

  // colocando loading no button e redirecionando
  const checkRedirect = (id) => {
    setSoadingButtonId(id);
    router.push(`/issue/[id]`, `/issue/${id}`);
  };

  // exibindo o botão de redirecionamento
  const renderCheck = (id) => {
    return (
      <Button
        onClick={() => checkRedirect(id)}
        loading={id === loadingButtonId}
        style={{
          background: colors.green,
          color: colors.light,
        }}
      >
        Check
      </Button>
    );
  };

  // construindo o corpo da tabela com seus devidos campos
  const renderBody = () => {
    return (
      <Table.Body>
        {renderItens()?.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell textAlign="center">
              <strong>{item?.number}</strong>
            </Table.Cell>
            <Table.Cell>{item?.title}</Table.Cell>
            <Table.Cell>{Date(item?.created_at)}</Table.Cell>
            <Table.Cell>{Date(item?.updated_at)}</Table.Cell>
            <Table.Cell>{renderLabels(item?.labels)}</Table.Cell>
            <Table.Cell>{renderState(item?.state)}</Table.Cell>
            <Table.Cell>{renderCheck(item?.number)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  };

  // event para alteração da página
  const handleChangePage = (event, obj) => {
    event.preventDefault();
    setPage(obj?.activePage);
  };

  return (
    <Container
      className="flexColumn"
      style={{ justifyContent: 'center', minHeight: '100vh' }}
    >
      <section className="tableHeader">
        <Icon name="github" size="huge" />
        <strong>LF - React Project Issues</strong>
      </section>
      <section className="tableContainer">
        <Table celled striped style={{ margin: 0 }}>
          {renderHeader()}
          {renderBody()}
        </Table>
      </section>
      <section className="tablePagination">
        <Pagination
          activePage={page}
          onPageChange={handleChangePage}
          totalPages={Math.ceil(itens.length / pageSize)}
        />
      </section>
    </Container>
  );
};

export default TablePagination;
