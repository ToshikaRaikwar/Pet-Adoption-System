// const { getDefaultConfig } = require('@expo/metro-config');

// module.exports = {
//     transformer: {
//       assetPlugins: ['expo-asset/tools/hashAssetFiles'],
//     },
//     resolver: {
//       sourceExts: ['jsx', 'js', 'ts', 'tsx'],
//     },
//   };
  
const { getDefaultConfig } = require('@expo/metro-config');

module.exports = getDefaultConfig(__dirname);

