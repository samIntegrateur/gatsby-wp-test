/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './MainMenu';
import styled, {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';
import {graphql, StaticQuery} from 'gatsby';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
     font-family:  'Open Sans', sans-serif;
  }
  
  
  figure {
    margin: 0;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />

    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
);


export default Layout
