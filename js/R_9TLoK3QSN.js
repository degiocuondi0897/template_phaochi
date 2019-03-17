if (self.CavalryLogger) { CavalryLogger.start_js(["5vl4T"]); }

__d("VideoFeedFastPreloadController",["DOMQuery","Run"],(function(a,b,c,d,e,f){var g=0,h={preload:function(c){g<2&&(c=b("DOMQuery").scry(c,"video")[0],c instanceof a.HTMLVideoElement&&(g||b("Run").onBeforeUnload(function(){return h.reset()}),c.preload="auto",g+=1))},reset:function(){g=0}};h.reset();e.exports=h}),null);
__d("MaybeNativePromise",["Promise"],(function(a,b,c,d,e,f){"use strict";c=a.Promise||b("Promise");b("Promise").resolve();e.exports=c}),null);
__d("VideoAkamaiRequestHelper",["URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a.toLowerCase().indexOf("akamai")!==-1}function g(a){var b=a.startByte;a=a.endByte;if(b!=void 0&&!(b===0&&a==void 0)){b="bytes="+b+"-"+(a==void 0?"":a);return{Range:b}}return null}function c(a){var c=new(b("URI"))(a);c=c.getQueryData();var d=c.startByte;c=c.endByte;return g({baseUrl:a,startByte:d,endByte:c})}e.exports={isAkamai:a,getRequestHeaders:g,getRequestHeadersFromUrl:c}}),null);
__d("VideoPlayerShakaExperimentsConfig",["VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){"use strict";e.exports=b("VideoPlayerShakaExperimentsPayload").experiments}),null);
__d("VideoPlayerShakaConfigExposureCondition",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ANY_PARAM_ACCESSED:"any_param_accessed",ALL_PARAMS_ACCESSED:"all_params_accessed"})}),null);
__d("VideoPlayerShakaExposureLogger",["QE2Logger","VideoPlayerShakaConfigExposureCondition","VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){var g=Object.keys(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig).reduce(function(a,c){a[c]={};a[c].exposureCondition=b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_condition;a[c].exposureParams=new Set(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_params);return a},{});a={logExposureForParamMaybe:function(a){Object.keys(g).forEach(function(c){g[c].exposureCondition===b("VideoPlayerShakaConfigExposureCondition").ANY_PARAM_ACCESSED&&g[c].exposureParams.has(a)?(b("QE2Logger").logExposureForUser(c),delete g[c]):g[c].exposureCondition===b("VideoPlayerShakaConfigExposureCondition").ALL_PARAMS_ACCESSED&&(g[c].exposureParams["delete"](a),g[c].exposureParams.size===0&&(b("QE2Logger").logExposureForUser(c),delete g[c]))})}};e.exports=a}),null);
__d("VideoPlayerShakaParsedContextualConfig",["EventEmitter","FBLogger","VideoPlayerShakaContextualConfig"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoPlayerShakaParsedContextualConfig1=null;b.$VideoPlayerShakaParsedContextualConfig2={};b.parseConfig();return b}var d=c.prototype;d.getGlobalConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig2};d.getStaticConfig=function(){return b("VideoPlayerShakaContextualConfig").staticConfig};d.getRawContextualConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig1};d.parseConfig=function(){this.$VideoPlayerShakaParsedContextualConfig3(),this.$VideoPlayerShakaParsedContextualConfig4(),this.emit("configChange")};d.$VideoPlayerShakaParsedContextualConfig3=function(){if(!b("VideoPlayerShakaContextualConfig").rawContextualConfig)return;try{this.$VideoPlayerShakaParsedContextualConfig1=JSON.parse(b("VideoPlayerShakaContextualConfig").rawContextualConfig)}catch(a){b("FBLogger")("VideoPlayerShakaParsedContextualConfig").warn("Failed to parse raw config")}};d.$VideoPlayerShakaParsedContextualConfig4=function(){var a=this;this.$VideoPlayerShakaParsedContextualConfig2=Object.assign({},b("VideoPlayerShakaContextualConfig").staticConfig);this.$VideoPlayerShakaParsedContextualConfig1&&this.$VideoPlayerShakaParsedContextualConfig1.defaults.forEach(function(b){return a.$VideoPlayerShakaParsedContextualConfig2[b.name]=b.value})};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("VideoPlayerShakaGlobalConfig",["VideoPlayerShakaExperimentsConfig","VideoPlayerShakaExposureLogger","VideoPlayerShakaParsedContextualConfig"],(function(a,b,c,d,e,f){__p&&__p();a={getBool:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?d[a]==="true"||d[a]===!0:typeof b("VideoPlayerShakaExperimentsConfig")[a]==="boolean"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getNumber:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?Number(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="number"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getString:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?String(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="string"?b("VideoPlayerShakaExperimentsConfig")[a]:c}};e.exports=a}),null);
__d("parseHeaders",[],(function(a,b,c,d,e,f){__p&&__p();var g=/\r?\n[\t]+/g,h=/\r?\n/;function a(a){__p&&__p();a=a.replace(g," ");var b={};a.split(h).forEach(function(a){a=a.split(":");var c=a.shift().trim();if(c){a=a.join(":").trim();b[c.toLowerCase()]=a}});return b}e.exports=a}),null);
__d("VideoPlayerShakaError",["VideoPlayerShakaGlobalConfig","parseHeaders"],(function(a,b,c,d,e,f){"use strict";a={translateError:function(a,c,d){var e=b("VideoPlayerShakaGlobalConfig").getBool("fix_shaka_xhr_error_status",!0)?a.errorRawTransportStatus:a.errorCode,f=null;b("VideoPlayerShakaGlobalConfig").getBool("enable_double_ingest",!1)&&a.errorRawResponseHeaders!=null&&(f=b("parseHeaders")(a.errorRawResponseHeaders));a={name:a.errorType,message:a.errorMsg,type:d,url:c,status:e,responseHeaders:f};return a},createTimeoutError:function(a){a={name:"timeout",message:"timeout",type:"net",url:a,status:0,responseHeaders:null};return a}};e.exports=a}),null);
__d("VideoDashPrefetchCache",["regeneratorRuntime","Promise","BanzaiODS","Deferred","MaybeNativePromise","Run","URI","VideoAkamaiRequestHelper","VideoPlayerPrefetchExperiments","VideoPlayerShakaError","VideoPlayerShakaGlobalConfig","XHRRequest","getCrossOriginTransport","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g=null;b("requireWeak")("VideoPlayerShakaBandwidthEstimator",function(a){return g=a});var h=null;b("requireWeak")("VideoStreamingTaskQueueProvider",function(a){return h=a});function i(a){return a.audio.length+a.video.length+a.manifest.length}function j(a,c){b("BanzaiODS").bumpEntityKey("www_video_playback","prefetch."+a,c)}function k(a){var b="aborted",c={status:0},d=new Error("Prefetch request aborted.");return Object.assign(d,{type:b,url:a,xhr:c})}function l(a){var c=a.getURI(),d=c.toString();if(b("VideoAkamaiRequestHelper").isAkamai(d)){var e=b("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(d);d=c.removeQueryData(["bytestart","byteend"]);a.setURI(d);e&&Object.keys(e).forEach(function(b){a.setRequestHeader(b,e[b])})}return a}var m=null,n=new Map();function o(a){a=new(b("URI"))(a);a=a.getDomain();return a.endsWith("fbcdn.net")&&!a.startsWith("interncache")&&!a.endsWith("ak.fbcdn.net")}function p(a,c){c===void 0&&(c=!1);return c&&o(a)?b("getCrossOriginTransport").withCredentials:b("getCrossOriginTransport")}function q(a){return o(a.url)}function r(a,b,c){return{response:a.slice(b.start+0,b.end+1),responseTime:c}}function s(a){__p&&__p();var c=new(b("URI"))(a);if(c.getDomain()){c=c.removeQueryData(["oh"]);c=c.removeQueryData("__gda__");var d=Object.keys(c.getQueryData());for(var e=0;e<d.length;e++){var f=d[e];f.startsWith("_nc")&&(c=c.removeQueryData(f))}return c.toString()}return a}a=function(){"use strict";__p&&__p();function a(){this.$2=new Map(),this.$9=new Map(),this.$1=new Map(),this.$3=[],this.$4=[],this.$5=0,this.$6=b("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum,this.$7=b("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest}var c=a.prototype;c.$10=function(a,c){__p&&__p();var d=this;c===void 0&&(c=!1);var e=a,f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(p(e,c));l(f);var g=new(b("MaybeNativePromise"))(function(c,h){f.setErrorHandler(function(a){d.$11(f),h(b("VideoPlayerShakaError").translateError(a,e,"preload"))}),f.setResponseHandler(function(a){f.response=a,d.$11(f),c(f)}),f.setAbortHandler(function(){if(b("VideoPlayerPrefetchExperiments").fixPrefetchCacheAbort){d.$11(f);var c=k(a);h(c)}else h(g,new Error("Request promise aborted"))})});this.$12(a,g);this.$3.push(f);this.$8?this.$8.push(f):f.send();return g};c.genPrefetchMpdNow=function(a){__p&&__p();return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:if(!this.has(a)){b.next=2;break}return b.abrupt("return",null);case 2:return b.abrupt("return",this.$10(a));case 3:case"end":return b.stop()}},null,this)};c.$13=function(b,c,d){__p&&__p();c===void 0&&(c=!1);d===void 0&&(d=null);var e=[];for(var f=0;f<b.length;f++){var g=a.createQueryStringURL(b[f]);this.has(g)||(e.push(this.$10(g,c).then(function(a){j("received",1);return a})),d!=null&&this.$2.set(g,d))}j("sent",e.length);return e};c.$14=function(c){__p&&__p();var d=this,e=a.getConsolidatedURL(c);if(e==null)return this.$13(c);var f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(p(e));l(f);var g=Date.now(),h=[];for(var i=0;i<c.length;i++){var k=a.createQueryStringURL(c[i]),m=new(b("Deferred"))();this.has(k)||this.$12(k,m.getPromise());h.push(m)}f.setErrorHandler(function(c){d.$11(f);for(var a=0;a<h.length;a++)h[a].reject(b("VideoPlayerShakaError").translateError(c,e,"preload"))});f.setResponseHandler(function(b){var e=Date.now()-g;for(var a=0;a<c.length;a++){var i=h[a],j=c[a];i.resolve(r(b,j,e))}d.$11(f)});f.setAbortHandler(function(){for(var a=0;a<c.length;a++){var b=h[a];b.reject(new Error("Request aborted."))}});this.$3.push(f);f.send();j("consolidated.sent",1);j("sent",h.length);k=h.map(function(a){return a.getPromise().then(function(a){j("received",1);return a})});b("Promise").all(k).then(function(){return j("consolidated.received",1)});return k};c.$15=function(a){__p&&__p();var c=this,d=a.useCredentials,e=a.connectionQualityLevel;this.$5++;var f=this.$7&&!d;b("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch&&(this.$8=[]);var g=f?this.$14(a.video):this.$13(a.video,d,e);f=f?this.$14(a.audio):this.$13(a.audio,d,e);e=this.$13(a.manifest,d);var i=g.concat(f,e);if(this.$8){var j=this.$8||[];this.$8=null;var k=""+a.videoID;d={name:"prefetch task, "+k,run:function(){k&&n["delete"](k);j.forEach(function(a){return a.send()});return b("MaybeNativePromise").all(i).then(function(){})["catch"](function(){})},cancel:function(){}};h?(b("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed&&k&&n.set(k,d),h.getQueue("video").enqueue(d,b("VideoPlayerPrefetchExperiments").prefetchPriority),this.$16()):(d.run(),b("MaybeNativePromise").all(i).then(function(){return c.$16()})["catch"](function(){return c.$16()}))}else b("MaybeNativePromise").all(i).then(function(){return c.$16()})["catch"](function(){return c.$16()})};c.$12=function(a,c){__p&&__p();var d=this;a=s(a);this.$1.values().next().done&&b("Run").onLeave(function(){for(var a=0;a<d.$3.length;a++)d.$3[a].abort();d.$3=[];d.$4=[];d.$5=0;d.$1.clear()});this.$1.set(a,c)};c.$11=function(a){a=this.$3.indexOf(a);a>-1&&this.$3.splice(a,1)};c.$16=function(){this.$5--;var a=this.$4.shift();a&&this.$15(a)};c.has=function(a){a=s(a);return this.$1.has(a)};c.getConnectionQualityLevel=function(a){return this.$2.get(a)};c.getAndDelete=function(a){a=s(a);var b=this.$1.get(a);b?j("cache.hit",1):j("cache.miss",1);this.$1["delete"](a);j("retrieve",1);return b};c.$17=function(a){a=s(a);a=this.$1.get(a);return a};c.queueRequestBatch=function(a){this.$6===0||this.$5<this.$6?this.$15(a):(j("queued",i(a)),this.$4.push(a))};c.setCachedRepresentations=function(a,b){this.$9.set(a,b)};c.getCachedRepresentations=function(a){return this.$9.get(a)};a.getCachedRepresentations=function(b){return a.getInstance().getCachedRepresentations(b)};a.getInstance=function(){m===null&&(m=new a());return m};a.createQueryStringURL=function(a){var c=a.url,d=a.start;a=a.end;d!==null&&d!==void 0&&a!==null&&a!==void 0&&(c=new(b("URI"))(c).addQueryData({bytestart:d,byteend:a}));return c.toString()};a.getConsolidatedURL=function(b){__p&&__p();var c="",d=Infinity,e=0;for(var f=0;f<b.length;f++){var g=b[f],h=g.url,i=g.start;g=g.end;if(h==null||i==null||g==null)return null;if(c==="")c=h;else if(c!==h)return null;d=Math.min(d,i);e=Math.max(e,g)}return a.createQueryStringURL({url:c,start:d,end:e})};a.getPrefetchInfoFromRepresentation=function(a){return a.segments.map(function(b){return{url:a.url,start:b.start,end:b.end}})};a.getVideoRepresentationFromRepresentations=function(a,c){__p&&__p();var d=a.find(function(a){return a.representation_id.endsWith("d")});!c&&g&&(c=g.getBandwidth());if(!c)return d;var e=b("VideoPlayerShakaGlobalConfig").getNumber("client_prefetch_bandwidth_aggressiveness",1);for(var f=0;f<a.length;f++){var h=a[f],i=d&&d.bandwidth||0;if(i>h.bandwidth)continue;else c>h.bandwidth/e&&(d=h)}return d};a.loadVideoGivenAllRepresentations=function(b,c,d){__p&&__p();if(a.isAutoplayBandwidthRestrained())return;var e=[],f=[];c.audio.length>0&&(e=a.getPrefetchInfoFromRepresentation(c.audio[0]),e.length>0&&f.push(c.audio[0].representation_id));var g=[];c=a.getVideoRepresentationFromRepresentations(c.video,d);c&&(g=a.getPrefetchInfoFromRepresentation(c),g.length>0&&f.push(c.representation_id));d=a.getInstance();d.queueRequestBatch({audio:e,video:g,manifest:[],videoID:b,useCredentials:!1});d.setCachedRepresentations(b,f)};a.isAutoplayBandwidthRestrained=function(){return!!g&&g.isAutoplayBandwidthRestrained()};a.loadVideo=function(c,d,e){d=!!d;if(a.isAutoplayBandwidthRestrained())return;if(b("VideoPlayerPrefetchExperiments").disablePrefetchCache)return;var f=a.getInstance();c.manifest||(c.manifest=[]);f.queueRequestBatch({manifest:c.manifest.filter(q),video:c.video.filter(q),audio:c.audio.filter(q),videoID:c.videoID,useCredentials:d,connectionQualityLevel:e})};a.getCacheValue=function(b){return a.getInstance().getAndDelete(b)};a.getConnectionQualityLevel=function(b){return a.getInstance().getConnectionQualityLevel(b)};a.hasCacheValue=function(b){return a.getInstance().has(b)};a.getPrefetchTaskByID=function(a){a=n.get(a)||null;return a};return a}();e.exports=a}),null);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h="_spinner";a={getClicked:function(a){return b("DataStore").get(a,"clicked",!1)},register:function(a,c){var d=a.id;g[d]=b("Event").listen(a,"click",function(){c&&(b("CSS").hide(a),b("CSS").show(c)),b("DataStore").set(a,"clicked",!0)});c&&(g[d+h]=b("Event").listen(c,"click",function(){c&&b("CSS").hide(c),b("CSS").show(a),b("DataStore").set(a,"clicked",!1)}))},unregister:function(a){a=a.id;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove();a=a+h;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove()}};e.exports=a}),null);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(function(a,b,c,d,e,f){var g={storeRenderTime:function(a){var c=b("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers?b("performanceAbsoluteNow")():Date.now();b("DataStore").set(a,"videos_rendering_instrumentation",c);return c},retrieveRenderTime:function(a){var c=b("DataStore").get(a,"videos_rendering_instrumentation",NaN);Number.isNaN(c)&&(c=g.storeRenderTime(a));return c}};e.exports=g}),null);
__d("intersectionObserverEntryIsIntersecting",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.isIntersecting!=null?a.isIntersecting:a.intersectionRatio>0||a.intersectionRect&&(a.intersectionRect.height>0||a.intersectionRect.width>0)}e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["FBLogger","TimeSlice","containsNode","getElementRect","performanceNow","setInterval","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=document.documentElement,h=[];function i(a,b){var c=Math.max(a.top,b.top),d=Math.min(a.bottom,b.bottom),e=Math.max(a.left,b.left);a=Math.min(a.right,b.right);b=a-e;var f=d-c;return b>=0&&f>=0?{top:c,bottom:d,left:e,right:a,width:b,height:f}:void 0}function j(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}var k=function(a){__p&&__p();this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||j();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect.width*this.intersectionRect.height;a?this.intersectionRatio=b/a:this.intersectionRatio=this.isIntersecting?1:0};a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$12=b("TimeSlice").guard(b("throttle")(function(){var a=d.$14(),c=a?d.$15():j();d.$6.forEach(function(e){var f=e.element,g=b("getElementRect")(f),h=d.$16(f),i=e.entry,j=a&&h&&!d.$2&&d.$17(f,c);e=e.entry=new k({time:b("performanceNow")(),target:f,boundingClientRect:g,rootBounds:c,intersectionRect:j});!i?d.$7.push(e):a&&h?d.$18(i,e)&&d.$7.push(e):i&&i.isIntersecting&&d.$7.push(e)});d.$7.length&&d.$1(d.takeRecords(),d)},this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$2=!1;try{window.top.document}catch(a){this.$2=!0}c=c||{};this.$1=a;this.$4=!1;this.$6=[];this.$7=[];this.$8=this.$9(c.rootMargin);this.thresholds=this.$10(c.threshold);this.root=c.root||null;this.rootMargin=this.$8.map(function(a){return a.value+a.unit}).join(" ")}var c=a.prototype;c.$10=function(a){a=a||[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,b,c){return a!==c[b-1]})};c.$9=function(a){a=a||"0px";a=a.split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.$11=function(){this.$4||(this.$4=!0,this.$12(),this.POLL_INTERVAL?this.$5=b("setInterval")(this.$12,this.POLL_INTERVAL):(window.addEventListener("resize",this.$12),document.addEventListener("scroll",this.$12),"MutationObserver"in window&&(this.$3=new MutationObserver(this.$12),this.$3.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.$13=function(){this.$4&&(this.$4=!1,this.$5&&(clearInterval(this.$5),this.$5=void 0),window.removeEventListener("resize",this.$12),document.removeEventListener("scroll",this.$12),this.$3&&(this.$3.disconnect(),this.$3=void 0))};c.$17=function(a,c){__p&&__p();var d=window.getComputedStyle(a);if(!d||d.display=="none")return void 0;d=b("getElementRect")(a);d=d;a=a.parentElement;var e=!1;while(!e){var f=null;a==this.root||a&&a.nodeType!=1?(e=!0,f=c):a&&window.getComputedStyle(a).overflow!="visible"&&(f=b("getElementRect")(a));if(f){d=i(f,d);if(!d)break}a=a&&a.parentElement}return d};c.$15=function(){var a;if(this.root)a=b("getElementRect")(this.root);else{var c=document.documentElement,d=document.body,e=c&&c.clientWidth||d&&d.clientWidth;c=c&&c.clientHeight||d&&d.clientHeight;a={top:0,left:0,right:e,width:e,bottom:c,height:c}}return this.$19(a)};c.$19=function(a){var b=this.$8.map(function(b,c){return b.unit=="px"?b.value:b.value*(c%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3],width:0,height:0};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.$18=function(a,b){__p&&__p();a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||0:-1;if(a===b)return!1;for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}return!1};c.$14=function(){return!this.root||b("containsNode")(g,this.root)};c.$16=function(a){var c=this.root||g;return b("containsNode")(c,a)};c.$20=function(){h.indexOf(this)<0&&h.push(this)};c.$21=function(){var a=h.indexOf(this);a!=-1&&h.splice(a,1)};c.observe=function(a){__p&&__p();if(!a){b("FBLogger")("io").warn("IntersectionObserverFallback target does not exist");return}if(this.$6.some(function(b){return b.element==a}))return;this.$20();this.$6.push({element:a,entry:null});this.$11();this.$12()};c.unobserve=function(a){this.$6=this.$6.filter(function(b){return b.element!=a}),this.$6.length||(this.$13(),this.$21())};c.disconnect=function(){this.$6=[],this.$13(),this.$21()};c.takeRecords=function(){var a=this.$7.slice();this.$7=[];return a};return a}();e.exports=a}),null);
__d("IntersectionObserver",["IntersectionObserverFallback"],(function(a,b,c,d,e,f){"use strict";a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;e.exports=a?window.IntersectionObserver:b("IntersectionObserverFallback")}),null);