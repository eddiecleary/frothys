import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function Gallery({imgs}) {

  return (
    <StyledGallery>
      {imgs.map((img) => (
        <Img key={img.asset.id} fluid={img.asset.fluid} />
      ))}
    </StyledGallery>
  )
}

const StyledGallery = styled.div`
  margin-top: 4rem;

  .gatsby-image-wrapper {
    margin-left: auto;
    margin-right: auto;
  }

  > * {
    margin-bottom: 3rem;
    display: none;
    /* Sets all images to be hidden */
  }

  /* "Unhides" the first 3 images on mobile */
  @media(max-width: 767px) {
    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(3) {
      display: block;
    }
  }

  /* Show all of the gallery images on tablet and above */
  @media (min-width: 768px) {
    > .gatsby-image-wrapper {
      display: block;
    }
  }
`
