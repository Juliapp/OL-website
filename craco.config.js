const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/');
    }
  }
}

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoAlias,
//       options: {
//         debug: false,
//         source: 'tsconfig',
//         // baseUrl SHOULD be specified
//         // plugin does not take it from tsconfig
//         baseUrl: path.resolve('./src'),
//         // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
//         tsConfigPath: path.resolve('./tsconfig.paths.json'),
//       },
//     },
//   ],
// };
