import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function OrderNow() {
  
  const {delivery} = useStaticQuery(query);

  return(
    <StyledOrderNow id="order">
      <Img alt="Backside view of a man next to a motorcycle with an Uber Eats backpack on, getting ready to deliver food." fluid={delivery.childImageSharp.fluid} />
      <div className="textWrap">
        <h2>Order Online Now!</h2>
        <p>I'm baby enamel pin palo santo banh mi kinfolk tousled. Beard gochujang microdosing banjo lyft wolf. Bushwick sriracha shoreditch, craft beer raclette portland unicorn scenester banh mi.</p>
        <div className="btnWrap">
          <a href="#" className="btn black">Delivery Company</a>
          <a href="#" className="btn red">Delivery Company</a>
        </div>
      </div>
    </StyledOrderNow>
  )
}

const StyledOrderNow = styled.section`
  padding-top: 10rem;
  background-color: var(--white);
  position: relative;
  padding-bottom: 10rem;

  h2 {
    margin-top: 3rem;
  }

  .gatsby-image-wrapper {
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  p {
    display: none;
  }

  .btnWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    
    a {
      display: inline-block;
      max-width: max-content;
      margin-top: 2rem;
    }
  }

  @media (min-width: 768px) {
    padding-left: 7rem;
    padding-right: 7rem;

    p {
      display: block;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      line-height: 1.6;
      max-width: 55rem;
    }

    .btnWrap {
      flex-direction: row;
      justify-content: center;

      .btn:first-of-type {
        margin-right: 3rem;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
      }
    }
  }

  @media (min-width: 992px) {
    padding-top: 13rem;
    background-color: rgba(255,255,255,0.825);

    h2 {
      margin-bottom: 3rem;
    }

    p {
      margin-bottom: 1.7rem;
    }

    .gatsby-image-wrapper {
      margin-bottom: 7rem;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .gatsby-image-wrapper {
      flex-basis: 50%;
      margin: 0;
    }

    p {
      max-width: 45rem;
    }
  }
`;

export const query = graphql`
  query {
    delivery: file(relativePath: {eq: "assets/images/delivery.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:500){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
