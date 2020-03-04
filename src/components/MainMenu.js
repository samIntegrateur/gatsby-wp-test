import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';

const MainMenuWrapper = styled.nav`
  display: flex;
  align-items:center;
  background-color: #c0c5afb5;
  color: rebeccapurple;
  padding: 1rem;
`;

const MainMenuInner = styled.div`
  width: 960px;
  margin: auto;
  display: flex;
  align-items:center;
`;


const MenuItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  :hover,
 
  :focus {
    text-decoration: underline;
  }
  
  :not(:first-child) {
    margin-left: 1rem;
  }
`;


const MainMenu = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Main menu"
        }
      }) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
  `} render={props => (
    <MainMenuWrapper>
      <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={`/${item.object_slug}`} key={item.title}>
              {item.title}
            </MenuItem>
          ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )} />
);

export default MainMenu;
