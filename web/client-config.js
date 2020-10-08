module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'bl7lx5o4',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    useCdn: true
  },
  graphql: {
    url: 'https://bl7lx5o4.api.sanity.io/v1/graphql/production/default'
  }
}
