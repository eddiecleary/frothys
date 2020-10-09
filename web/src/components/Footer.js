import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/frothys-logo.png';
import SocialIcons from '../components/SocialIcons';
import Hours from './Hours';
import Address from './Address';
import bg from '../assets/images/fruits-bg.svg';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function Footer () {
  const data = useStaticQuery(query);
  return (
    <StyledFooter id="contact">
      <div className="footerbg"></div>
      <div className="innerborder">
        <div className="content">
          <div className="toprow">
            <a href="#" className="logo">
              <Img fluid={data.logo.childImageSharp.fluid} />
              <h1>Frothy's</h1>
            </a>
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
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--black);
  color: var(--white);
  position: relative;
  width: 100%;
  padding-bottom: 2rem;

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
      justify-content: center;
      font-size: 3rem;

      .gatsby-image-wrapper {
        width: 6rem;
        height: 6rem;
      }

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
      margin: 0 auto;
      top: 0;
      bottom: 3.5rem;
      width: 89%; 
      /* These 2 values coincide with the Layout component width */
      max-width: 80rem;        
      border: 3px dashed white;
      border-top: 0;
      background-color: var(--black);
      opacity: 1;
      box-sizing: border-box;

      .content {
        width: 89%;
        max-width: 80rem;
        margin: 0 auto;
        padding-bottom: 2rem;

        .toprow {
          flex-direction: row;
          justify-content: space-between;

          .logo {
            /* transform: initial; */
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
      }
    }   
  }

  @media (min-width: 992px) {

    .innerborder {
      max-width: 90rem;
    }
  }

  @media (min-width: 1200px) {
    .innerborder {
      max-width: 105rem;
    }
  }
`

export const query = graphql`
  query{
    logo: file(relativePath: {eq: "assets/images/frothys-logo.png"}){
      childImageSharp{
        fluid(quality:70,maxWidth:140){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`