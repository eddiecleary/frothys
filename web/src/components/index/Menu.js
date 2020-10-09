import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import MenusList from '../MenusList';

export default function Menu() {
  
  const {menus} = useStaticQuery(query);

  return (
    <StyledMenu id="menu">
      <MenusList menus={menus.edges} />
    </StyledMenu>
  )
}

const StyledMenu = styled.section`
  padding-top: 3rem;
  background-color: var(--white);
  position: relative;

  @media (min-width: 768px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media (min-width: 992px) {
    padding-top: 12rem;
    padding-left: 4rem;
    padding-right: 4rem;
    background-color: rgba(255,255,255,0.825);
  }
`

export const query = graphql`
  query {
    menus: allSanityMenu {
      edges {
        node {
          name
          items {
            name
            price
            _key
          }
          id
          icon {
            alt
            asset {
              id
              fixed(width: 50) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`;