import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

const PorfolioItem = styled.div`
  margin: 1rem;
  flex: 0 0 calc(50% - 2rem);
`;

const PorfolioImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  margin: 1rem 0;
`;

const PorfolioItems = () => {
  return (
    <StaticQuery query={graphql`
      {
        allWordpressWpPortfolio {
          edges {
            node {
              id
              title
              slug
              excerpt
              content
              featured_media {
                source_url
              }
            }
          }
        }
      }
    `} render={props => (
      <PortfolioItemsWrapper>
        {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
          <PorfolioItem key={portfolioItem.node.id}>
            <h1>{portfolioItem.node.title}</h1>
            <PorfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
            <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>
              Read more
            </Link>
          </PorfolioItem>
        ))}
      </PortfolioItemsWrapper>
    )} />
  )
};

export default PorfolioItems;
