import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const LogoFigure = styled.figure`
  width: 4rem;
  margin-right: 1rem;
  img {
    max-width: 100%;
  }
`;

const Logo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
              alt_text
            }
          }
        }
      }
    }
  `} render={props => (
    <LogoFigure>
      <img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt={props.allWordpressWpLogo.edges[0].node.url.alt_text} />
    </LogoFigure>
  )} />
);

export default Logo;
