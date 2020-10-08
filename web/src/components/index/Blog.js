import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';
import BlogList from '../BlogList';

export default function Blog() {

  const {recentPosts} = useStaticQuery(query);

  return (
    <StyledBlog id="blog">
      <h2>Recent Blog Posts:</h2>
      <BlogList posts={recentPosts.nodes} />
    </StyledBlog>
  )
}

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

  @media (min-width: 768px) {
    padding-top: 9rem;
  }

  @media (min-width: 992px) {
    
    article {
      margin-top: 10rem;
    }
  }
`;

export const query = graphql`
  query {
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
            fluid(maxWidth:150) {
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

