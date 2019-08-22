module.exports = ({ headingFont = 'Vollkorn', bodyFont = 'Roboto' }) => ({
  siteMetadata: {
    siteUrl: 'https://geo-nepal.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: headingFont,
          },
          {
            family: bodyFont,
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Geo Nepal',
        short_name: 'Geo Nepal',
        description:
          'GeoNepal Engineering consultancy Pvt Ltd is a service-oriented company. GeoNepal works in the field of surveying and mapping under the theme of digital worker and modern technologies .We provide the Consulting service in the field of survey and Information Technology (I.T) which may include Spatial Data solutions, Digital topographic Mapping and G.I.S. ,Cadastral survey ,Town-planning survey, Remote Sensing ,Photogrammetry, Geodesy, Land Valuation ,GNSS ,Land use mapping and development along with Web-GIS , Geoportal and Software development.',
        start_url: '/',
        background_color: '#F9F9F9',
        theme_color: '#FFD700',
        display: 'standalone',
        icon: 'static/images/favicon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-146313406-1', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 's3vn5bjx',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token:
          'sk01FfE41IAObiyfqGJrb3F1F7qr0EYxjLDJCY9M26HSsd0Vn5IAUBghkNLQZPM4TSCv35RbGV1dGjfbctr0m2gUUBmmLKhTXGuKXxeXzWgNvOTxQSaBpMBPunUviU1e1sWngWM0CZgBl3vwAenDTCkQtF21jSe7h6H8o5ZYUp2dBBVz0qvf',
      },
    },
  ],
});
