import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  margin: 1rem 0;
`;

export default ({pageContext}) => (
  <Layout>
    <h1>
      {pageContext.title}
    </h1>
    <strong>
      Website url :
    </strong>
    <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">
      {pageContext.acf.portfolio_url}
    </a>
    <FeaturedImage src={pageContext.featured_media.source_url} alt="image" />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);
