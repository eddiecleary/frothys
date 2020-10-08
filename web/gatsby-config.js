// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: "Frothy's",
    description: 'this is a description',
    author: 'Eddie Cleary',
    siteUrl: 'https://frothys.eddiecleary.com'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-preact',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Frothy's",
        short_name: "Frothy's",
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#cc3366',
        display: 'standalone',
        icon: 'src/assets/images/frothys-logo.svg',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
          key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
          center: `New York, NY`,
          zoom: `17`,
          scale: `2`,
          markers: 
            [
              {
                location: `New York, NY`,
                color: `red`,
              }
            ]
      },
  },
  ]
}
