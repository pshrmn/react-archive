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

	var _comments = __webpack_require__(6);

	var _comments2 = _interopRequireDefault(_comments);

	var _reply = __webpack_require__(9);

	var _reply2 = _interopRequireDefault(_reply);

	var _pageType = __webpack_require__(10);

	var _pageType2 = _interopRequireDefault(_pageType);

	var _user = __webpack_require__(11);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var type = (0, _pageType2.default)();
	console.log(type);
	console.log((0, _user2.default)());
	switch (type) {
	  case "submission":
	    console.log((0, _stories2.default)());
	    break;
	  case "comments":
	    console.log((0, _comments2.default)());
	    break;
	  case "reply":
	    console.log((0, _reply2.default)());
	    break;
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(2);

	var _story2 = _interopRequireDefault(_story);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * stories
	 * -------
	 *
	 * return an array of stories in the page
	 */
	var stories = function stories() {
	  return {
	    stories: Array.from(document.querySelectorAll("tr.athing")).map(function (thing) {
	      return (0, _story2.default)(thing);
	    })
	  };
	};

	exports.default = stories;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _headline = __webpack_require__(3);

	var _headline2 = _interopRequireDefault(_headline);

	var _byline = __webpack_require__(5);

	var _byline2 = _interopRequireDefault(_byline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var story = function story(element) {
	  return Object.assign({}, (0, _headline2.default)(element), (0, _byline2.default)(element.nextElementSibling));
	};

	exports.default = story;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(4);

	var _votes2 = _interopRequireDefault(_votes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * data from the headline of a submission
	 */
	var headlineData = function headlineData(headline) {
	  var tds = headline.querySelectorAll("td");
	  if (tds.length !== 3) {
	    console.error("unexpected tds for headline", headline, tds);
	    return {};
	  }
	  return Object.assign({}, (0, _votes2.default)(tds[1]), submissionData(tds[2]));
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

	exports.default = headlineData;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.default = votingData;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.default = bylineData;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(2);

	var _story2 = _interopRequireDefault(_story);

	var _comment = __webpack_require__(7);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(8);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * comments
	 * --------
	 *
	 * There are two kinds of comments pages.
	 * 1.) all comments - this is headed by a submission and lists all of the
	 *     comments for a submission in a comment tree
	 * 2.) single comments - this is headed by a comment and list all of the child
	 *     comments in a comment tree
	 */
	var comments = function comments() {
	  var headline = document.querySelector(".athing");
	  var commentTree = document.querySelector(".comment-tree");
	  return Object.assign({}, header(headline), commentData(commentTree), replyForm(document.querySelector("form[method=post]")));
	};

	var header = function header(element) {
	  if (element.querySelector(".title") !== null) {
	    return {
	      type: "all",
	      story: (0, _story2.default)(element)
	    };
	  } else {
	    return {
	      type: "single",
	      comment: (0, _comment2.default)(element)
	    };
	  }
	};

	var replyForm = function replyForm(form) {
	  return {
	    replyForm: form !== null ? (0, _commentForm2.default)(form) : null
	  };
	};

	var commentData = function commentData(tree) {
	  if (tree === null) {
	    return {
	      comments: []
	    };
	  }
	  return {
	    comments: buildTree(Array.from(tree.querySelectorAll(".athing")).map(function (element) {
	      return (0, _comment2.default)(element);
	    }))
	  };
	};

	/*
	 * return an array of comments. Comments are nested based on their level, with the
	 * returned array consisting of root (level=0) comments, and any nested comments
	 * exisiting in the children array of their parent
	 */
	var buildTree = function buildTree(comments) {
	  var commentTree = [];
	  var levels = {};
	  comments.forEach(function (c) {
	    var level = c.level;
	    // set the comment at current level to current comment

	    levels[level] = c;
	    c.children = [];
	    // special case for root (level=0) comments
	    if (level === 0) {
	      commentTree.push(c);
	    } else {
	      var parent = levels[level - 1];
	      if (parent === undefined) {
	        console.error("missing parent", level - 1, comments, levels);
	      }
	      parent.children.push(c);
	    }
	  });
	  return commentTree;
	};

	exports.default = comments;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(4);

	var _votes2 = _interopRequireDefault(_votes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * comment
	 * -------
	 *
	 * return the data that represents a comment. There are two types of comments, regular
	 * ones, and flagged comments. Flagged comments contain no data.
	 */
	var comment = function comment(element) {
	  // comments aren't actually nested, instead they are indented with an image to
	  // show how they should be nested
	  var indentationHolder = element.querySelector(".ind");
	  var indentation = indentationHolder.querySelector("img");
	  var level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
	  var commentHolder = element.querySelector(".comment > span");
	  // flagged comment
	  if (commentHolder === null) {
	    return {
	      level: level,
	      type: "flagged"
	    };
	  }
	  // get the text of the comment. This does not preserve any markdown elements
	  // eg italics
	  var paragraphs = Array.from(commentHolder.childNodes).filter(function (child) {
	    return child.classList === undefined || !child.classList.contains("reply");
	  }).reduce(function (arr, child) {
	    var index = arr.length - 1;
	    var current = arr[index];
	    if (child.tagName === "P") {
	      arr.push(child.textContent);
	      return arr;
	    } else {
	      current += child.textContent;
	      arr[index] = current;
	      return arr;
	    }
	  }, [""]).map(function (t) {
	    return t.trim();
	  });
	  var replyLink = element.querySelector(".reply a");
	  var reply = replyLink !== null ? replyLink.href : "";
	  return Object.assign({}, {
	    level: level,
	    type: "normal",
	    votes: (0, _votes2.default)(element.querySelector(".votelinks")),
	    paragraphs: paragraphs,
	    reply: reply
	  }, headline(element.querySelector("td.default div")));
	};

	var headline = function headline(element) {
	  var links = element.querySelectorAll("a");
	  var parentHolder = element.querySelector(".par a");
	  var parent = parentHolder !== null ? parentHolder.href : "";
	  return {
	    user: {
	      name: links[0].textContent,
	      url: links[0].href
	    },
	    direct: links[1].href,
	    when: links[1].textContent,
	    parent: parent
	  };
	};

	exports.default = comment;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var commentForm = function commentForm(form) {
	  var parent = form.querySelector("input[name=parent]");
	  // goto gets highlighted using syntax highlighter, so using togo intead
	  var togo = form.querySelector("input[name=goto]");
	  var hmac = form.querySelector("input[name=hmac]");
	  return {
	    method: "post",
	    action: "comment",
	    parent: parent.value,
	    goto: togo.value,
	    hmac: hmac.value
	  };
	};

	exports.default = commentForm;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _comment = __webpack_require__(7);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(8);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reply = function reply() {
	  return {
	    comment: (0, _comment2.default)(document.querySelector(".athing")),
	    replyForm: (0, _commentForm2.default)(document.querySelector("form[method=post]"))
	  };
	};

	exports.default = reply;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var location = window.location;
	  switch (location.pathname) {
	    case "/":
	    case "/news":
	    case "/jobs":
	      return "submission";
	    case "/item":
	      return "comments";
	    case "/reply":
	      return "reply";
	    default:
	      return "no-op";
	  }
	};

	; /*
	   * return a string representing the type of page
	   *
	   * types:
	   * submission - a page filled with submissions
	   * comments - a page filled with comments
	   * no-op - a page where nothing should be done?
	   */

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var user = function user() {
	  var pagetops = document.querySelectorAll(".pagetop");
	  if (!pagetops[1]) {
	    return {};
	  }
	  var holder = pagetops[1];
	  var links = holder.querySelectorAll("a");
	  if (links.length === 2) {
	    var userLink = links[0];
	    var pointsText = userLink.nextSibling.textContent.trim();
	    var pointsRegex = /\((.+)\)/;
	    var matches = pointsRegex.exec(pointsText);
	    // I don't actually know how points are displayed for 1000+, so just keep
	    // it as a string
	    var points = matches[1] !== undefined ? matches[1] : "0";
	    return {
	      name: userLink.textContent,
	      url: userLink.href,
	      points: points
	    };
	  } else {
	    return {};
	  }
	};

	exports.default = user;

/***/ }
/******/ ]);