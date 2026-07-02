var e = require("../../../../utils/catalog").resolveAssetPath,
  s = require("../../../../utils/audioEngine"),
  t = s.playSound,
  a = s.warmupAudioEngine,
  r = require("../../../../utils/assetCache"),
  u = r.preloadAssetPaths,
  i = r.getCachedAssetPath;
module.exports = {
  resolveAssetPath: e,
  playSound: t,
  warmupAudioEngine: a,
  preloadAssetPaths: u,
  getCachedAssetPath: i,
};
