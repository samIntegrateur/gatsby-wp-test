import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Pagination = styled.nav`
 margin: 2rem 0;
 
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
    margin: 0 0.2rem;
    padding: 0;
  }
`;

const PaginationLink = styled(Link)`
  background-color: white;
  border: 1px solid ${props => props.current ? 'rebeccapurple' : '#ccc'};
  color: rebeccapurple;
  transition: color 0.2s, background-color 0.2s;
  padding: 0.3rem 0.6rem;
  text-decoration: none;
    
   &:hover,
   &:focus {
    background-color: rebeccapurple;
    color: white;
   }
`;

export default ({pageContext}) => (
  <Layout>
    <h1>Blog</h1>
    {pageContext.posts.map(post => (
      <article key={post.node.id}>
        <h2 dangerouslySetInnerHTML={{__html: post.node.title}} />
        <small>{post.node.date}</small>
        <div dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
        <div><Link to={`/post/${post.node.slug}`}>Read more</Link></div>
      </article>
    ))}
    <Pagination>
      <ul>
        {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
          <li key={index}>
            <PaginationLink to={index === 0 ? '/blog' : `/blog/${index + 1}`}
                  current={index + 1 === pageContext.currentPage ? 1 : 0}>
              {index + 1}
            </PaginationLink>
          </li>
        ))}
      </ul>
    </Pagination>
  </Layout>
)
