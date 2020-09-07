import React, { useRef } from 'react';
import {
  Image,
  Icon,
  Card,
  Button,
  Sticky,
  Ref,
  Rail,
} from 'semantic-ui-react';
import Link from 'next/link';

// Componente para exibição do user da issue
const User = ({ colors, user }) => {
  // ref utilizada para controle do sticky effect
  const sitckyRef = useRef();

  return (
    <Ref innerRef={sitckyRef}>
      <Rail position="left" className="rail">
        <Sticky offset={10} context={sitckyRef}>
          <Card className="card">
            <Card.Content
              className="flexColumn"
              style={{ alignItems: 'center' }}
            >
              <Image
                src={user?.avatar_url}
                size="small"
                circular
                className="cardContentImage"
              />
              <strong>{`@ ${user?.login}`}</strong>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {/* Redirecionando para o github do user */}
                <Link href={user?.url}>
                  <Button
                    style={{
                      backgroundColor: colors.dark,
                      color: colors.light,
                      width: '100%',
                    }}
                  >
                    <Icon style={{ color: colors.light }} name="github" />
                    GitHub
                  </Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
          {/* Redirecionando para a home */}
          <Link href="/">
            <Button
              icon="arrow left"
              content="Back"
              style={{
                width: '100%',
                backgroundColor: colors.green,
                color: colors.light,
              }}
            />
          </Link>
        </Sticky>
      </Rail>
    </Ref>
  );
};

export default User;
