import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import bg from '../assets/images/fruits-bg.png';

const SiteContainer = styled.div`
  padding: 15px;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;

  @media (min-width: 768px) {
    max-width: 680px;
    margin-top: 35px;
    border: 3px dashed var(--black);
    padding: 0;
    
    &::before {
      content: '';
      background-image: url(${bg});
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      opacity: 0.15;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteContainer>
        <Header />
        {children}
      </SiteContainer>
      <Footer />
    </>
  )
}