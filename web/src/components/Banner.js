import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';
import cookie from 'react-cookies';

export default function Banner({text}) {

  const [isOpen, setOpen] = useState(true);
  const [closeBanner, setCloseBanner] = useState({closeBanner: cookie.load('banner')});

  const handleClick = () => {
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);

    setOpen(false);
    setCloseBanner({closeBanner: cookie.save('banner', true, { path: '/', expires, maxAge: 300})});
  }

  return (
    <>
      {isOpen && closeBanner.closeBanner == undefined && <StyledBanner>
        {text}
        <button onClick={handleClick} 
          className="close">&times;</button>
      </StyledBanner>
      }
    </>
  )
}

const dropIn = keyframes`
  0% {
    transform: translateY(-150%);
    padding: 0;
    max-height: 0;
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    padding: 3rem;
    max-height: 8rem;
    opacity: 1;
  }
`

const StyledBanner = styled.div`
  width: 100%;
  background-color: var(--red);
  color: var(--white);
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  padding: 3rem;
  height: auto;
  box-sizing: border-box;
  /* animation: 1s ${dropIn} ease-out; */
  transform-origin: top;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  justify-content: center;
  width: 100%;
  margin-top: -15px;
  margin-bottom: 1rem;

  .close {
    margin-left: 1rem;
    padding: 0;
    border-radius: 0;
    background: none;
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;

    .close {
      font-size: 4rem;
    }
  }
`
