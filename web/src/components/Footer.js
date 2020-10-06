import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/frothys-logo.svg';
import SocialIcons from '../components/SocialIcons';
import Hours from './Hours';
import Address from './Address';

export default function Footer () {
  return (
    <StyledFooter>
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
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--black);
  padding-bottom: 15px;
  color: var(--white);

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

    > * {
      margin-top: 4rem;
    }
  }

  .lowrow {
    margin-top: 4rem;
    text-align: center;
    color: grey;
    font-size: 1.2rem;

    a {
      color: darkgrey;
    }

    .copyright {
      color: var(--white);
      margin-top: 2rem;
    }
  }

  
`