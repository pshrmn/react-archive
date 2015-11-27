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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _pageType = __webpack_require__(3);

	var _pageType2 = _interopRequireDefault(_pageType);

	var _pages = __webpack_require__(4);

	var _HackerNews = __webpack_require__(19);

	var _HackerNews2 = _interopRequireDefault(_HackerNews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var type = (0, _pageType2.default)();
	var page = undefined;
	switch (type) {
	  case "submission":
	    render(type, (0, _pages.storyPage)());
	    break;
	  case "comments":
	    render(type, (0, _pages.commentsPage)());
	    break;
	  /*
	  case "reply":
	    page = replyPage();
	    break; 
	  */
	  default:
	    render(type);
	    break;
	}

	function render(type, page) {
	  if (type !== "no-op") {
	    var holder = document.createElement("div");
	    holder.classList.add("hn-react");
	    document.body.appendChild(holder);

	    _reactDom2.default.render(_react2.default.createElement(_HackerNews2.default, { type: type,
	      page: page }), holder);
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _storyPage = __webpack_require__(5);

	Object.defineProperty(exports, "storyPage", {
	  enumerable: true,
	  get: function get() {
	    return _storyPage.default;
	  }
	});

	var _commentsPage = __webpack_require__(12);

	Object.defineProperty(exports, "commentsPage", {
	  enumerable: true,
	  get: function get() {
	    return _commentsPage.default;
	  }
	});

	var _replyPage = __webpack_require__(16);

	Object.defineProperty(exports, "replyPage", {
	  enumerable: true,
	  get: function get() {
	    return _replyPage.default;
	  }
	});

	var _noopPage = __webpack_require__(18);

	Object.defineProperty(exports, "noopPage", {
	  enumerable: true,
	  get: function get() {
	    return _noopPage.default;
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(6);

	var _user2 = _interopRequireDefault(_user);

	var _stories = __webpack_require__(7);

	var _stories2 = _interopRequireDefault(_stories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _stories2.default)());
	};

/***/ },
/* 6 */
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
	      user: {
	        name: userLink.textContent,
	        url: userLink.href,
	        points: points
	      }
	    };
	  } else {
	    return {
	      user: {}
	    };
	  }
	};

	exports.default = user;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(8);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _headline = __webpack_require__(9);

	var _headline2 = _interopRequireDefault(_headline);

	var _byline = __webpack_require__(11);

	var _byline2 = _interopRequireDefault(_byline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var story = function story(element) {
	  return Object.assign({}, (0, _headline2.default)(element), (0, _byline2.default)(element.nextElementSibling));
	};

	exports.default = story;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(10);

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
	    url: sub.href,
	    domain: domainText
	  };
	};

	exports.default = headlineData;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var votingData = function votingData(element) {
	  return {
	    votes: Array.from(element.querySelectorAll("a")).reduce(function (obj, link) {
	      obj[link.id.split("_")[0]] = link.href;
	      return obj;
	    }, {})
	  };
	};

	exports.default = votingData;

