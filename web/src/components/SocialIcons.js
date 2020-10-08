import React from 'react';
import styled from 'styled-components';
import { FaFacebook,  FaInstagram, FaTwitter } from 'react-icons/fa';

export default function SocialIcons({color}) {
  return (
    <StyledIcons color={color} className="social-icons">
      <a href="https://www.facebook.com"><FaFacebook aria-label="Frothy's Facebook Page"/></a>
      <a alt="Link to Frothy's Instagram Page" href="https://www.instagram.com"><FaInstagram aria-label="Frothy's Instagram Page" /></a>
      <a alt="Link to Frothy's Twitter Page" href="https://www.twitter.com"><FaTwitter aria-label="Frothy's Twitter Page" /></a>
    </StyledIcons>
  )
}

const StyledIcons = styled.div`
  display: flex;
  z-index: 6;
  color: var(--white);
  width: 210px;

  margin: 0 auto;
  justify-content: space-between;
  
  /* reset a:first-of-type selector above */
  a {
    margin-top: 0;
    color: ${props => props.color};
  }

  svg {
    width: 44px;
    height: auto;
  }
`