import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby';
import Img from 'gatsby-image';

function BlogPost({post}) {
  return(
    <StyledBlogPost>
      <Img fluid={post.mainImage.asset.fluid} />
      <h3>{post.title}</h3>
      <time dateTime={post.publishedAt}>{post.publishedAt}</time>
      <p>{post._rawExcerpt[0].children[0].text}</p>
    </StyledBlogPost>
  )
}

export default function BlogList({posts}) {
  return(
    <StyledBlogList>
      {posts.map((post) => (
        <BlogPost post={post} key={post.id} />
      ))}
    </StyledBlogList>
  )
}

const StyledBlogList = styled.section`

`

const StyledBlogPost = styled.article`
  margin-top: 4rem;
  text-align: center;

  &:nth-of-type(1) {
    .gatsby-image-wrapper {
      border-color: var(--green);
    }
  }

  &:nth-of-type(2) {
    .gatsby-image-wrapper {
      border-color: var(--lightblue);
    }
  }

  &:nth-of-type(3) {
    .gatsby-image-wrapper {
      border-color: var(--pink);
    }
  }

  .gatsby-image-wrapper {
    max-width: 270px;
    margin: 0 auto;
    border: 5px solid;
  }

  h3 {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
  }

  time {
    margin-top: 2rem;
    display: inline-block;
  }

  p {
    line-height: 1.5;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`