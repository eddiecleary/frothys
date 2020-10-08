import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function GalleryList({imgs}) {

  return (
    <>
      <StyledGalleryList>
        {imgs.map((img) => (
          <Img key={img.asset.id} fluid={img.asset.fluid} />
        ))}
      </StyledGalleryList>
    </>
  )
}

const StyledGalleryList = styled.div`
  margin-top: 4rem;
  margin-left: 1%;
  margin-right: 1%;

  .gatsby-image-wrapper {
    margin-left: auto;
    margin-right: auto;
  }

  > * {
    margin-bottom: 3rem;
    display: none;
    /* Sets all images to be hidden (for mobile) */
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
  @media(min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > * {
      display: block;
      margin-bottom: 2rem;
    }

    .gatsby-image-wrapper {
      flex-basis: 31%;
      margin: 1%;
    }
  }

  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      flex-basis: 29%;
      margin: 2%;
    }
  }
`
