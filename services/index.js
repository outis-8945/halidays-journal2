import { request, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Authors {
      postsConnection {
        edges {
          node {
            author {
              ... on Author {
                id
                name
                bio
                photo {
                  url
                }
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async function () {
  const query = gql`
   query getPostDetails() {
    posts(
      orderBy: createdAt_ASC
       last: 3
       ) {
      title 
      featuredImage {
        url
      } 
      createdAt 
      slug
    }
   }
  `;

  const result = await request(graphqlApi, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query getPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlApi, query);

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.categories;
};