/***/ },
/* 11 */
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
	  // the comments is the last link
	  var last = links[links.length - 1];
	  return Object.assign({}, { type: "sub" }, pointsData(score), userData(links[0]), whenData(links[1]), commentsData(last));
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

	/*
	 * this is broken on comments pages where the comments is actually links[4]
	 * but has not yet been fixed
	 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(6);

	var _user2 = _interopRequireDefault(_user);

	var _comments = __webpack_require__(13);

	var _comments2 = _interopRequireDefault(_comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _comments2.default)());
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(8);

	var _story2 = _interopRequireDefault(_story);

	var _comment = __webpack_require__(14);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(15);

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(10);

	var _votes2 = _interopRequireDefault(_votes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * comment
	 * -------
	 *
	 * return the data that represents a comment. There are two types of comments, regular
	 * ones, and missing comments. Missing comments contain no data.
	 */
	var comment = function comment(element) {
	  // comments aren't actually nested, instead they are indented with an image to
	  // show how they should be nested
	  var indentationHolder = element.querySelector(".ind");
	  var indentation = indentationHolder.querySelector("img");
	  var level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
	  var commentHolder = element.querySelector(".comment > span");
	  // missing comment
	  if (commentHolder === null) {
	    return {
	      level: level,
	      type: "missing",
	      children: []
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
	    paragraphs: paragraphs,
	    reply: reply,
	    children: []
	  }, (0, _votes2.default)(element.querySelector(".votelinks")), headline(element.querySelector("td.default div")));
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
	    id: links[1].href.split("=")[1],
	    parent: parent
	  };
	};

	exports.default = comment;

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(6);

	var _user2 = _interopRequireDefault(_user);

	var _reply = __webpack_require__(17);

	var _reply2 = _interopRequireDefault(_reply);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _reply2.default)());
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _comment = __webpack_require__(14);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(15);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(6);

	var _user2 = _interopRequireDefault(_user);

	var _stories = __webpack_require__(7);

	var _stories2 = _interopRequireDefault(_stories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)());
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(20);

	var _Header2 = _interopRequireDefault(_Header);

	var _StoryPage = __webpack_require__(21);

	var _StoryPage2 = _interopRequireDefault(_StoryPage);

	var _CommentsPage = __webpack_require__(25);

	var _CommentsPage2 = _interopRequireDefault(_CommentsPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "HackerNews",

	  render: function render() {
	    var _props = this.props;
	    var page = _props.page;
	    var type = _props.type;

	    var content = null;
	    switch (type) {
	      case "submission":
	        content = _react2.default.createElement(_StoryPage2.default, page);
	        break;
	      case "comments":
	        content = _react2.default.createElement(_CommentsPage2.default, page);
	    }
	    return _react2.default.createElement(
	      "div",
	      { className: "hacker-news" },
	      _react2.default.createElement(_Header2.default, { user: page.user }),
	      content
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    // hide the regular content
	    if (this.props.type === "submission" || this.props.type === "comments") {
	      document.querySelector("center").style.display = "none";
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    document.querySelector("center").style.display = "block";
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Header",

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return false;
	  },
	  render: function render() {
	    var user = this.props.user;

	    return _react2.default.createElement(
	      "header",
	      null,
	      _react2.default.createElement(
	        "nav",
	        null,
	        _react2.default.createElement(
	          "li",
	          { className: "home" },
	          _react2.default.createElement(
	            "a",
	            { href: "/" },
	            "Hacker News"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "form",
	            { method: "get", action: "//hn.algolia.com" },
	            _react2.default.createElement("input", { type: "text", placeholder: "Search", name: "q" })
	          )
	        )
	      ),
	      _react2.default.createElement(User, user),
	      _react2.default.createElement(
	        "nav",
	        { className: "general" },
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newest" },
	            "New"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newcomments" },
	            "Comments"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/show" },
	            "Show"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/ask" },
	            "Ask"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/jobs" },
	            "Jobs"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/submit" },
	            "Submit"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "nav",
	        null,
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newsguidelines.html" },
	            "Guidelines"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newsfaq.html" },
	            "FAQ"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "mailto:hn@ycombinator.com" },
	            "Support"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "https://github.com/HackerNews/API" },
	            "API"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/security.html" },
	            "Security"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/lists" },
	            "Lists"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/bookmarklet.html" },
	            "Bookmarklet"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/dmca.html" },
	            "DMCA"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/apply" },
	            "Apply to YC"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "mailto:hn@ycombinator.com" },
	            "Contact"
	          )
	        )
	      )
	    );
	  }
	});

	var User = _react2.default.createClass({
	  displayName: "User",

	  render: function render() {
	    if (this.props.name === undefined) {
	      var _location = window.location;
	      var nextURL = "";
	      return _react2.default.createElement(
	        "nav",
	        { className: "user" },
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "form",
	            { method: "post", action: "login" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "Login"
	            ),
	            _react2.default.createElement("input", { type: "hidden", name: "goto", value: "/" }),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement("input", { type: "text", name: "acct", size: "20",
	                placeholder: "username",
	                autoCorrect: "off",
	                autoCapitalize: "off" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement("input", { type: "password", name: "pw", size: "20",
	                placeholder: "password" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement(
	                "button",
	                null,
	                "Login"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "form",
	            { method: "post", action: "login" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "Create account"
	            ),
	            _react2.default.createElement("input", { type: "hidden", name: "goto", value: "/" }),
	            _react2.default.createElement("input", { type: "hidden", name: "creating", value: "t" }),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement("input", { type: "text", name: "acct", size: "20",
	                placeholder: "username",
	                autoCorrect: "off",
	                autoCapitalize: "off" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement("input", { type: "password", name: "pw", size: "20",
	                placeholder: "password" })
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              _react2.default.createElement(
	                "button",
	                null,
	                "Create Account"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/forgot?id=" },
	            "Forgot Password?"
	          )
	        )
	      );
	    } else {
	      var _props = this.props;
	      var name = _props.name;
	      var url = _props.url;
	      var points = _props.points;

	      return _react2.default.createElement(
	        "nav",
	        { className: "user" },
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/user?id=" + name },
	            name
	          ),
	          " (",
	          points,
	          ")"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/threads?id=" + name },
	            "Threads"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/logout?goto=" + location.pathname + location.search },
	            "Logout"
	          )
	        )
	      );
	    }
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SubStory = __webpack_require__(22);

	var _SubStory2 = _interopRequireDefault(_SubStory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "StoryPage",

	  render: function render() {
	    var stories = this.props.stories;

	    var submissions = stories.map(function (s, i) {
	      return s.type === "sub" ? _react2.default.createElement(_SubStory2.default, _extends({ key: i }, s)) : _react2.default.createElement(JobStory, _extends({ key: i }, s));
	    });
	    return _react2.default.createElement(
	      "div",
	      null,
	      submissions
	    );
	  }
	});

	var JobStory = _react2.default.createClass({
	  displayName: "JobStory",

	  render: function render() {
	    var _props = this.props;
	    var url = _props.url;
	    var title = _props.title;

	    return _react2.default.createElement(
	      "div",
	      { className: "story job" },
	      _react2.default.createElement(
	        "div",
	        { className: "voting" },
	        "(job)"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "info" },
	        _react2.default.createElement(
	          "a",
	          { href: url, target: "_blank" },
	          title
	        )
	      )
	    );
	  }
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Vote = __webpack_require__(23);

	var _Vote2 = _interopRequireDefault(_Vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubStory = _react2.default.createClass({
	  displayName: "SubStory",

	  getInitialState: function getInitialState() {
	    return {
	      canVote: true
	    };
	  },
	  /*
	   * once a submission has been voted on, it cannot be changed
	   */
	  voted: function voted() {
	    this.setState({
	      canVote: false
	    });
	  },
	  render: function render() {
	    var _props = this.props;
	    var url = _props.url;
	    var title = _props.title;
	    var id = _props.id;
	    var points = _props.points;
	    var comments = _props.comments;
	    var user = _props.user;
	    var votes = _props.votes;
	    var when = _props.when;
	    var domain = _props.domain;
	    var canVote = this.state.canVote;

	    var upVote = canVote && votes.up !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "up", url: votes.up, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var downVote = canVote && votes.down !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "down", url: votes.down, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var more = domain !== undefined ? _react2.default.createElement(
	      "div",
	      { className: "more" },
	      "more from ",
	      _react2.default.createElement(
	        "a",
	        { href: "/from?site=" + domain },
	        domain
	      )
	    ) : null;
	    return _react2.default.createElement(
	      "div",
	      { className: "story sub" },
	      _react2.default.createElement(
	        "div",
	        { className: "voting" },
	        upVote,
	        _react2.default.createElement(
	          "div",
	          { className: "points" },
	          points
	        ),
	        downVote
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "info" },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: url, target: "_blank" },
	            title
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "byline" },
	          _react2.default.createElement(
	            "a",
	            { href: comments.url, target: "_blank" },
	            comments.count,
	            " comments"
	          ),
	          " ",
	          "submitted by ",
	          _react2.default.createElement(
	            "a",
	            { href: user.url, target: "_blank" },
	            user.name
	          ),
	          " ",
	          when
	        ),
	        more
	      )
	    );
	  }
	});

	exports.default = SubStory;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _vote = __webpack_require__(24);

	var _vote2 = _interopRequireDefault(_vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Vote",

	  voteHandler: function voteHandler(event) {
	    event.preventDefault();
	    (0, _vote2.default)(this.props.url);
	    this.props.voted();
	  },
	  render: function render() {
	    var _props = this.props;
	    var id = _props.id;
	    var type = _props.type;

	    var code = 9632;
	    if (type === "up") {
	      code = 9650;
	    } else if (type === "down") {
	      code = 9660;
	    }
	    return _react2.default.createElement(
	      "div",
	      { className: "vote",
	        onClick: this.voteHandler },
	      String.fromCharCode(code)
	    );
	  }
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * vote
	 * ----
	 *
	 * the way that voting on hacker news works is that the href of the vote link
	 * that was clicked is set as the src of a new Image, thus "pinging" the server
	 * with the voting information encoded in the src. The auth query parameter
	 * is unique for each voting url, so this has can't be generated just by knowing
	 * the story's id
	 */

	exports.default = function (url) {
	  var pinger = new Image();
	  pinger.src = url;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SubStory = __webpack_require__(22);

	var _SubStory2 = _interopRequireDefault(_SubStory);

	var _Comment = __webpack_require__(26);

	var _Comment2 = _interopRequireDefault(_Comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "CommentsPage",

	  render: function render() {
	    var _props = this.props;
	    var type = _props.type;
	    var comments = _props.comments;

	    var commElements = comments.map(function (c, i) {
	      return _react2.default.createElement(_Comment2.default, _extends({ key: i }, c));
	    });

	    var header = null;
	    switch (type) {
	      case "single":
	        header = _react2.default.createElement(_Comment2.default, this.props.comment);
	        break;
	      case "all":
	        header = _react2.default.createElement(_SubStory2.default, this.props.story);
	        break;
	    }

	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "div",
	        { className: "comments-main" },
	        header
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "comments" },
	        commElements
	      )
	    );
	  }
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Vote = __webpack_require__(23);

	var _Vote2 = _interopRequireDefault(_Vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comment = _react2.default.createClass({
	  displayName: "Comment",

	  getInitialState: function getInitialState() {
	    return {
	      canVote: true
	    };
	  },
	  voted: function voted() {
	    this.setState({
	      canVote: false
	    });
	  },
	  render: function render() {
	    var _props = this.props;
	    var user = _props.user;
	    var votes = _props.votes;
	    var when = _props.when;
	    var paragraphs = _props.paragraphs;
	    var parent = _props.parent;
	    var children = _props.children;
	    var direct = _props.direct;
	    var reply = _props.reply;
	    var type = _props.type;
	    var id = _props.id;
	    var canVote = this.state.canVote;

	    var childrenElements = children.map(function (c, i) {
	      return _react2.default.createElement(Comment, _extends({ key: i }, c));
	    });

	    if (type === "missing") {
	      return _react2.default.createElement(
	        "div",
	        { className: "comment" },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "div",
	            { className: "message" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "[comment no longer exists]"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "children" },
	            childrenElements
	          )
	        )
	      );
	    }

	    var upVote = canVote && votes.up !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "up", url: votes.up, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var downVote = canVote && votes.down !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "down", url: votes.down, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });

	    var ps = paragraphs.map(function (p, i) {
	      if (p[0] === ">") {
	        return _react2.default.createElement(
	          "blockquote",
	          { key: i },
	          p.slice(1)
	        );
	      }
	      return _react2.default.createElement(
	        "p",
	        { key: i },
	        p
	      );
	    });
	    return _react2.default.createElement(
	      "div",
	      { className: "comment" },
	      _react2.default.createElement(
	        "div",
	        { className: "votes" },
	        upVote,
	        downVote
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "user" },
	          _react2.default.createElement(
	            "a",
	            { href: user.url },
	            user.name
	          ),
	          " ",
	          when,
	          " ",
	          _react2.default.createElement(
	            "a",
	            { href: "/item?id=" + id },
	            "direct"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "message" },
	          ps
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "children" },
	          childrenElements
	        )
	      )
	    );
	  }
	});

	exports.default = Comment;

/***/ }
/******/ ]);