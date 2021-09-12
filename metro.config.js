const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const blacklist = require('metro-config/src/defaults/blacklist');
const platforms = require('metro-config/src/defaults/defaults');
// blacklist is a function that takes an array of regexes and combines
// them with the default blacklist to return a single regex.
// blacklist ArcGIS folder and node_module if not on web

module.exports =  
({
resolver: {
  assetExts: [...defaultConfig.resolver.assetExts, 'db'],
  platforms: [ 'ios', 'android' ],
  blacklistRE: blacklist([/src[\/\\]services[\/\\]ArcGIS[\/\\]ArcGISMapWeb[\/\\]mapArcBase.tsx/, /node_modules[\/\\]\@arcgis\/.*/]),
},
});
