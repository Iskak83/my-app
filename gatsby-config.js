module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
   menuLinks:[
      {
        name:'/home',
        link:'/'
      },
   
   ]
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
  ],
};
