import React, { useState, useLayoutEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Squash as Hamburger } from 'hamburger-react';
import SocialIcons from '../components/SocialIcons';
import bg from '../assets/images/fruits-bg.svg';
import { useMediaPredicate } from 'react-media-hook';
import Banner from '../components/Banner';
import Img from 'gatsby-image';

// Used for checking dom every 1 second instead of every .00001ms speed of light :)
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer) 
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function Header () {
  // Load in site banner (if user set 1)
  const data = useStaticQuery(query);
  
  // Used for opening nav menu
  const [isOpen, setOpen] = useState(false);
  const [bannerText, setBannerText] = useState(false);
  
  if (data.sanitySiteSettings.banner) {
    setBannerText(data.sanitySiteSettings.banner.trim())
  }
  
  // Used for checking if nav menu should close when browser > 992px width
  const isDesktop = useMediaPredicate("(min-width: 992px)");

  // Close nav menu drawer if window size > 992px
  useLayoutEffect(() => {
    const dbHandleResize = debounce(function handleResize() {
      if (isDesktop) {
        setOpen(false);
      }
    }, 1000);
  
    window.addEventListener('resize', dbHandleResize)

    return () => {
      window.removeEventListener('resize', dbHandleResize)
    }
  });

  return (
    <>
      {isOpen && !isDesktop && <GlobalStylesNavToggle />}
      <HeaderStyles className={isOpen && !isDesktop ? 'open' : ''}>
        {bannerText && <Banner text={bannerText} />}
        <nav>
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#location" onClick={() => setOpen(false)}>Location</a>
          <a href="/" className="logo" onClick={() => setOpen(false)}>
            <Img fluid={data.logo.childImageSharp.fluid} alt="Frothy's Logo" />
            <h1>Frothy'<span>s</span></h1></a>
          <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <div className="bgOverlay">
            <div className="innerborder">
            </div>
          </div>
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
  }

  /* Unopened Nav Styled */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      position: absolute;
      display: flex;
      font-size: 1.5rem;
      align-items: center;
      left: 10vw;

      .gatsby-image-wrapper {
        width: 6rem;
        height: 6.2rem;
      }
      
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
        width: 60px;
        height: 62px;
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

    .bgOverlay {
      position: fixed;
      background-color: var(--pink);
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      pointer-events: none;
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
          margin-bottom: 0;

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
        opacity: 1;
        transform: scale(1);
        z-index: 5;

        &::before {
          content: '';
          
          background-repeat: repeat;
          background-size: 150px;
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: 0px;
          left: 0px;
          opacity: 1;
        }

        .innerborder {
          
          position: absolute;
          top: 35px;
          bottom: 35px;
          background-color: var(--pink);
          opacity: 1;
          margin: 0;
        }
      }
    }
  }

  @media (min-width: 768px) {
    nav {
      width: 89%;
      max-width: 80rem;
      padding: 0;
      padding-top: 1.5rem;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;

      a {
        font-size: 2.7rem;
      }

      .logo {
        left: 0;
      }

      .hamburger-react {
        right: 0;
        top: 2.5rem;
      }
    }

    .bgOverlay {

      &::before {
        background-image: url(${bg});
      }

      .innerborder {
        width: 89%;
        max-width: 80rem;
        left: 50%;
        transform: translateX(-50%);
        border: 3px dashed white;
      }
    }
  }

  @media (min-width: 992px) {

    nav {
      height: auto;
      padding-top: 3rem;

      a {
        opacity: 1;
        display: initial;
        color: var(--black);

        &:hover {
          color: var(--pink);
        }

        &.logo {
          position: static;
          max-width: 100%;

          img {
            max-width: 80px;
            width: 80px;
            height: 82px;
          }
        }

        &.btn {
          display: none;
        }
      }

      .hamburger-react {
        display: none;
        opacity: 0;
      }
    }
  }
`;

export const query = graphql`
  query {
    sanitySiteSettings{
      banner
    }
    logo: file(relativePath: {eq: "assets/images/frothys-logo.png"}){
      childImageSharp{
        fluid(quality:70,maxWidth:140){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`