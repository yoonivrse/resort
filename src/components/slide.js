import React from 'react';
import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';

export function Slide(props) {
  const { title, children, id } = props;
  return (
    <div
      id={id}
      css={css`
        text-align: center;
        background-color: white;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid #dee2e6;
      

        h2 {
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 23px;
        }
      `}
    >
      <Container>
        <h2>{title}</h2>
        <div>{children}</div>
      </Container>
    </div>
  );
}
