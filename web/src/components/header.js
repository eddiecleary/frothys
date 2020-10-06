import React, {useState} from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { createGlobalStyle } from 'styled-components';
import Logo from '../assets/images/frothys-logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import { scrollTrigger } from 'gsap';
import SocialIcons from '../components/SocialIcons';

export default function Header () {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && <GlobalStylesNavToggle />}
      <HeaderStyles className={isOpen ? 'open' : ''}>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Location</a>
          <a href="#" className="logo"><img src={Logo} alt="Frothy's Logo"/><h1>Frothy'<span>s</span></h1></a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <div className="bgOverlay"></div>
          <a href="#" className="btn white">Delivery Company</a>
          <a href="#" className="btn black">Delivery Company</a>
          <SocialIcons />
          <Hamburger toggled={isOpen} toggle={setOpen} size={44} duration={0.2} label="Show menu" rounded color={isOpen? 'var(--white)' : 'var(--pink)'}/>
        </nav>
      </HeaderStyles>
    </>
  )
}

// Only toggles on when nav is open, prevents body from scrolling while nav is open
const GlobalStylesNavToggle = createGlobalStyle`
  body {
    height: 100vh;
    overflow-y: hidden;
  }
`

const HeaderStyles = styled.header`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (min-width: 768px) {
    background-color: var(--white);
    left: initial;
    right: initial;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    padding-top: 15px;
  }

  /* Unopened Nav Styled */
  nav {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 10vw;
    padding-right: 10vw;
    height: 62px;

    a {
      opacity: 0;
      display: none;
      font-size: 2.2rem;
    }

    .logo {
      opacity: 1;
      display: block;
      max-width: 6rem; 
      position: absolute;
      display: flex;
      font-size: 1.5rem;
      align-items: center;
      left: 10vw;
      
      /* Creates text "Frothy's" span used for spacing the "s" at end of Frothy's */
      h1 {
        margin-top: 3px;
        margin-left: 0.5rem;
        color: var(--red);
        letter-spacing: 2px;

        span {
          margin-left: -3px;
        }
      }

      img {
        width: 100%;
      }
    }

    .social-icons {
      display: none;
    }

    .hamburger-react {
      z-index: 6;
      top: 1rem;
      position: absolute !important;
      right: 10vw;
    }
  }

  /* Opened Nav styles */
  &.open {
    overflow: hidden;

    nav {
      display: flex;
      flex-direction: column;
      height: auto;
      justify-content: flex-start;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;

      a {
        opacity: 1;
        display: block;
        z-index: 6;
        color: var(--white);
        margin-bottom: 4rem;

        &.logo {
          display: flex;

          h1 {
            color: var(--white);
          }
        }

        &:first-of-type {
          margin-top: 12rem;

          @media(min-width: 768px) {
            margin-top: 22rem;
          }
        }
      }

      /* Massive BG Overlay when Nav opened */
      .bgOverlay {
        position: fixed;
        background-color: var(--pink);
        z-index: 5;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .hamburger-react { 
      }
    }
  }
`;
