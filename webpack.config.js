// eslint-disable-next-line no-unused-vars
const path = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  // ... other webpack configuration settings

  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },

  plugins: [
    new DotenvWebpackPlugin(),
    // ... other plugins
  ],
};


// // eslint-disable-next-line no-unused-vars
// const path = require('path');

// module.exports = {
//   // Your other webpack configuration settings here
//   resolve: {
//     fallback: {
//       fs: false, // This will exclude 'fs' entirely
//       path: require.resolve('path-browserify'),
//       os: require.resolve('os-browserify/browser'),
//     },
//   },
// };


// module.exports={
//     resolve:{
//         fallback:{ os : require.resolve("os-browserify/browser"),
//              path: require.resolve("path-browserify")
//         },
//     }
// }