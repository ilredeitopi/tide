define("tide/Tide-Amber-Tests", ["amber/boot"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Tide-Amber-Tests');
$core.packages["Tide-Amber-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Tide-Amber-Tests"].transport = {"type":"amd","amdNamespace":"tide"};

$core.addClass('TDClientTest', null, ['client'], 'Tide-Amber-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'initialization',
fn: function (){
var self=this;
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@client"]=$recv($TDClient())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TDClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09client := TDClient new",
referencedClasses: ["TDClient"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TDClientTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09\x22Buggy, uncomment later.\x0a\x09\x0a\x09client := nil\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClientTest);

$core.addMethod(
$core.method({
selector: "testForwarding",
protocol: 'tests',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
self["@client"]=$recv($TDClientProxy())._client_($recv($TDClient())._new());
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@client"])._count();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["count"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$MessageNotUnderstood());
$1=$recv(self["@client"])._xxxClient();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["xxxClient"]=1;
//>>excludeEnd("ctx");
$2=$recv($JSON())._parse_("{\x22state\x22: {\x22count\x22: 1}}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:"]=1;
//>>excludeEnd("ctx");
$recv($1)._updateFromJson_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["updateFromJson:"]=1;
//>>excludeEnd("ctx");
$3=$recv(self["@client"])._count();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["count"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self["@client"])._xxxClient())._updateFromJson_($recv($JSON())._parse_("{\x22state\x22: {\x22count\x22: 2}}"));
self._assert_equals_($recv(self["@client"])._count(),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testForwarding",{},$globals.TDClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testForwarding\x0a\x09\x22| client |\x22\x0a\x09client := TDClientProxy client: (TDClient new).\x0a\x0a\x09self should: [ client count ] raise: MessageNotUnderstood.\x09\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 1}}').\x0a\x09self assert: client count equals: 1.\x0a\x0a\x09client xxxClient updateFromJson: (JSON parse: '{\x22state\x22: {\x22count\x22: 2}}').\x0a\x09self assert: client count equals: 2",
referencedClasses: ["TDClientProxy", "TDClient", "MessageNotUnderstood", "JSON"],
//>>excludeEnd("ide");
messageSends: ["client:", "new", "should:raise:", "count", "updateFromJson:", "xxxClient", "parse:", "assert:equals:"]
}),
$globals.TDClientTest);

$core.addMethod(
$core.method({
selector: "testFuture",
protocol: 'tests',
fn: function (){
var self=this;
var p1,p2,p3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
p1=$recv(self["@client"])._future();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["future"]=1;
//>>excludeEnd("ctx");
p2=$recv(p1)._future();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["future"]=2;
//>>excludeEnd("ctx");
p3=$recv(self["@client"])._future();
$1=$recv(p1)._previous();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["previous"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$2=$recv(p1)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($2,p2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=2;
//>>excludeEnd("ctx");
$3=$recv(p2)._previous();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["previous"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($3,p1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=3;
//>>excludeEnd("ctx");
$4=$recv(p2)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=2;
//>>excludeEnd("ctx");
self._assert_equals_($4,p3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=4;
//>>excludeEnd("ctx");
self._assert_equals_($recv(p3)._previous(),p2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=5;
//>>excludeEnd("ctx");
self._assert_equals_($recv(p3)._next(),nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFuture",{p1:p1,p2:p2,p3:p3},$globals.TDClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFuture\x0a\x09| p1 p2 p3 |\x0a\x0a\x09p1 := client future.\x0a\x09p2 := p1 future.\x0a\x09p3 := client future.\x0a\x0a\x09self assert: p1 previous equals: nil.\x0a\x09self assert: p1 next equals: p2.\x0a\x09\x0a\x09self assert: p2 previous equals: p1.\x0a\x09self assert: p2 next equals: p3.\x0a\x0a\x09self assert: p3 previous equals: p2.\x0a\x09self assert: p3 next equals: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["future", "assert:equals:", "previous", "next"]
}),
$globals.TDClientTest);



$core.addClass('TDMockProxy', null, ['catchedSelectors'], 'Tide-Amber-Tests');
$core.addMethod(
$core.method({
selector: "catchedSelectors",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@catchedSelectors"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "catchedSelectors\x0a\x09^ catchedSelectors",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDMockProxy);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@catchedSelectors"])._add_($recv(aMessage)._selector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.TDMockProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09catchedSelectors add: aMessage selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "selector"]
}),
$globals.TDMockProxy);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._initialize();
self["@catchedSelectors"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TDMockProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09catchedSelectors := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TDMockProxy);



$core.addClass('TDProxyTest', null, [], 'Tide-Amber-Tests');
$core.addMethod(
$core.method({
selector: "testDNU",
protocol: 'tests',
fn: function (){
var self=this;
var proxy;
function $TDMockProxy(){return $globals.TDMockProxy||(typeof TDMockProxy=="undefined"?nil:TDMockProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
proxy=$recv($TDMockProxy())._new();
$recv(proxy)._yourself();
$2=$recv(proxy)._catchedSelectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["catchedSelectors"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_("yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
$recv(proxy)._catchedSelectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["catchedSelectors"]=2;
//>>excludeEnd("ctx");
self._deny_($recv($recv(proxy)._catchedSelectors())._includes_("catchedSelectors"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDNU",{proxy:proxy},$globals.TDProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDNU\x0a\x09| proxy |\x0a\x09proxy := TDMockProxy new.\x0a\x0a\x09proxy yourself.\x0a\x09self assert: (proxy catchedSelectors includes: 'yourself').\x0a\x0a\x09proxy catchedSelectors.\x0a\x09self deny: (proxy catchedSelectors includes: 'catchedSelectors').",
referencedClasses: ["TDMockProxy"],
//>>excludeEnd("ide");
messageSends: ["new", "yourself", "assert:", "includes:", "catchedSelectors", "deny:"]
}),
$globals.TDProxyTest);

$core.addMethod(
$core.method({
selector: "testInheritedSelectors",
protocol: 'tests',
fn: function (){
var self=this;
var proxy;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
proxy=$recv($TDClientProxy())._basicNew();
$2=$recv(proxy)._inheritedSelectors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["inheritedSelectors"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._includes_("isNil");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["includes:"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
self._deny_($recv($recv(proxy)._inheritedSelectors())._includes_("xxxClient"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInheritedSelectors",{proxy:proxy},$globals.TDProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInheritedSelectors\x0a\x09| proxy |\x0a\x0a\x09proxy := TDClientProxy basicNew.\x0a\x0a\x09self assert: (proxy inheritedSelectors includes: 'isNil').\x0a\x09self deny: (proxy inheritedSelectors includes: 'xxxClient')",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["basicNew", "assert:", "includes:", "inheritedSelectors", "deny:"]
}),
$globals.TDProxyTest);

$core.addMethod(
$core.method({
selector: "testxxxClient",
protocol: 'tests',
fn: function (){
var self=this;
var proxy,client;
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
client=$recv($TDClient())._new();
proxy=$recv($TDClientProxy())._client_(client);
$1=$recv($recv(proxy)._xxxClient()).__eq_eq(client);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(proxy)._yourself()).__eq_eq(client));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testxxxClient",{proxy:proxy,client:client},$globals.TDProxyTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testxxxClient\x0a\x09| proxy client |\x0a\x09\x0a\x09client := TDClient new.\x0a\x09proxy := TDClientProxy client: client.\x0a\x0a\x09self assert: proxy xxxClient == client.\x0a\x09self assert: proxy yourself == client.",
referencedClasses: ["TDClient", "TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["new", "client:", "assert:", "==", "xxxClient", "yourself"]
}),
$globals.TDProxyTest);


});
