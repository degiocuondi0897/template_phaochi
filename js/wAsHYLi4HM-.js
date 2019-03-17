if (self.CavalryLogger) { CavalryLogger.start_js(["8W6Uz"]); }

__d("XGraphQLBatchAPIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/graphqlbatch/",{queries:{type:"String"},batch_name:{type:"String"},scheduler:{type:"Enum",enumType:1},shared_params:{type:"String"},fb_api_req_friendly_name:{type:"String"},uft_request_id:{type:"String"}})}),null);
__d("WebGraphQL",["ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){__p&&__p();var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){__p&&__p();var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var h=d&&d.batchName?{batch_name:d.batchName}:{};h=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},h,g,{queries:JSON.stringify(e)})).setHandler(function(a){__p&&__p();a=a.getPayload();try{var c=a.response.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(d){c=a.response;b("FBLogger")("webgraphql").catching(d).mustfix("Bad response: ","%s%s",c.substr(0,250),c.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&h.setRequestHeader("X-MSGR-Region",d.msgrRegion);b("gkx")("801901")?h.setAllowCrossPageTransition(!0):d&&d.allowCrossPageTransition!=null&&h.setAllowCrossPageTransition(d.allowCrossPageTransition);h.send();return a},__forController:g};return d}e.exports=g(b("XGraphQLBatchAPIController"))}),null);
__d("DOMContainer.react",["invariant","React","isNode"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.containerNode=null,c.setContainerNode=function(a){c.containerNode=a;var b=c.props.containerRef;typeof b==="function"&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.getDOMChild=function(){var a=this.props.children;b("isNode")(a)||g(0,1533);return a};d.shouldComponentUpdate=function(a){return a.children!==this.props.children};d.componentDidMount=function(){var a=this.containerNode;a!=null&&a.appendChild(this.getDOMChild())};d.componentDidUpdate=function(a){a=this.containerNode;if(a==null)return;while(a.lastChild)a.removeChild(a.lastChild);a.appendChild(this.getDOMChild())};d.render=function(){var a=this.props,c=a.display;a=babelHelpers.objectWithoutPropertiesLoose(a,["display"]);c=c==="block"?"div":"span";return b("React").createElement(c,babelHelpers["extends"]({},a,{ref:this.setContainerNode}),void 0)};return c}(b("React").Component);c.propTypes={display:a.oneOf(["inline","block"]),containerRef:a.func};c.defaultProps={display:"inline"};e.exports=c}),null);
__d("LineClamp.react",["cx","DOMContainer.react","Locale","React","ReactDOM","getElementText","getVendorPrefixedName","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("getVendorPrefixedName")("lineClamp");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={enableTooltip:!1},d.$2=function(a){a=b("ReactDOM").findDOMNode(a);a instanceof HTMLElement&&(d.innerElement=a,d.$3())},d.$4=function(a){a=b("ReactDOM").findDOMNode(a);a instanceof HTMLElement&&(d.rootElement=a,d.$3())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a;this.props.lineHeight&&!this.props.customEllipsisDisableGradient&&(a={bottom:this.props.lineHeight+"px"});var c;this.props.customEllipsis&&this.props.customEllipsisDisableGradient?c=b("Locale").isRTL()?"_1osp":"_1osq":c=b("Locale").isRTL()?"_4ik3 _2k5c":"_4ik3"+(this.props.enableCustomizedStyleForEllipsis?" _6q5n":"")+(this.props.enableCustomizedStyleForEllipsis?"":" _2k5d");return b("React").createElement("div",{style:a,className:c,key:"ellipsis"},this.props.customEllipsis?this.props.customEllipsis:"\u2026")};d.$3=function(){__p&&__p();if(!this.props.enableTooltipOnOverflow)return;if(!this.rootElement)return;var a=this.rootElement,b;if(this.$5())b=a.scrollHeight>a.offsetHeight;else{if(!this.innerElement)return;b=this.innerElement.offsetHeight>a.offsetHeight}this.state.enableTooltip!==b&&this.setState({enableTooltip:b})};d.$5=function(){return!!h&&!this.props.disableNative};d.componentDidMount=function(){this.$3()};d.componentDidUpdate=function(){this.$3()};d.render=function(){var a=this.$5(),c=b("joinClasses")(this.props.className,"_4ik4"+(a?" _4ik5":"")),d=this.props.hasXHPChildren?b("React").createElement(b("DOMContainer.react"),null,this.props.children):this.props.children,e={};this.props.lineHeight&&(e={lineHeight:this.props.lineHeight+"px"},this.props.fitHeightToShorterText?e=babelHelpers["extends"]({},e,{maxHeight:this.props.lineHeight*this.props.lines}):e=babelHelpers["extends"]({},e,{height:this.props.lineHeight*this.props.lines}));a?e[h]=this.props.lines:(c=b("joinClasses")(c,"clearfix"),this.props.customEllipsisDisableGradient?d=[b("React").createElement("div",{className:"_1osu",key:"spacer"}),this.$1(),b("React").createElement("div",{className:"_1osv",key:"inner",ref:this.$2},this.props.children)]:d=[b("React").createElement("div",{className:"_4ik6",key:"inner",ref:this.$2},d),this.$1()]);var f={};this.props.enableTooltipOnOverflow&&(f["data-hover"]="tooltip",this.state.enableTooltip&&(f["data-tooltip-content"]=a?b("getElementText")(this.rootElement):b("getElementText")(this.innerElement),this.props.tooltipDelay!=null&&(f["data-tooltip-delay"]=this.props.tooltipDelay)));return b("React").createElement("div",babelHelpers["extends"]({},f,{className:c,ref:this.$4,style:e}),d)};return c}(b("React").Component);e.exports=a}),null);
__d("BootloaderResource",[],(function(a,b,c,d,e,f){__p&&__p();var g={};a={preload:function(a){a.load()},read:function(b){__p&&__p();var a=b.getModuleIfRequired();if(!a){var c=b.getModuleId();if(!g[c]){b=g[c]=b.load();b["finally"](function(){delete g[c]})}throw g[c]}return a}};e.exports=a}),null);
__d("Network",["mixInEventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g=!0,h=a.navigator.connection,i={0:"unknown",1:"ethernet",2:"wifi",3:"2g",4:"3g"};function c(){return g}function d(a){if(a==g)return;g=a;l.emit(a?"online":"offline")}function f(){return h?h.bandwidth:g?Infinity:0}function j(){return h?h.metered:!1}function k(){var a=h?String(h.type):"0";return i[a]||a}var l={getBandwidth:f,getType:k,isMetered:j,isOnline:c,setOnline:d};b("mixInEventEmitter")(l,{online:!0,offline:!0});l=l;a.addEventListener?(a.addEventListener("online",d.bind(null,!0)),a.addEventListener("offline",d.bind(null,!1))):a.attachEvent&&(a.attachEvent("online",d.bind(null,!0)),a.attachEvent("offline",d.bind(null,!1)));e.exports=l}),null);
__d("fbjs/lib/CSSCore",["CSSCore"],(function(a,b,c,d,e,f){"use strict";e.exports=b("CSSCore")}),null);
__d("QE2Logger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();var g="qe2_log_exposure",h={},i={logExposureForUser:function(a,b){b=b?b:"",i.__logExposure(a,b,9)},logExposureForEmail:function(a,b){i.__logExposure(a,b,3)},logExposureForDatr:function(a){i.__logExposure(a,"",5)},logExposureForOculusLoggedOut:function(a){i.__logExposure(a,"",31)},logExposureForPage:function(a,b){i.__logExposure(a,b,7)},logExposureForBusiness:function(a,b){i.__logExposure(a,b,17)},logExposureForGroup:function(a,b){i.__logExposure(a,b,25)},logExposureForPhoneNumber:function(a,b){i.__logExposure(a,b,8)},logExposureForScimCompanyID:function(a,b){i.__logExposure(a,b,22)},logExposureForAnalyticsEntityID:function(a,b){i.__logExposure(a,b,27)},logExposureForAdAccountID:function(a,b){i.__logExposure(a,b,0)},logExposure:function(a,b,c){i.__logExposure(a,b,c)},__logExposure:function(a,c,d){var e=a+"|"+c;if(h[e])return;a={universeName:a,unitID:c,unitType:d};b("Banzai").post(g,a,{signal:!0});h[e]=!0}};e.exports=i}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=17;a=b("React").createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:b("React").PropTypes.oneOfType([b("React").PropTypes.string,b("React").PropTypes.shape({enter:b("React").PropTypes.string,leave:b("React").PropTypes.string,active:b("React").PropTypes.string}),b("React").PropTypes.shape({enter:b("React").PropTypes.string,enterActive:b("React").PropTypes.string,leave:b("React").PropTypes.string,leaveActive:b("React").PropTypes.string,appear:b("React").PropTypes.string,appearActive:b("React").PropTypes.string})]).isRequired,appear:b("React").PropTypes.bool,enter:b("React").PropTypes.bool,leave:b("React").PropTypes.bool,appearTimeout:b("React").PropTypes.number,enterTimeout:b("React").PropTypes.number,leaveTimeout:b("React").PropTypes.number},transition:function(a,c,d){__p&&__p();var e=b("ReactDOM").findDOMNode(this);if(!e){c&&c();return}var f=this.props.name[a]||this.props.name+"-"+a,g=this.props.name[a+"Active"]||f+"-active",h=null;a=function a(d){if(d&&d.target!==e)return;clearTimeout(h);b("fbjs/lib/CSSCore").removeClass(e,f);b("fbjs/lib/CSSCore").removeClass(e,g);b("ReactTransitionEvents").removeEndEventListener(e,a);c&&c()};b("fbjs/lib/CSSCore").addClass(e,f);this.queueClassAndNode(g,e);d?(h=setTimeout(a,d),this.transitionTimeouts.push(h)):b("ReactTransitionEvents").addEndEventListener(e,a)},queueClassAndNode:function(a,b){this.classNameAndNodeQueue.push({className:a,node:b}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,g))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(a){b("fbjs/lib/CSSCore").addClass(a.node,a.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},UNSAFE_componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(a){clearTimeout(a)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(a){this.props.appear?this.transition("appear",a,this.props.appearTimeout):a()},componentWillEnter:function(a){this.props.enter?this.transition("enter",a,this.props.enterTimeout):a()},componentWillLeave:function(a){this.props.leave?this.transition("leave",a,this.props.leaveTimeout):a()},render:function(){return b("React").Children.only(this.props.children)}});e.exports=a}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("emptyFunction");c={getChildMapping:function(a){if(!a)return a;var c={};b("React").Children.toArray(a).forEach(function(a){var b=a.key,d=c[b]===void 0;d&&(c[b]=a)});return c},mergeChildMappings:function(a,b){__p&&__p();a=a||{};b=b||{};function c(c){if(Object.prototype.hasOwnProperty.call(b,c))return b[c];else return a[c]}var d={},e=[];for(var f in a)Object.prototype.hasOwnProperty.call(b,f)?e.length&&(d[f]=e,e=[]):e.push(f);var g,h={};for(var i in b){if(Object.prototype.hasOwnProperty.call(d,i))for(g=0;g<d[i].length;g++){var j=d[i][g];h[d[i][g]]=c(j)}h[i]=c(i)}for(g=0;g<e.length;g++)h[e[g]]=c(e[g]);return h}};e.exports=c}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={children:b("ReactTransitionChildMapping").getChildMapping(d.props.children)},d.performAppear=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillAppear?b.componentWillAppear(d.$1.bind(babelHelpers.assertThisInitialized(d),a)):d.$1(a)},d.$1=function(a){var c=d.refs[a];c.componentDidAppear&&c.componentDidAppear();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performEnter=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillEnter?b.componentWillEnter(d.$2.bind(babelHelpers.assertThisInitialized(d),a)):d.$2(a)},d.$2=function(a){var c=d.refs[a];c.componentDidEnter&&c.componentDidEnter();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&d.performLeave(a)},d.performLeave=function(a){d.currentlyTransitioningKeys[a]=!0;var b=d.refs[a];b.componentWillLeave?b.componentWillLeave(d.$3.bind(babelHelpers.assertThisInitialized(d),a)):d.$3(a)},d.$3=function(a){var c=d.refs[a];c.componentDidLeave&&c.componentDidLeave();delete d.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(d.props.children);c&&Object.prototype.hasOwnProperty.call(c,a)?d.performEnter(a):d.setState(function(b){b=Object.assign({},b.children);delete b[a];return{children:b}})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]};d.componentDidMount=function(){var a=this.state.children;for(var b in a)a[b]&&this.performAppear(b)};d.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();a=b("ReactTransitionChildMapping").getChildMapping(a.children);var c=this.state.children;this.setState({children:b("ReactTransitionChildMapping").mergeChildMappings(c,a)});var d;for(d in a){var e=c&&Object.prototype.hasOwnProperty.call(c,d);a[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToEnter.push(d)}for(d in c){e=a&&Object.prototype.hasOwnProperty.call(a,d);c[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToLeave.push(d)}};d.componentDidUpdate=function(){var a=this.keysToEnter;this.keysToEnter=[];a.forEach(this.performEnter);a=this.keysToLeave;this.keysToLeave=[];a.forEach(this.performLeave)};d.render=function(){__p&&__p();var a=[];for(var c in this.state.children){var d=this.state.children[c];d&&a.push(b("React").cloneElement(this.props.childFactory(d),{ref:c,key:c}))}d=Object.assign({},this.props);delete d.transitionLeave;delete d.transitionName;delete d.transitionAppear;delete d.transitionEnter;delete d.childFactory;delete d.transitionLeaveTimeout;delete d.transitionEnterTimeout;delete d.transitionAppearTimeout;delete d.component;return b("React").createElement(this.props.component,d,a)};return c}(b("React").Component);a.displayName="ReactTransitionGroup";a.propTypes={component:b("React").PropTypes.any,childFactory:b("React").PropTypes.func};a.defaultProps={component:"span",childFactory:b("fbjs/lib/emptyFunction").thatReturnsArgument};e.exports=a}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b="transition"+a+"Timeout",c="transition"+a;return function(a){if(a[c])if(a[b]==null)return new Error(b+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof a[b]!=="number")return new Error(b+" must be a number (in milliseconds)")}}c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){return b("React").createElement(b("ReactCSSTransitionGroupChild"),{name:d.props.transitionName,appear:d.props.transitionAppear,enter:d.props.transitionEnter,leave:d.props.transitionLeave,appearTimeout:d.props.transitionAppearTimeout,enterTimeout:d.props.transitionEnterTimeout,leaveTimeout:d.props.transitionLeaveTimeout},a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement(b("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$1}))};return c}(b("React").Component);c.displayName="ReactCSSTransitionGroup";c.propTypes={transitionName:b("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:b("React").PropTypes.bool,transitionEnter:b("React").PropTypes.bool,transitionLeave:b("React").PropTypes.bool,transitionAppearTimeout:a("Appear"),transitionEnterTimeout:a("Enter"),transitionLeaveTimeout:a("Leave")};c.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0};e.exports=c}),null);
__d("lazyLoadComponent",["BootloaderResource","react"],(function(a,b,c,d,e,f){function a(a){function c(c){var d=b("BootloaderResource").read(a);return b("react").createElement(d,c)}c.displayName="lazyLoadComponent("+a.getModuleId()+")";return c}e.exports=a}),null);
__d("WebGraphQLLegacyHelper",["invariant"],(function(a,b,c,d,e,f,g){"use strict";e.exports={getURI:function(a){var b=a.controller,c=a.docID,d=a.queryID;a=a.variables;c!=d&&(c||d)!=null||g(0,5819,c,d);b=b.getURIBuilder();d?b.setFBID("query_id",d):b.setFBID("doc_id",c);a&&b.setString("variables",JSON.stringify(a));return b.getURI()}}}),null);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("WebGraphQLQueryBase",["invariant","WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.__getVariables=function(){return this.$1};c.__getDocID=function(){return this.constructor.__getDocID()};a.__getController=function(){return b("XWebGraphQLQueryController")};a.__getDocID=function(){g(0,1804)};a.getURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:a})};a.getLegacyURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),queryID:this.getQueryID(),variables:a})};a.getQueryID=function(){g(0,5095)};return a}();e.exports=a}),null);
__d("cssVar",[],(function(a,b,c,d,e,f){function a(a){throw new Error('cssVar("'+a+'"): Unexpected class transformation.')}e.exports=a}),null);