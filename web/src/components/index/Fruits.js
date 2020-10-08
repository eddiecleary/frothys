import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Fruits() {
  const {fruitsMobile, fruitsDesktop} = useStaticQuery(query);

  const fruitsImgSources = [
    {
      ...fruitsMobile.childImageSharp.fluid,
      media: '(max-width: 767px)'
    },
    {
      ...fruitsDesktop.childImageSharp.fluid,
      media: '(min-width: 768px)'
    }
  ];
  
  let fruitsImgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
    
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        gsap.to(
          fruitsImgRef, {
            x: -860,
            scrollTrigger: {
              trigger: fruitsImgRef,
              start: "center 70%",
              end: "bottom 25%",
              toggleActions: "restart none none none",
              scrub: true,
              marks: true,
            }
          }
        )
      },
      "(min-width: 992px)": function() {
        gsap.to(
          fruitsImgRef, {
            x: -680,
            scrollTrigger: {
              trigger: fruitsImgRef,
              start: "center 50%",
              end: "bottom 20%",
              toggleActions: "restart none none none",
              scrub: true,
            }
          }
        )
      },
      "(min-width: 1200px)": function() {
        gsap.to(
          fruitsImgRef, {
            x: -520,
            scrollTrigger: {
              trigger: fruitsImgRef,
              start: "center 40%",
              end: "bottom 20%",
              toggleActions: "restart none none none",
              scrub: true,
            }
          }
        )
      }
    });    
  }, []);


  return(
    <StyledFruits>
      <h2>Pick Any Fruit:</h2>
      <div className="fruits" ref={el => {fruitsImgRef = el}}>
        <Img alt="A collection of fruit illustrations, including: blueberries, pineapple, apple, avocado, orange, banana, strawberry, mango, apricot, watermelon, kiwi, and cherry." fluid={fruitsImgSources} />
      </div>
    </StyledFruits>
  )
}

const StyledFruits = styled.section`
  padding-top: 5rem;
  background-color: var(--white);
  text-align: center;

  h2 {
    margin-bottom: 4rem;
  }  

  .gatsby-image-wrapper {
    margin: 0 auto;
    width: 250px;
  }

  @media (min-width: 414px) {
    .gatsby-image-wrapper {
      width: 290px;
    }
  }

  @media(min-width: 768px) {
    position: relative;

    .gatsby-image-wrapper {
        width: 1500px;
        margin-left: 2rem;
        opacity: 1;
    }
  }

  @media (min-width: 992px) {
    padding-top: 6.5rem;
    background-color: rgba(255,255,255,0.825);
  }
`

export const query = graphql`
  query {
    fruitsMobile: file(relativePath: {eq: "assets/images/fruits-mobile.jpg"}){
      childImageSharp{
        fluid(quality:70,maxWidth:290){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fruitsDesktop: file(relativePath: {eq: "assets/images/fruits-desktop.png"}){
      childImageSharp{
        fluid(quality:70,maxWidth:2102){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;