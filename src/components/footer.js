import React from 'react';
import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import {navigate} from 'gatsby';

const Box = styled.div`
    padding: 5% 2.5%;
    background: black;
    bottom: 0;
    width: 100%;

    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    background: black;

`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;

const FooterLink = styled.p`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: green;
        transition: 200ms ease-in;
        cursor: pointer;
    }
`;


const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;


export function Footer() {
  return (
    <Box>

    <FooterContainer>

      <Row>
      <Column>
          <Heading>About Us</Heading>
          <FooterLink onClick={()=>navigate('/location')}>
              Location
          </FooterLink>
      </Column>
      <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">
              Admin
          </FooterLink>
          <FooterLink href="#">
              Email
          </FooterLink>
                        
      </Column>
      <Column>
          <Heading>Social Media</Heading>
            <FooterLink href="#">
                <i className="fab fa-instagram">
                    <span
                        style={{
                          marginLeft: "10px",
                        }}
                        >
                        Instagram
                    </span>
                </i>
            </FooterLink>
        </Column>
      </Row>
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
  </FooterContainer>
  </Box>
  );
}
