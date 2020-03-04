import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';
import Logo from './logo';

const SiteInfoWrapper = styled.div`
  display: flex; 
  align-items:center;  
  flex-grow: 1;
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;

const SiteInfo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressSiteMetadata {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `} render={props => (
      <SiteInfoWrapper>
        <Logo></Logo>
        <div>
          <SiteTitle>
            {props.allWordpressSiteMetadata.edges[0].node.name}
          </SiteTitle>
          <div>
            {props.allWordpressSiteMetadata.edges[0].node.description}
          </div>
        </div>
      </SiteInfoWrapper>
  )} />
);

export default SiteInfo;
