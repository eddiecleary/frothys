import React, { createRef, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import MenuList from '../components/MenuList';
import Gallery from '../components/Gallery';
import BlogList from '../components/BlogList';
import Hours from '../components/Hours';
import Address from '../components/Address';
import { FaMapMarkerAlt } from 'react-icons/fa';
import svg from '../assets/images/fruits-bg.svg';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactBg from '../assets/images/contact-bg.jpg'


export default function Index({data}) {
  let fruitsImgRef = useRef();
  let bgRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    gsap.to(
      bgRef,{
        backgroundPosition: "0% 100%",
        scrollTrigger: {
          trigger: bgRef,
          start: "top bottom",
          toggleActions: "restart none none none",
          end: "top 60%",
          scrub: 1,
        }
      }
    );
    
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        gsap.to(
          fruitsImgRef, {
            opacity: 1,
            x: -780,
            scrollTrigger: {
              trigger: fruitsImgRef,
              start: "top 55%",
              end: "bottom 50%",
              toggleActions: "restart none none none",
              scrub: true,
            }
          }
        )
      }
    });    
  }, []);

  

  const heroImgSources = [
    {
      ...data.heroImageMobile.childImageSharp.fluid,
      media: '(max-width: 767px)'
    },
    {
      ...data.heroImageDesktop.childImageSharp.fluid,
      media: '(min-width: 768px)'
    }
  ];

  const fruitsImgSources = [
    {
      ...data.fruitsMobile.childImageSharp.fixed,
      media: '(max-width: 767px)'
    },
    {
      ...data.fruitsDesktop.childImageSharp.fixed,
      media: '(max-width: 768px)'
    }
  ]

  return (
    <>
      <StyledHero>
        <Img fluid={heroImgSources} />
        <div className="textWrap">
          <h1>World Famous Smoothies.<br /> Your Favorite Fruits are a Delicious Treat!</h1>
          <div className="btnWrap">
            <a href="#" className="btn center">View Menu</a>
            <a href="#" className="btn yellow center">Order Now</a>
          </div>
        </div>
      </StyledHero>
      <StyledFruits>
        <h2>Pick Any Fruit:</h2>
        <div className="fruits" ref={el => {fruitsImgRef = el}}>
          <Img fixed={fruitsImgSources} />
        </div>
      </StyledFruits>
      <StyledGallery>
        <h2>Enjoy!</h2>
        <Gallery imgs={data.heroGallery.gallery} />
      </StyledGallery>
      <StyledMenu>
        <MenuList menus={data.menus.edges} />
      </StyledMenu>
      <StyledOrderNow>
        <Img fluid={data.delivery.childImageSharp.fluid} />
        <h2>Order Online Now!</h2>
        <div className="btnWrap">
          <a href="#" className="btn black">Delivery Company</a>
          <a href="#" className="btn red">Delivery Company</a>
        </div>
      </StyledOrderNow>
      <StyledContactInfo>
        <div className="top" ref={el => {bgRef = el}}>
          <h2>Visit Us</h2>
          <Hours />
          <Address />
        </div>
        <div className="bottom">
        	<article>
        	  <a href="https://www.google.com/maps/search/?api=1&query=New+York+NY"><Img fluid={data.map.nodes[0].childFile.childImageSharp.fluid} /></a>
        	  <div className="btnWrap">
        	    <a href="https://www.google.com/maps/dir/?api=1&destination=New+York+NY&dir_action=navigate" className="btn blue">Google Maps <FaMapMarkerAlt/></a>
        	    <a href="http://maps.apple.com/?daddr=New+York+NY&dirflg=d&t=h" className="btn black">Apple Maps <FaMapMarkerAlt /></a>
        	  </div>
        	</article>
        </div>
      </StyledContactInfo>
      <StyledBlog>
        <h2>Recent Blog Posts:</h2>
        <BlogList posts={data.recentPosts.nodes} />
      </StyledBlog>
    </>
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

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    background-color: var(--white);
    width: 100%;
    position: relative;
    left: initial;
    right: initial;
    margin: 0;
  }

  .gatsby-image-wrapper {
    width: 100%;
    margin-top: 4rem;

    @media(min-width: 768px) {
      width: 50%;
    }
  }

  .textWrap {
    max-width: 350px;
    margin: 0 auto;

    @media(min-width: 768px) {
      margin-top: 6rem;
      max-width: 500px;
    }
  }


  h1 {
    margin-top: 3rem;
    padding-left: 15px;
    padding-right: 15px;
  }

  .btnWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 2rem;

    @media(min-width: 768px) {
      justify-content: center;

      a:first-of-type {
        margin-right: 2.5rem;
      }
    }

    a {
      display: inline-block;
      max-width: max-content;
      margin-top: 2rem;
    }
  }
