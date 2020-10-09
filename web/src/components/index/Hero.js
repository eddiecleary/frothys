import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Hero() {
  const { heroDesktop, heroMobile } = useStaticQuery(query);

  const heroImgSources = [
    {
      ...heroMobile.childImageSharp.fluid,
      media: '(max-width: 767px)'
    },
    {
      ...heroDesktop.childImageSharp.fluid,
      media: '(min-width: 768px)'
    }
  ];

  return(
    <StyledHero>
      <Img alt="A hand holding a glass mug filled with a strawberry smoothie and topped with whipped cream." fluid={heroImgSources} />
      <div className="textWrap">
        <h1>World Famous Smoothies.<br /> Your Favorite Fruits are a Delicious Treat!</h1>
        <div className="btnWrap">
          <a href="#menu" className="btn pink center">View Menu</a>
          <a href="#order" className="btn yellow center">Order Now</a>
        </div>
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  /* Full width section. Reference: https://css-tricks.com/full-width-containers-limited-width-parents/7 */
  position: relative;
  left: 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  text-align: center;
  padding-bottom: 5rem;

  .gatsby-image-wrapper {
    width: 100%;
    margin-top: 4rem;
  }

  .textWrap {
    max-width: 350px;
    margin: 0 auto;
  }


  h1 {
    margin-top: 3rem;
    padding-left: 15px;
    padding-right: 15px;
  }

  .btnWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* iphone 5 */
    align-items: center; 
    padding-top: 2rem;

    a {
      display: inline-block;
      max-width: max-content;
      margin-top: 2rem;
    }
  }

  @media (min-width: 375px) {
    .btnWrap {
      flex-direction: row;
    }
  }

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    background-color: var(--white);
    width: 100%;
    position: relative;
    left: initial;
    right: initial;
    margin: 0;

    .gatsby-image-wrapper {
      flex-basis: 50%;
      max-width: 229px;
      
      img {
        max-height: 360px;
      }
    }

    .textWrap {
      margin-top: 6rem;
      max-width: 500px;
    }

    .btnWrap {
      justify-content: center;

      a:first-of-type {
        margin-right: 2.5rem;
      }
    }
  }

  @media (min-width: 992px) {
    padding-bottom: 0rem;

    .gatsby-image-wrapper {
      flex-basis: 50%;
      width: 300px;
      max-width: 300px;
      
      img {
        height: 470px;
        max-height: 470px;
      }
    }
  }

  @media (min-width: 1200px) {
    .gatsby-image-wrapper {
      width: 350px;
      max-width: 350px;

      img {
        height: 550px;
        max-height: 550px;
      }
    }
  }
`

export const query = graphql`
  query {
    heroMobile: file(relativePath: {eq: "assets/images/hero-mobile.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:500){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    heroDesktop: file(relativePath: {eq: "assets/images/hero.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:700){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`