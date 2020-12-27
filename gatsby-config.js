module.exports = {
  siteMetadata: {
    title: `Iskak Mantyubetov`,
		description: `Portfolio Site`,
		author: `Iskak Mantyubetov`,
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
				icon: `src/images/coding-job.png`
			}
    },
    "gatsby-plugin-smoothscroll"
  ],
};