`

const StyledFruits = styled.section`
  padding-top: 10rem;
  background-color: var(--white);
  text-align: center;

  @media(min-width: 768px) {
    position: relative;
  }

  .fruits {
    margin-top: 4rem;

    .gatsby-image-wrapper {
      @media(min-width: 768px) {
        margin: 3rem;
        margin-right: 0;
        opacity: 1;
      }
    }
  }

`

const StyledGallery = styled.section`
  padding-top: 10rem;

  .imgs {
    margin-top: 4rem;

    .gatsby-image-wrapper {
      margin-top: 3rem;
    }
  }

  @media(min-width: 768px) {
    position: relative;
    background-color: var(--white);

  }
`

const StyledMenu = styled.section`
  padding-top: 6rem;
  background-color: var(--white);
  position: relative;

  @media (min-width: 768px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  table {
    width: 100%;
    margin-top: 8rem;

    th {
    display: flex;
    align-items: flex-end;
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem;

      img {
        width: 45px;
        margin-right: 0.7rem;
      }
    }

    tbody {
      tr {
        margin-top: 2rem;
        display: flex;
        align-items: baseline;
      }

      .dots {
        flex: 1;
        border-bottom: 2px dashed var(--black);
        margin-left: 1rem;
      }

      td:last-of-type {
        margin-left: 1rem;
      }
    }
  }
`
const StyledOrderNow = styled.section`
  padding-top: 10rem;
  background-color: var(--white);
  position: relative;
  padding-left: 10rem;
  padding-right: 10rem;

  h2 {
    margin-top: 3rem;
  }

  .gatsby-image-wrapper {
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .btnWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    
    a {
      display: inline-block;
      max-width: max-content;
      margin-top: 2rem;
    }
  }
`

const StyledContactInfo = styled.section`
  padding-top: 10rem;
  background-color: var(--white);
  position: relative;

  .gatsby-image-wrapper {
    margin-top: 4rem;
  }

  article {
    margin-top: 4rem;

    &:last-of-type {
      margin-top: 8rem;
    }
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
    color: var(--white);

    article{
      padding: 7rem 0;
      margin-top: 0;

      &:last-of-type {
        padding: 0;
      }
    }

    address {
      color: var(--white);
    }

    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-image: url(${contactBg});
      background-size: 100%;
      background-position: 0% 0%;
      background-repeat: no-repeat;

      h2 {
        flex-basis: 100%;
        padding-top: 7rem
      }

      > * {
        flex-basis: 50%;
      }
    }

    .bottom {
      padding-bottom: 3rem;
      
      article {
        margin-top: 0;

        .gatsby-image-wrapper {
          margin-top: 0;
          height: 420px;
        }

        .btnWrap {
          flex-direction: row;
          justify-content: center;

          .btn:first-of-type {
            margin-right: 3rem;
          }
        }
      }
    }
  }
`

const StyledBlog = styled.section`
  padding-top: 12rem;
  padding-bottom: 10rem;
  position: relative;
  background-color: var(--white);

  h2 {
    margin-bottom: 7rem;
  }

  article:not(:first-of-type) {
    margin-top: 7rem;
  }
`;

export const query = graphql`
  query {
    heroImageMobile: file(relativePath: {eq: "assets/images/hero2.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:500){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    heroImageDesktop: file(relativePath: {eq: "assets/images/hero.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:700){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fruitsMobile: file(relativePath: {eq: "assets/images/fruits-mobile.jpg"}){
      childImageSharp{
        fixed(width:300){
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    fruitsDesktop: file(relativePath: {eq: "assets/images/fruits-desktop.png"}){
      childImageSharp{
        fixed(width:1400){
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    heroGallery: sanityGallery(name: {eq: "Hero Gallery"}) {
      gallery {
        asset {
          fluid(maxWidth:500){
            ...GatsbySanityImageFluid
          }
          id
        }
      }
    }
    menus: allSanityMenu {
      edges {
        node {
          name
          icon {
            asset {
              url
            }
          }
          items {
            name
            price
            _key
          }
          id
        }
      }
    }
    delivery: file(relativePath: {eq: "assets/images/delivery.jpg"}){
      childImageSharp{
        fluid(quality:50,maxWidth:500){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    map: allStaticMap {
      nodes {
        childFile {
          childImageSharp {
            fluid(maxWidth:500){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    recentPosts: allSanityPost(limit: 3, sort: {order: DESC, fields: publishedAt}) {
      nodes {
        id
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM Do YYYY")
        mainImage {
          asset {
            fluid(maxWidth:350) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawExcerpt
        _rawBody
      }
    }
  }
`