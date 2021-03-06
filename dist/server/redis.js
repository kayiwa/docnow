"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRedis = getRedis;
exports.videosCountKey = exports.imagesCountKey = exports.usersCountKey = exports.tweetsCountKey = exports.waybackKey = exports.deselectedUrlsKey = exports.selectedUrlsKey = exports.tweetsKey = exports.urlsCountKey = exports.queueCountKey = exports.urlsKey = exports.metadataKey = exports.urlKey = void 0;

var _redis = _interopRequireDefault(require("redis"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _logger = _interopRequireDefault(require("./logger"));

_bluebird["default"].promisifyAll(_redis["default"].RedisClient.prototype);

var env = process.env.NODE_ENV;

function getRedis() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (env === 'production') {
    opts.host = opts.host || process.env.REDIS_HOST || '127.0.0.1';
    opts.db = 0;
  } else if (env === 'test') {
    opts.host = opts.host || process.env.REDIS_HOST || '127.0.0.1';
    opts.db = 9;
  } else if (env === 'development') {
    opts.host = opts.host || process.env.REDIS_HOST || '127.0.0.1';
    opts.db = 0;
  }

  _logger["default"].info('connecting to redis: ', opts);

  return _redis["default"].createClient(opts);
} // Functions to help construct redis keys consistently.
// url to url mappings


var urlKey = function urlKey(url) {
  return "url:".concat(url);
}; // url metadata


exports.urlKey = urlKey;

var metadataKey = function metadataKey(url) {
  return "metadata:".concat(url);
}; // a search's sorted set of url counts


exports.metadataKey = metadataKey;

var urlsKey = function urlsKey(search) {
  return "urls:".concat(search.id);
}; // the number of urls yet to be fetched for a search


exports.urlsKey = urlsKey;

var queueCountKey = function queueCountKey(search) {
  return "queue:".concat(search.id);
}; // the total number of urls to be checked in a search


exports.queueCountKey = queueCountKey;

var urlsCountKey = function urlsCountKey(search) {
  return "urlscount:".concat(search.id);
}; // the set of tweet ids that mention a url in a search


exports.urlsCountKey = urlsCountKey;

var tweetsKey = function tweetsKey(search, url) {
  return "tweets:".concat(url, ":").concat(search.id);
}; // the selected urls in a search


exports.tweetsKey = tweetsKey;

var selectedUrlsKey = function selectedUrlsKey(search) {
  return "urlsselected:".concat(search.id);
}; // the deselected urls in a search


exports.selectedUrlsKey = selectedUrlsKey;

var deselectedUrlsKey = function deselectedUrlsKey(search) {
  return "urlsdeselected:".concat(search.id);
}; // metadata for wayback information for a url


exports.deselectedUrlsKey = deselectedUrlsKey;

var waybackKey = function waybackKey(url) {
  return "wayback:".concat(url);
}; // number of tweets in a search


exports.waybackKey = waybackKey;

var tweetsCountKey = function tweetsCountKey(search) {
  return "tweetcount:".concat(search.id);
}; // user counts for a search


exports.tweetsCountKey = tweetsCountKey;

var usersCountKey = function usersCountKey(search) {
  return "usercounts:".concat(search.id);
}; // image counts for a search


exports.usersCountKey = usersCountKey;

var imagesCountKey = function imagesCountKey(search) {
  return "imagecounts:".concat(search.id);
}; // video counts for a search


exports.imagesCountKey = imagesCountKey;

var videosCountKey = function videosCountKey(search) {
  return "videocounts:".concat(search.id);
};

exports.videosCountKey = videosCountKey;