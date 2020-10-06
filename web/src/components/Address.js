import React from 'react';
import styled from 'styled-components';

export default function Address() {
  
  return(
    <StyledAddress>
      <a href="https://www.google.com/maps/search/?api=1&query=New+York+NY">
        <address>
          <h3>Address</h3>
          <p>1123 Address St.</p>
          <p>Town City, ST 45891</p>
          <p>Next to Landmark</p>
        </address>
      </a>
    </StyledAddress>
  )
}

const StyledAddress = styled.article`

  a {
    text-decoration: none;
    color: var(--black);
  }

  address {
    font-style: initial;
    text-align: center;

    h3 {
      margin-bottom: 2rem;
    }
  }

`