import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/frothys-logo.svg';
import SocialIcons from '../components/SocialIcons';
import Hours from './Hours';
import Address from './Address';
import bg from '../assets/images/fruits-bg.svg';

export default function Footer () {
  return (
    <StyledFooter>
      <div className="footerbg"></div>
      <div className="innerborder">
        <div className="toprow">
          <a href="#" className="logo"><img src={Logo} alt="Frothy's Logo"/><h1>Frothy's</h1></a>
          <SocialIcons color="var(--white)"/>
        </div>
        <div className="midrow">
          <Hours />
          <Address />
        </div>
        <div className="lowrow">
          <p>Icons from <a href="https://www.flaticon.com/authors/monkik">monkik</a> @ <a href="https://www.flaticon.com">flaticon.com</a></p>
          <p>Icons from <a href="https://www.flaticon.com/authors/freepik">freepik</a> @ <a href="https://www.flaticon.com">flaticon.com</a></p>
          <p className="copyright">Copyright Eddie Cleary &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--black);
  color: var(--white);
  position: relative;
  width: 100%;

  a {
    color: var(--white);
  }

  .toprow {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;

    .logo {
      display: flex;
      align-items: center;
      max-width: 8rem; 
      font-size: 3rem;
      transform: translateX(-50%);

      h1 {
        margin-top: 0.7rem;
      }
    }

    .social-icons {
      margin-top: 4rem;
    }
  }

  .midrow {
    position: relative;

    > * {
      margin-top: 4rem;
    }
  }

  .lowrow {
    margin-top: 4rem;
    text-align: center;
    color: grey;
    font-size: 1.2rem;
    position: relative;

    a {
      color: darkgrey;
    }

    .copyright {
      color: var(--white);
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 4.1rem;

    .footerbg {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      background-image: url(${bg});
      background-repeat: repeat;
      background-size: 150px;
      opacity: 1;
      width: 100%;
      max-width: 100%;
    }

    .innerborder {
      position: relative;
      /* left: calc((100vw - 686px) / 2);
      right: calc((100vw - 686px) / 2); */
      margin-left: 4.1rem;
      margin-right: 4.1rem;
      padding-bottom: 35px;
      top: 0;
      bottom: 35px;
      max-width: 100%;         
      border: 3px dashed white;
      border-top: 0;
      background-color: var(--black);
      opacity: 1;
      padding: 0 3rem;
    }
  }

  .toprow {
    flex-direction: row;
    justify-content: space-between;

    .logo {
      transform: initial;
    }
    
    .social-icons {
      margin: 0;
    }
  }

  .midrow {
    display: flex;
    justify-content: center;
    padding: 3rem 0;

    > * {
      flex-basis: 50%;
    }
  }
`