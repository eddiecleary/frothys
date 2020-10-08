import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import bg from '../assets/images/fruits-bg.svg';

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

const SiteContainer = styled.div`
  padding: 15px;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;

  @media (min-width: 768px) {
    width: 89%;
    max-width: 80rem;
    margin-top: 35px;
    border: 3px dashed var(--black);
    border-bottom: 0;
    padding: 0;
    overflow: hidden;
    z-index: 7;
    box-sizing: border-box;
    
    &::before {
      content: '';
      background-image: url(${bg});
      background-repeat: repeat;
      background-size: 150px;
      filter: invert(1);
      position: absolute;
      top: -35px;
      bottom: 0px;
      right: 0px;
      left: 0px;
      opacity: 0.55;

    }
  }

  @media (min-width: 992px) {
    max-width: 90rem;
  }

  @media (min-width: 1200px) {
    max-width: 105rem;
  }
`;