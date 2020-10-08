import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import contactBg from '../../assets/images/contact-bg.jpg';
import Hours from '../Hours';
import Address from '../Address';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {

  const {mapMobile, mapDesktop} = useStaticQuery(query);

  const mapImgSources = [
    {
      ...mapMobile.nodes[0].childFile.childImageSharp.fluid,
      media: '(max-width: 767px)'
    },
    {
      ...mapDesktop.nodes[0].childFile.childImageSharp.fluid,
      media: '(min-width: 768px)'
    }
  ];

  let bgRef = useRef();

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)

      gsap.to(
        bgRef,{
          backgroundPosition: "0% 100%",
          scrollTrigger: {
            trigger: bgRef,
            start: "top center",
            end: "bottom 400%",
            toggleActions: "restart none none none",
            scrub: 7,
          }
        }
      );
    }, []);

  return (
    <StyledContactInfo id="location">
      <div className="top" ref={el => {bgRef = el}}>
        <div className="flexWrap">
          <h2>Visit Us</h2>
          <Hours />
          <Address />
        </div>
      </div>
      <div className="bottom">
        <article>
          <a href="https://www.google.com/maps/search/?api=1&query=New+York+NY"><Img alt="Map of New York, NY showing location of Frothy's restaurant next to New York City Hall." fluid={mapImgSources} /></a>
          <div className="btnWrap">
            <a href="https://www.google.com/maps/dir/?api=1&destination=New+York+NY&dir_action=navigate" className="btn blue">Google Maps <FaMapMarkerAlt/></a>
            <a href="http://maps.apple.com/?daddr=New+York+NY&dirflg=d&t=h" className="btn black">Apple Maps <FaMapMarkerAlt /></a>
          </div>
        </article>
      </div>
    </StyledContactInfo>
  )
}

const StyledContactInfo = styled.section`
  background-color: var(--white);
  position: relative;

  .top {

    .flexWrap {
      article {
        margin-top: 4rem;

        &:last-of-type {
          margin-top: 8rem;
        }
      }
    }
  }

  .bottom {
    .gatsby-image-wrapper {
      margin-top: 4rem;
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
  }

  @media (min-width: 768px) {
    color: var(--white);

    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${contactBg});
      background-size: 100%;
      background-position: 0% 0%;
      background-repeat: no-repeat;
      height: 450px;

      .flexWrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        h2 {
          flex-basis: 100%;
          margin-bottom: 4rem;
        }

        article{
          margin-top: 0;
          flex-basis: 50%;

          &:last-of-type {
            padding: 0;
            margin-top: 0;
          }

          address {
            color: var(--white);
          }
        }  
      }   
    }

    .bottom {
      padding-bottom: 3rem;
      
      article {
        margin-top: 0;

        .gatsby-image-wrapper {
          margin-top: 0;
          height: 450px;
          border-bottom: 3px dashed black;
        }

        .btnWrap {
          flex-direction: row;
          justify-content: center;
          padding-top: 0;

          .btn {
            margin: 0;
            transform: translateY(-50%);
            border: 3px dashed var(--white);
          }

          .btn:first-of-type {
            margin-right: 3rem;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .top {
      padding: 10rem 0;
      box-sizing: border-box;
      height: 550px;
    }

    .bottom {
      article {
        .gatsby-image-wrapper {
          height: 550px;
        }
      }
    }
  }
`;

export const query = graphql`
  query {
    mapMobile: allStaticMap {
      nodes {
        childFile {
          childImageSharp {
            fluid(quality:70,maxWidth:200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    mapDesktop: allStaticMap {
      nodes {
        childFile {
          childImageSharp {
            fluid(quality:50,maxWidth:400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
