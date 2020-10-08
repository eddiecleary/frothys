import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';
import GalleryList from '../GalleryList';

export default function Gallery() {
  const {heroGallery} = useStaticQuery(query);

  return(
    <StyledGallery>
      <h2>Enjoy!</h2>
      <GalleryList imgs={heroGallery.gallery} />
    </StyledGallery>
  )
}

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

  @media (min-width: 992px) {
    padding-top: 13rem;
    background-color: rgba(255,255,255,0.825);
  }
`

export const query = graphql`
  query {
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
  }
`
