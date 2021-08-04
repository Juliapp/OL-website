const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        debug: false,
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: path.resolve('./src'),
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: path.resolve('./tsconfig.paths.json'),
      },
    },
  ],
};

// module.exports = {
//   webpack: {
//     alias: {
//       // My custom aliases
//       '@assets': path.resolve(__dirname, 'src/assets/*'),
//       '@atoms': path.resolve(__dirname, 'src/components/atomic/atoms'),
//       '@molecules': path.resolve(__dirname, 'src/components/atomic/molecules'),
//       '@organisms': path.resolve(__dirname, 'src/components/atomic/organisms'),
//       '@templates': path.resolve(__dirname, 'src/components/atomic/templates'),
//       '@context': path.resolve(__dirname, 'src/context'),
//       '@hooks': path.resolve(__dirname, 'src/hooks'),
//       '@services': path.resolve(__dirname, 'src/services'),
//       '@types': path.resolve(__dirname, 'src/utils/types'),
//     },
//   },
// };
