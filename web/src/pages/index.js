import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import MenuList from '../components/MenuList';
import Gallery from '../components/Gallery';
import BlogList from '../components/BlogList';
import Hours from '../components/Hours';
import Address from '../components/Address';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Index({data}) {

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

  return (
    <>
      <StyledHero>
        <Img fluid={heroImgSources} fluid={heroImgSources} />
        <div className="textWrap">
          <h1>World Famous Smoothies.<br /> Your Favorite Fruits are a Delicious Treat!</h1>
          <div className="btnWrap">
            <a href="#" className="btn center">View Menu</a>
            <a href="#" className="btn yellow center">Order Now</a>
          </div>
        </div>
      </StyledHero>
      <StyledFruits>
        <h2>Build Your Own:</h2>
        <Img fluid={data.fruits.childImageSharp.fluid} />
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
        <Hours />
        <Address />
        <article>
          <h2>Visit Us</h2>
          <a href="https://www.google.com/maps/search/?api=1&query=New+York+NY"><Img fluid={data.map.nodes[0].childFile.childImageSharp.fluid} /></a>
          <div className="btnWrap">
            <a href="https://www.google.com/maps/dir/?api=1&destination=New+York+NY&dir_action=navigate" className="btn blue">Google Maps <FaMapMarkerAlt/></a>
            <a href="http://maps.apple.com/?daddr=New+York+NY&dirflg=d&t=h" className="btn black">Apple Maps <FaMapMarkerAlt /></a>
          </div>
        </article>
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
        margin-right: 3.5rem;
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
  margin-top: 10rem;

  .gatsby-image-wrapper {
    margin-top: 4rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`

const StyledGallery = styled.section`
  margin-top: 10rem;

  .imgs {
    margin-top: 4rem;

    .gatsby-image-wrapper {
      margin-top: 3rem;
    }
  }
`

const StyledMenu = styled.section`
  margin-top: 6rem;

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
  margin-top: 10rem;

  h2 {
    margin-top: 3rem;
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
`

const StyledContactInfo = styled.section`
  margin-top: 10rem;

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
`

const StyledBlog = styled.section`
  margin-top: 10rem;
  padding-bottom: 10rem;

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
    fruits: file(relativePath: {eq: "assets/images/fruits-mobile.jpg"}){
      childImageSharp{
        fluid(quality:30,maxWidth:300){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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