webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var l=n(1),u=r(l),a=n(30),i=r(a),o=n(163),c=(n(164),n(165)),f=r(c),s=n(177),d=(0,s.load)("recipes");null===d&&(d=[]);var p=(0,o.observable)({recipes:d,index:null});(0,o.autorun)(function(){(0,s.save)("recipes",p.recipes.filter(function(e){return null!==e}))}),i.default.render(u.default.createElement(f.default,{recipes:p}),document.getElementById("content"))},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=n(166),o=r(i),c=n(174),f=r(c),s=n(178),d=r(s),p=function(e){var t=e.recipes,n=t.recipes,r=t.index,l=null!==r?n[r]:null;return u.default.createElement("div",{className:"app"},u.default.createElement(d.default,null),u.default.createElement("div",null,u.default.createElement(f.default,{recipes:e.recipes}),u.default.createElement(o.default,{recipe:l})))};t.default=(0,a.observer)(p)},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=n(167),o=r(i),c=n(170),f=r(c),s=n(173),d=r(s),p=function(e){var t=e.recipe;return t?u.default.createElement("div",{className:"annotater"},u.default.createElement("div",{className:"edit-view"},u.default.createElement(d.default,{ytID:e.recipe.ytID}),u.default.createElement(o.default,{recipe:e.recipe})),u.default.createElement("div",{className:"print-view"},u.default.createElement(f.default,{recipe:e.recipe}))):null};t.default=(0,a.observer)(p)},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=n(168),o=r(i),c=n(169),f=r(c),s=function(e){var t=e.recipe;return u.default.createElement("div",{className:"live-editor"},u.default.createElement(o.default,{name:"name",change:function(e){t.name=e},value:t.name}),u.default.createElement(f.default,{name:"ingredients",change:function(e){t.ingredients=e},value:t.ingredients.join("\n")}),u.default.createElement(f.default,{name:"instructions",change:function(e){t.instructions=e},value:t.instructions.join("\n")}))};t.default=(0,a.observer)(s)},168:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){var t=e.change,n=e.name,r=e.value;return u.default.createElement("div",null,u.default.createElement("label",null,n,u.default.createElement("input",{type:"text",value:r,onChange:function(e){t(e.target.value)}})))};t.default=(0,a.observer)(i)},169:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){var t=e.change,n=e.name,r=e.value;return u.default.createElement("div",null,u.default.createElement("label",null,n,u.default.createElement("textarea",{value:r,onChange:function(e){t(e.target.value.split("\n"))}})))};t.default=(0,a.observer)(i)},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=n(171),o=r(i),c=n(172),f=r(c),s=function(e){var t=e.recipe;return u.default.createElement("div",{className:"recipe"},u.default.createElement("h2",null,t.name),u.default.createElement("h3",null,""!==t.ytID?"https://youtu.be/"+t.ytID:null),u.default.createElement(o.default,{values:t.ingredients||[]}),u.default.createElement(f.default,{values:t.instructions||[]}))};t.default=(0,a.observer)(s)},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){return u.default.createElement("div",{className:"ingredients"},u.default.createElement("h3",null,"Ingredients"),u.default.createElement("ul",null,e.values.filter(function(e){return""!==e}).map(function(e,t){return u.default.createElement("li",{key:t},e)})))};t.default=(0,a.observer)(i)},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){return u.default.createElement("div",{className:"instructions"},u.default.createElement("h3",null,"Instructions"),u.default.createElement("ol",null,e.values.filter(function(e){return""!==e}).map(function(e,t){return u.default.createElement("li",{key:t},e)})))};t.default=(0,a.observer)(i)},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){var t=e.ytID,n="https://www.youtube.com/embed/"+t,r=""===t?null:u.default.createElement("iframe",{width:"560",height:"315",src:n,frameBorder:"0"});return u.default.createElement("div",{className:"yt"},r)};t.default=(0,a.observer)(i)},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),a=r(u),i=n(164),o=n(175),c=r(o),f=n(176),s=r(f),d=function(e){var t=e.recipes,n=t.recipes,r=t.index,u=n.map(function(t,n){return null===t?null:a.default.createElement(c.default,l({key:n,index:n,active:n===r,delete:function(){e.recipes.recipes[n]=null},load:function(){e.recipes.index=n}},t))});return a.default.createElement("div",{className:"recipe-menu"},"Saved Recipes:",a.default.createElement("ul",{className:"saved-recipes"},u),a.default.createElement(s.default,{recipes:e.recipes}))};t.default=(0,i.observer)(d)},175:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(164),i=function(e){var t=e.ytID,n=e.name,r=e.active,l=""===t?u.default.createElement("div",{className:"empty-thumb"},"?"):u.default.createElement("img",{src:"https://i.ytimg.com/vi/"+t+"/mqdefault.jpg"}),a="thumbnail"+(r?" active":"");return u.default.createElement("li",{className:a,onClick:function(){return e.load(e.index)}},u.default.createElement("div",null,l),u.default.createElement("div",{className:"thumb-info"},n),u.default.createElement("div",{className:"thumb-controls"},u.default.createElement("button",{title:"delete recipe",type:"button",onClick:function(){return e.delete(e.index)}},String.fromCharCode(215))))};t.default=(0,a.observer)(i)},176:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),c=r(o),f=n(164),s=n(177),d=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n.createRecipe=n.createRecipe.bind(n),n.handleChange=n.handleChange.bind(n),n}return a(t,e),i(t,[{key:"createRecipe",value:function(e){var t=(0,s.parseVidID)(this.state.value),n=this.props.recipes,r=n.recipes,l=n.index;r.push({name:"",ytID:t,ingredients:[],instructions:[]}),l=r.length-1,this.setState({value:""})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("input",{placeholder:"YouTube URL...",value:this.state.value,onChange:this.handleChange}),c.default.createElement("button",{type:"button",onClick:this.createRecipe},"Add Recipe"))}}]),t}(c.default.Component);t.default=(0,f.observer)(d)},177:function(e,t){"use strict";function n(e,t){localStorage.setItem(e,JSON.stringify(t))}function r(e){return JSON.parse(localStorage.getItem(e))}function l(e){var t="",n=document.createElement("a");switch(n.href=e,n.hostname){case"www.youtube.com":if(""===n.search)break;for(var r=n.search.slice(1).split("&"),l=0;l<r.length;l++){var a=r[l].split("="),i=u(a,2),o=i[0],c=i[1];if("v"===o){t=c;break}}break;case"youtu.be":var r=n.pathname.split("/");t=r[r.length-1]}return t}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,l=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,u=e}finally{try{!r&&i.return&&i.return()}finally{if(l)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.save=n,t.load=r,t.parseVidID=l},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=r(l),a=n(179),i=r(a),o=function(e){return u.default.createElement("header",null,u.default.createElement("h1",null,"Annotated Meals"),u.default.createElement("p",null,"Did you see a recipe on YouTube that you'd like to make, but don't want to constantly pause the video while you're cooking? Annotated Meals lets you quickly type up a recipe from a video."),u.default.createElement(i.default,null),u.default.createElement("p",null,"For a quick test, try pasting this link ",u.default.createElement("strong",null,"https://www.youtube.com/watch?v=bjmYkPkjnVo"),' into the "YouTube URL..." input below.'))};t.default=o},179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),c=r(o),f=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={visible:!0},n.toggleVisible=n.toggleVisible.bind(n),n}return a(t,e),i(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.visible!==this.state.visible}},{key:"toggleVisible",value:function(e){e.preventDefault(),this.setState(function(e){return{visible:!e.visible}})}},{key:"render",value:function(){var e=this.state.visible?"Hide Help":"Show Help",t=this.state.visible?"":"hidden";return c.default.createElement("div",{className:"help"},c.default.createElement("h3",null,"How to:"),c.default.createElement("button",{onClick:this.toggleVisible},e),c.default.createElement("ol",{className:t},c.default.createElement("li",null,"Go to the YouTube page for the recipe you would like to make and copy the url from the address bar."),c.default.createElement("li",null,'Paste the url into the "YouTube URL..." box below, then click "Add Recipe"'),c.default.createElement("li",null,"An embedded copy of the video will appear in the page."),c.default.createElement("li",null,"Type in the name of the recipe."),c.default.createElement("li",null,"Press play on the video and write down the ingredients and instructions while you watch the video, pausing to catch up whenever the chef is moving faster than you can type."),c.default.createElement("li",null,'When you\'ve written everything down, click the "Save" button.'),c.default.createElement("li",null,"If you would like a paper copy, print the recipe. Only your input will be printed, everything else will be hidden.")))}}]),t}(c.default.Component);t.default=f}});