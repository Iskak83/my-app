module.exports = {
  siteMetadata: {
    title: `Portfolio`,
		description: `Portfolio Site`,
    author: `Iskak Mantyubetov`,
    image: `src/images/my-logo.png`
  },
  
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
      },
    }, 
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/my-logo.jpg`
			}
    },
    "gatsby-plugin-smoothscroll"
  ],
};
