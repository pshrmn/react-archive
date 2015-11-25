/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _stories = __webpack_require__(1);

	var _stories2 = _interopRequireDefault(_stories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log((0, _stories2.default)());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * stories
	 * -------
	 *
	 * return an array of stories in the page
	 */
	var stories = function stories() {
	  var athings = document.querySelectorAll("tr.athing");
	  var stories = Array.from(athings).map(function (thing) {
	    return Object.assign({}, headlineData(thing), bylineData(thing.nextElementSibling));
	  });
	  return stories;
	};

	/*
	 * data from the headline of a submission
	 */
	var headlineData = function headlineData(headline) {
	  var tds = headline.querySelectorAll("td");
	  if (tds.length !== 3) {
	    console.error("unexpected tds for headline", headline, tds);
	    return {};
	  }
	  return Object.assign({}, votingData(tds[1]), submissionData(tds[2]));
	};

	var votingData = function votingData(element) {
	  return {
	    votes: Array.from(element.querySelectorAll("a")).map(function (link) {
	      return {
	        url: link.href,
	        type: link.id.split("_")[0]
	      };
	    })
	  };
	};

	var submissionData = function submissionData(element) {
	  var sub = element.querySelector("a");
	  var domain = element.querySelector(".sitebit a");
	  var domainText = domain === null ? "" : domain.textContent;
	  return {
	    title: sub.textContent,
	    subUrl: sub.href,
	    domain: domainText
	  };
	};

	/*
	 * data from the byline of a submission
	 */
	var bylineData = function bylineData(byline) {
	  var subtext = byline.querySelector(".subtext");
	  var score = subtext.querySelector(".score");
	  if (score === null) {
	    // a job post
	    return {
	      type: "job",
	      when: subtext.textContent.trim()
	    };
	  }

	  var links = subtext.querySelectorAll("a");
	  return Object.assign({}, { type: "sub" }, pointsData(score), userData(links[0]), whenData(links[1]), commentsData(links[2]));
	};

	var pointsData = function pointsData(element) {
	  return {
	    points: parseInt(element.textContent.split(" ")[0], 10)
	  };
	};

	var userData = function userData(element) {
	  return {
	    user: {
	      name: element.textContent,
	      url: element.href
	    }
	  };
	};

	var whenData = function whenData(element) {
	  return {
	    when: element.textContent.trim()
	  };
	};

	var commentsData = function commentsData(element) {
	  var text = element.textContent;
	  var commentCount = text === "discuss" ? 0 : parseInt(text.split(" ")[0], 10);
	  return {
	    id: element.href.split("=")[1],
	    comments: {
	      count: commentCount,
	      url: element.href
	    }
	  };
	};

	exports.default = stories;

/***/ }
/******/ ]);