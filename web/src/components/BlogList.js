import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby';
import Img from 'gatsby-image';

function BlogPost({post}) {
  return(
    <StyledBlogPost>
      <Img alt={post.mainImage.alt} fluid={post.mainImage.asset.fluid} />
      <div className="textWrap">
        <h3>{post.title}</h3>
        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        <p>{post._rawExcerpt[0].children[0].text}</p>
      </div>
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
    width: 100%;
    max-width: 33rem;
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

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93%;
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;

    .gatsby-image-wrapper {
      flex-basis: 30%;
      margin: 0;
      height: 25rem;
      margin-right: 2.5rem;
    }

    .textWrap {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 275px;

      h3 {
        width: 100%;
        text-align: left;
        margin: 0;
        font-size: 2.35rem;
        max-width: 100%;
      }

      time {
        order: 3;
        align-self: flex-end;
      }

      p {
        max-width: 100%;
        margin: 0;
        text-align: left;
      }
    }
  }

  @media (min-width: 992px) {
    max-width: 80rem;
    
    .gatsby-image-wrapper {
      margin-right: 5rem;
    }
  }
`