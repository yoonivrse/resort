import React from 'react';
import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';

export function Footer() {
  return (
    <div
      css={css`
        color: white;
        background-color: black;
        text-align: center;
      `}
    >
      <Container
        css={css`
          padding: 36px 0;
        `}
      >
        © 2024 Borneo Sea Life Resort
      </Container>
    </div>
  );
}
