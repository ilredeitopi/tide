define("tide/Tide-Amber-Core", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Tide-Amber-Core');
$core.packages["Tide-Amber-Core"].innerEval = function (expr) { return eval(expr); };
$core.packages["Tide-Amber-Core"].transport = {"type":"amd","amdNamespace":"tide"};

$core.addClass('TDAbstractProxy', $globals.ProtoObject, ['client'], 'Tide-Amber-Core');
$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.TDAbstractProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.TDAbstractProxy);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_($globals.HashedCollection._newFromPairs_([]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},$globals.TDAbstractProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: #{}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setLabel:", "printString", "setVariables:"]
}),
$globals.TDAbstractProxy);


$core.addMethod(
$core.method({
selector: "client:",
protocol: 'instance creation',
fn: function (aClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._xxxClient_(aClient);
$3=$recv($2)._initialize();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},$globals.TDAbstractProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["xxxClient:", "basicNew", "initialize"]
}),
$globals.TDAbstractProxy.klass);

$core.addMethod(
$core.method({
selector: "connectOn:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._on_(aPath);
$recv($2)._connect();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connectOn:",{aPath:aPath},$globals.TDAbstractProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath"],
source: "connectOn: aPath\x0a\x09\x22Creates a proxy on aPath and connect it.\x0a\x09 This is a convenience method.\x22\x0a\x0a\x09^ (self on: aPath)\x0a\x09\x09connect;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "on:", "yourself"]
}),
$globals.TDAbstractProxy.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._xxxClient_($recv($TDClient())._on_(aPath));
$3=$recv($2)._initialize();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},$globals.TDAbstractProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (TDClient on: aPath);\x0a\x09\x09initialize",
referencedClasses: ["TDClient"],
//>>excludeEnd("ide");
messageSends: ["xxxClient:", "basicNew", "on:", "initialize"]
}),
$globals.TDAbstractProxy.klass);


$core.addClass('TDClientProxy', $globals.TDAbstractProxy, ['client'], 'Tide-Amber-Core');
$core.addMethod(
$core.method({
selector: "asTideArgument",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._xxxClient())._asTideArgument();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTideArgument",{},$globals.TDClientProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideArgument\x0a\x09^ self xxxClient asTideArgument",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asTideArgument", "xxxClient"]
}),
$globals.TDClientProxy);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$4,$1;
$3=self._xxxClient();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["xxxClient"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._respondsTo_($recv(aMessage)._selector());
if($core.assert($2)){
$4=self._xxxClient();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["xxxClient"]=2;
//>>excludeEnd("ctx");
$1=$recv(aMessage)._sendTo_($4);
} else {
$1=$recv(self._xxxClient())._handleFutureMessage_(aMessage);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.TDClientProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09^ (self xxxClient respondsTo: aMessage selector)\x0a\x09\x09ifTrue: [ aMessage sendTo: self xxxClient ]\x0a\x09\x09ifFalse: [ self xxxClient handleFutureMessage: aMessage ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "xxxClient", "selector", "sendTo:", "handleFutureMessage:"]
}),
$globals.TDClientProxy);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_($globals.HashedCollection._newFromPairs_(["client",self["@client"]]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector},$globals.TDClientProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: #{\x0a\x09\x09\x09'client' -> client\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setLabel:", "printString", "setVariables:"]
}),
$globals.TDClientProxy);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$receiver;
$2=self._xxxClient();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["xxxClient"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$recv(aStream)._nextPutAll_("a proxy on <");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(self._tidePresenterString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$3=$recv(aStream)._nextPutAll_(">");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$3;
} else {
$recv(aStream)._nextPutAll_("a proxy on path \x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self._xxxClient())._path());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$4=$recv(aStream)._nextPutAll_("\x22");
$4;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.TDClientProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09self xxxClient path\x0a\x09\x09ifNil: [\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'a proxy on <';\x0a\x09\x09\x09\x09nextPutAll: self tidePresenterString;\x0a\x09\x09\x09\x09nextPutAll: '>' ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09aStream\x0a\x09\x09\x09\x09nextPutAll: 'a proxy on path \x22';\x0a\x09\x09\x09\x09nextPutAll: self xxxClient path;\x0a\x09\x09\x09\x09nextPutAll: '\x22' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "path", "xxxClient", "nextPutAll:", "tidePresenterString"]
}),
$globals.TDClientProxy);

$core.addMethod(
$core.method({
selector: "xxxClient",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@client"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xxxClient\x0a\x09^ client",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClientProxy);

$core.addMethod(
$core.method({
selector: "xxxClient:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
self["@client"]=aClient;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "xxxClient: aClient\x0a\x09client := aClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClientProxy);


$core.addMethod(
$core.method({
selector: "client:",
protocol: 'instance creation',
fn: function (aClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._xxxClient_(aClient);
$3=$recv($2)._initialize();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"client:",{aClient:aClient},$globals.TDClientProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "client: aClient\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aClient\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: aClient;\x0a\x09\x09initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["xxxClient:", "basicNew", "initialize"]
}),
$globals.TDClientProxy.klass);

$core.addMethod(
$core.method({
selector: "connectOn:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._on_(aPath);
$recv($2)._connect();
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connectOn:",{aPath:aPath},$globals.TDClientProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath"],
source: "connectOn: aPath\x0a\x09\x22Creates a proxy on aPath and connect it.\x0a\x09 This is a convenience method.\x22\x0a\x0a\x09^ (self on: aPath)\x0a\x09\x09connect;\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "on:", "yourself"]
}),
$globals.TDClientProxy.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPath){
var self=this;
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._xxxClient_($recv($TDClient())._on_(aPath));
$3=$recv($2)._initialize();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aPath:aPath},$globals.TDClientProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPath"],
source: "on: aPath\x0a\x09\x22Do not add yourself here.\x0a\x09It is not understood by the proxy after sending #initialize, therefore it returns aPath\x22\x0a\x0a\x09^ self basicNew\x0a\x09\x09xxxClient: (TDClient on: aPath);\x0a\x09\x09initialize",
referencedClasses: ["TDClient"],
//>>excludeEnd("ide");
messageSends: ["xxxClient:", "basicNew", "on:", "initialize"]
}),
$globals.TDClientProxy.klass);


$core.addClass('TDPromiseProxy', $globals.TDAbstractProxy, ['promise'], 'Tide-Amber-Core');
$core.addMethod(
$core.method({
selector: "promise",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@promise"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "promise\x0a\x09^ promise",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromiseProxy);

$core.addMethod(
$core.method({
selector: "promise:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
self["@promise"]=aPromise;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromiseProxy);



$core.addClass('TDAction', $globals.Object, ['promise', 'resolved', 'failure'], 'Tide-Amber-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TDAction.comment="I am an abstract action to be performed as the fulfillment of a promise. In case of success, the chain of promises will be followed, to trigger the next action.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "beFailure",
protocol: 'resolving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@failure"]=true;
$recv(self._client())._flushPromises();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beFailure",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beFailure\x0a\x09failure := true.\x0a\x09self client flushPromises",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["flushPromises", "client"]
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "beResolved",
protocol: 'resolving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@failure"];
if($core.assert($1)){
return self;
};
self["@resolved"]=true;
$recv(self._promise())._nextTravel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beResolved",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beResolved\x0a\x09failure ifTrue: [ ^ self ].\x0a\x09resolved := true.\x0a\x09self promise nextTravel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "nextTravel", "promise"]
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "client",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._promise())._client();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"client",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "client\x0a\x09^ self promise client",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["client", "promise"]
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.TDAction.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@failure"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09failure := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "isResolved",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@resolved"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isResolved\x0a\x09^ resolved ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "promise",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@promise"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "promise\x0a\x09^ promise",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "promise:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
self["@promise"]=aPromise;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "promise: aPromise\x0a\x09promise := aPromise",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDAction);

$core.addMethod(
$core.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._beResolved();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolve",{},$globals.TDAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resolve\x0a\x09self beResolved",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beResolved"]
}),
$globals.TDAction);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPromise){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._promise_(aPromise);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aPromise:aPromise},$globals.TDAction.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "on: aPromise\x0a\x09^ self new\x0a\x09\x09promise: aPromise;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["promise:", "new", "yourself"]
}),
$globals.TDAction.klass);


$core.addClass('TDCallbackAction', $globals.TDAction, ['callback'], 'Tide-Amber-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TDCallbackAction.comment="I represent a client-side callback to be executed once my promise is fulfilled.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "callback",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@callback"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "callback\x0a\x09^ callback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDCallbackAction);

$core.addMethod(
$core.method({
selector: "callback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@callback"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDCallbackAction);

$core.addMethod(
$core.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._client();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["client"]=1;
//>>excludeEnd("ctx");
$recv($1)._promisedValue_($recv(self._callback())._value_($recv(self._client())._promisedValue()));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.TDCallbackAction.superclass.fn.prototype._resolve.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolve",{},$globals.TDCallbackAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resolve\x0a\x09self client promisedValue: (self callback value: self client promisedValue).\x0a\x09super resolve",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["promisedValue:", "client", "value:", "callback", "promisedValue", "resolve"]
}),
$globals.TDCallbackAction);



$core.addClass('TDRequestAction', $globals.TDAction, ['requestUrl', 'data'], 'Tide-Amber-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TDRequestAction.comment="I represent a request to be carried on the server side. Since the request is asynchronous, I will only get resolved once the answer comes back.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@data"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09^ data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'accessing',
fn: function (json){
var self=this;
self["@data"]=json;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "data: json\x0a\x09data := json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
self._beFailure();
$1=$recv(self._promise())._errorHandler();
if(($receiver = $1) == null || $receiver.isNil){
$recv(anError)._signal();
} else {
var handler;
handler=$receiver;
$recv(handler)._failure_(anError);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a\x09self beFailure.\x0a\x09self promise errorHandler\x0a\x09\x09ifNotNil: [ :handler | handler failure: anError ]\x0a\x09\x09ifNil: [ anError signal ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beFailure", "ifNotNil:ifNil:", "errorHandler", "promise", "failure:", "signal"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "handleResponse:status:",
protocol: 'resolving',
fn: function (json,aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=$recv(aNumber).__eq_eq((200));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$2=self._updateClientFromJson_(json);
return $2;
};
$3=$recv(aNumber).__eq_eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["=="]=2;
//>>excludeEnd("ctx");
if($core.assert($3)){
$4=self._newClientFromJson_(json);
return $4;
};
$5=$recv(aNumber).__eq_eq((202));
if($core.assert($5)){
$6=self._serverErrorFromJson_(json);
return $6;
};
self._error_("Invalid server answer code");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleResponse:status:",{json:json,aNumber:aNumber},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json", "aNumber"],
source: "handleResponse: json status: aNumber\x0a\x09aNumber == 200 ifTrue: [ ^ self updateClientFromJson: json ].\x0a\x09aNumber == 201 ifTrue: [ ^ self newClientFromJson: json ].\x0a\x09aNumber == 202 ifTrue: [ ^ self serverErrorFromJson: json ].\x0a\x0a\x09self error: 'Invalid server answer code'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "==", "updateClientFromJson:", "newClientFromJson:", "serverErrorFromJson:", "error:"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "newClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._client())._promisedValue_($recv(json)._asTideObject());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newClientFromJson:",{json:json},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "newClientFromJson: json\x0a\x09self client promisedValue: json asTideObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["promisedValue:", "client", "asTideObject"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "request:",
protocol: 'resolving',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(jQuery)._ajax_options_(self._requestUrl(),$globals.HashedCollection._newFromPairs_(["type","POST","dataType","json","data",$globals.HashedCollection._newFromPairs_(["arguments",self._data()]),"success",(function(json,textStatus,xhr){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(xhr)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["status"]=1;
//>>excludeEnd("ctx");
self._handleResponse_status_(json,$1);
return self._beResolved();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json,textStatus:textStatus,xhr:xhr},$ctx1,1)});
//>>excludeEnd("ctx");
}),"error",(function(ex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($recv(ex)._status()).__eq((408));
if($core.assert($2)){
return self._sessionError();
} else {
return self._requestError_(ex);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1,2)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"request:",{aString:aString},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "request: aString\x0a\x0a\x09jQuery\x0a\x09\x09ajax: self requestUrl\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a\x09\x09\x09'dataType' -> 'json'.\x0a\x09\x09\x09'data' -> #{ 'arguments' -> self data }.\x0a\x09\x09\x09'success' -> [ :json :textStatus :xhr |\x0a\x09\x09\x09\x09self handleResponse: json status: xhr status.\x0a\x09\x09\x09\x09self beResolved ].\x0a\x09\x09\x09'error' -> [ :ex |\x0a\x09\x09\x09\x09ex status = 408\x0a\x09\x09\x09\x09\x09ifTrue: [ self sessionError ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self requestError: ex ] ]\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:options:", "requestUrl", "data", "handleResponse:status:", "status", "beResolved", "ifTrue:ifFalse:", "=", "sessionError", "requestError:"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "requestError:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
var error;
function $TDRequestError(){return $globals.TDRequestError||(typeof TDRequestError=="undefined"?nil:TDRequestError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($TDRequestError())._new();
$recv($1)._xhr_(anObject);
$2=$recv($1)._yourself();
error=$2;
self._handleError_(error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requestError:",{anObject:anObject,error:error},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "requestError: anObject\x0a\x09| error |\x0a\x0a\x09error := TDRequestError new\x0a\x09\x09xhr: anObject;\x0a\x09\x09yourself.\x0a\x0a\x09self handleError: error",
referencedClasses: ["TDRequestError"],
//>>excludeEnd("ide");
messageSends: ["xhr:", "new", "yourself", "handleError:"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "requestUrl",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@requestUrl"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "requestUrl\x0a\x09^ requestUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "requestUrl:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@requestUrl"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "requestUrl: aString\x0a\x09requestUrl := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "resolve",
protocol: 'resolving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._request_(self._requestUrl());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resolve",{},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resolve\x0a\x09self request: self requestUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["request:", "requestUrl"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "serverErrorFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
var serverError,error;
function $TDServerError(){return $globals.TDServerError||(typeof TDServerError=="undefined"?nil:TDServerError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
serverError=$recv(json)._asTideObject();
$1=$recv($TDServerError())._new();
$recv($1)._code_($recv(serverError)._code());
$recv($1)._messageText_($recv(serverError)._messageText());
$2=$recv($1)._yourself();
error=$2;
self._handleError_(error);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverErrorFromJson:",{json:json,serverError:serverError,error:error},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "serverErrorFromJson: json\x0a\x09| serverError error |\x0a\x0a\x09serverError := json asTideObject.\x0a\x09error := TDServerError new\x0a\x09\x09code: serverError code;\x0a\x09\x09messageText: serverError messageText;\x0a\x09\x09yourself.\x0a\x0a\x09self handleError: error",
referencedClasses: ["TDServerError"],
//>>excludeEnd("ide");
messageSends: ["asTideObject", "code:", "new", "code", "messageText:", "messageText", "yourself", "handleError:"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "sessionError",
protocol: 'error handling',
fn: function (){
var self=this;
function $TDSessionErrorHandler(){return $globals.TDSessionErrorHandler||(typeof TDSessionErrorHandler=="undefined"?nil:TDSessionErrorHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($TDSessionErrorHandler())._handleSessionError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sessionError",{},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sessionError\x0a\x09TDSessionErrorHandler handleSessionError",
referencedClasses: ["TDSessionErrorHandler"],
//>>excludeEnd("ide");
messageSends: ["handleSessionError"]
}),
$globals.TDRequestAction);

$core.addMethod(
$core.method({
selector: "updateClientFromJson:",
protocol: 'private',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._client())._updateFromJson_(json);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateClientFromJson:",{json:json},$globals.TDRequestAction)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "updateClientFromJson: json\x0a\x09self client updateFromJson: json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateFromJson:", "client"]
}),
$globals.TDRequestAction);



$core.addClass('TDAsyncPromiseFailureHandler', $globals.Object, ['failureAction', 'action'], 'Tide-Amber-Core');
$core.addMethod(
$core.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@action"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "action\x0a\x09^ action",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDAsyncPromiseFailureHandler);

$core.addMethod(
$core.method({
selector: "failure:",
protocol: 'signaling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._action())._value_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"failure:",{anError:anError},$globals.TDAsyncPromiseFailureHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "failure: anError\x0a\x09self action value: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "action"]
}),
$globals.TDAsyncPromiseFailureHandler);

$core.addMethod(
$core.method({
selector: "initializeAction:",
protocol: 'initialization',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._initialize();
self["@action"]=aBlock;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeAction:",{aBlock:aBlock},$globals.TDAsyncPromiseFailureHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "initializeAction: aBlock\x0a\x09self initialize.\x0a\x09action := aBlock.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TDAsyncPromiseFailureHandler);


$core.addMethod(
$core.method({
selector: "action:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._initializeAction_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"action:",{aBlock:aBlock},$globals.TDAsyncPromiseFailureHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "action: aBlock\x0a\x09^ self basicNew\x0a\x09\x09initializeAction: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeAction:", "basicNew", "yourself"]
}),
$globals.TDAsyncPromiseFailureHandler.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._error_("Use #action:");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.TDAsyncPromiseFailureHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09^ self error: 'Use #action:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.TDAsyncPromiseFailureHandler.klass);


$core.addClass('TDClient', $globals.Object, ['state', 'actions', 'firstPromise', 'promisedValue', 'path', 'id', 'connected'], 'Tide-Amber-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TDClient.comment="I represent a known, global entry point to the server-side API.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "actions",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@actions"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "actions\x0a\x09^ actions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "asTideArgument",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["__id__",self._id()]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTideArgument",{},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideArgument\x0a\x09^ #{ '__id__' -> self id }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "connect",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._isConnected();
if(!$core.assert($1)){
self._initialRequest();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect",{},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "connect\x0a\x09self isConnected ifFalse: [ self initialRequest ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isConnected", "initialRequest"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "flushPromises",
protocol: 'accessing',
fn: function (){
var self=this;
self["@firstPromise"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushPromises\x0a\x09firstPromise := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
var promise;
function $TDPromise(){return $globals.TDPromise||(typeof TDPromise=="undefined"?nil:TDPromise)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
promise=$recv($TDPromise())._on_(self);
$1=self["@firstPromise"];
if(($receiver = $1) == null || $receiver.isNil){
self["@firstPromise"]=promise;
self["@firstPromise"];
} else {
$recv(self["@firstPromise"])._next_(promise);
};
$2=promise;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"future",{promise:promise},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "future\x0a\x09| promise |\x0a\x0a\x09promise := TDPromise on: self.\x0a\x0a\x09firstPromise\x0a\x09\x09ifNil: [ firstPromise := promise ]\x0a\x09\x09ifNotNil: [ firstPromise next: promise ].\x0a\x0a\x09^ promise",
referencedClasses: ["TDPromise"],
//>>excludeEnd("ide");
messageSends: ["on:", "ifNil:ifNotNil:", "next:"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "handleFutureMessage:",
protocol: 'forwarding',
fn: function (aMessage){
var self=this;
var selector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
var $early={};
try {
$1=$recv(aMessage)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
selector=$recv($1)._asString();
$recv(self["@state"])._at_ifPresent_(selector,(function(value){
throw $early=[value];

}));
$2=$recv(self["@actions"])._at_(selector);
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$3=$recv(self._future())._setRequestActionFromMessage_(aMessage);
return $3;
};
$4=self._promiseNotFound_($recv(aMessage)._selector());
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleFutureMessage:",{aMessage:aMessage,selector:selector},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "handleFutureMessage: aMessage\x0a\x09| selector |\x0a\x09selector := aMessage selector asString.\x0a\x0a\x09state\x0a\x09\x09at: selector\x0a\x09\x09ifPresent: [ :value | ^ value ].\x0a\x0a\x09(actions at: selector)\x0a\x09\x09ifNotNil: [ ^ self future setRequestActionFromMessage: aMessage ].\x0a\x0a\x09^ self promiseNotFound: aMessage selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString", "selector", "at:ifPresent:", "ifNotNil:", "at:", "setRequestActionFromMessage:", "future", "promiseNotFound:"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "initialRequest",
protocol: 'updating',
fn: function (){
var self=this;
var promise;
function $TDRequestAction(){return $globals.TDRequestAction||(typeof TDRequestAction=="undefined"?nil:TDRequestAction)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
promise=self._future();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["future"]=1;
//>>excludeEnd("ctx");
$1=$recv($TDRequestAction())._on_(promise);
$recv($1)._requestUrl_(self._path());
$2=$recv($1)._yourself();
$recv(promise)._setAction_($2);
$recv(self._future())._then_((function(){
self["@connected"]=true;
return self["@connected"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialRequest",{promise:promise},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialRequest\x0a\x09| promise |\x0a\x09promise := self future.\x0a\x09promise setAction: ((TDRequestAction on: promise)\x0a\x09\x09requestUrl: self path;\x0a\x09\x09yourself).\x0a\x09self future then: [ connected := true ]",
referencedClasses: ["TDRequestAction"],
//>>excludeEnd("ide");
messageSends: ["future", "setAction:", "requestUrl:", "on:", "path", "yourself", "then:"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.TDClient.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@state"]=self._newJavaScriptObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newJavaScriptObject"]=1;
//>>excludeEnd("ctx");
self["@actions"]=self._newJavaScriptObject();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22Primitive JS object. I need it because I'm keeping JSON data\x22\x0a\x09state := self newJavaScriptObject.\x0a\x09actions := self newJavaScriptObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "newJavaScriptObject"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "isConnected",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@connected"];
if(($receiver = $2) == null || $receiver.isNil){
$1=false;
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConnected\x0a\x09^ connected ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "newJavaScriptObject",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return {};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newJavaScriptObject",{},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newJavaScriptObject\x0a\x09<return {}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@path"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09^ path",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "path:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@path"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "path: aString\x0a\x09path := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "promiseNotFound:",
protocol: 'error handling',
fn: function (aSelector){
var self=this;
function $TDPromiseNotFound(){return $globals.TDPromiseNotFound||(typeof TDPromiseNotFound=="undefined"?nil:TDPromiseNotFound)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($TDPromiseNotFound())._new();
$recv($1)._selector_(aSelector);
$2=$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"promiseNotFound:",{aSelector:aSelector},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "promiseNotFound: aSelector\x0a\x09TDPromiseNotFound new\x0a\x09\x09selector: aSelector;\x0a\x09\x09signal",
referencedClasses: ["TDPromiseNotFound"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "signal"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "promisedValue",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@promisedValue"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "promisedValue\x0a\x09^ promisedValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "promisedValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@promisedValue"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "promisedValue: anObject\x0a\x09promisedValue := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "state",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@state"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "state\x0a\x09^ state",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "then:",
protocol: 'forwarding',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._future())._then_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "then: aBlock\x0a\x09self future then: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["then:", "future"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "updateActions:",
protocol: 'updating',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDictionary)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@actions"])._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateActions:",{aDictionary:aDictionary},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "updateActions: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "at:put:"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "updateFromJson:",
protocol: 'updating',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
self["@connected"]=true;
self["@id"]=$recv(json)._at_("__id__");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=$recv(json)._at_("state");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv($recv(json)._state())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@state"])._at_put_(key,$recv(value)._asTideObject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keysAndValuesDo:"]=1;
//>>excludeEnd("ctx");
};
$2=$recv(json)._at_("actions");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv($recv(json)._actions())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@actions"])._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateFromJson:",{json:json},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "updateFromJson: json\x0a\x09connected := true.\x0a\x0a\x09id := json at: '__id__'.\x0a\x0a\x09(json at: 'state') ifNotNil: [\x0a\x09\x09json state keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value asTideObject ] ].\x0a\x09(json at: 'actions') ifNotNil: [\x0a\x09\x09json actions keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09actions at: key put: value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "ifNotNil:", "keysAndValuesDo:", "state", "at:put:", "asTideObject", "actions"]
}),
$globals.TDClient);

$core.addMethod(
$core.method({
selector: "updateState:",
protocol: 'updating',
fn: function (aDictionary){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDictionary)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@state"])._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateState:",{aDictionary:aDictionary},$globals.TDClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "updateState: aDictionary\x0a\x09aDictionary keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09state at: key put: value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "at:put:"]
}),
$globals.TDClient);


$core.addMethod(
$core.method({
selector: "fromJson:",
protocol: 'instance creation',
fn: function (json){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._updateFromJson_(json);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJson:",{json:json},$globals.TDClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["json"],
source: "fromJson: json\x0a\x09^ self new\x0a\x09\x09updateFromJson: json;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateFromJson:", "new", "yourself"]
}),
$globals.TDClient.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._path_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},$globals.TDClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09path: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["path:", "new", "yourself"]
}),
$globals.TDClient.klass);


$core.addClass('TDPromise', $globals.Object, ['previous', 'next', 'client', 'action', 'errorHandler'], 'Tide-Amber-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TDPromise.comment="I am the promise for the eventual resolution of an asynchronous or deferred operation. I store an action to be carried once that happens.\x0a\x0a## API\x0a\x0aUse `then:` to chain subsequent actions.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "action",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@action"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "action\x0a\x09^ action",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "asProxy",
protocol: 'converting',
fn: function (){
var self=this;
function $TDPromiseProxy(){return $globals.TDPromiseProxy||(typeof TDPromiseProxy=="undefined"?nil:TDPromiseProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($TDPromiseProxy())._new();
$recv($2)._promise_(self);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asProxy",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asProxy\x0a\x09^ TDPromiseProxy new\x0a\x09\x09promise: self;\x0a\x09\x09yourself",
referencedClasses: ["TDPromiseProxy"],
//>>excludeEnd("ide");
messageSends: ["promise:", "new", "yourself"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "client",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@client"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "client\x0a\x09^ client",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "client:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
self["@client"]=aClient;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "client: aClient\x0a\x09client := aClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "errorHandler",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@errorHandler"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorHandler\x0a\x09^ errorHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._client())._future();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"future",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "future\x0a\x09^ self client future",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["future", "client"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
$globals.TDPromise.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@errorHandler"]=$recv(self._class())._errorHandler();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09errorHandler := self class errorHandler.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "errorHandler", "class"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "isAssigned",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._action())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAssigned",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAssigned\x0a\x09^ self action notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "action"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "isResolved",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isAssigned())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._action())._isResolved();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isResolved",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isResolved\x0a\x09^ self isAssigned and: [ self action isResolved ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "isAssigned", "isResolved", "action"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@next"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "next:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@next"];
if(($receiver = $1) == null || $receiver.isNil){
self["@next"]=aPromise;
self["@next"];
$recv(aPromise)._previous_(self);
} else {
$recv(self["@next"])._next_(aPromise);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next:",{aPromise:aPromise},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "next: aPromise\x0a\x09next\x0a\x09\x09ifNil: [\x0a\x09\x09\x09next := aPromise.\x0a\x09\x09\x09aPromise previous: self ]\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09next next: aPromise ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "previous:", "next:"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "nextTravel",
protocol: 'traveling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["next"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$recv(self._client())._flushPromises();
} else {
$recv(self._next())._stepTravel();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextTravel",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextTravel\x0a\x09self next\x0a\x09\x09ifNil: [ self client flushPromises ]\x0a\x09\x09ifNotNil: [ self next stepTravel ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "next", "flushPromises", "client", "stepTravel"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@previous"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09^ previous",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "previous:",
protocol: 'accessing',
fn: function (aPromise){
var self=this;
self["@previous"]=aPromise;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPromise"],
source: "previous: aPromise\x0a\x09previous := aPromise",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "setAction:",
protocol: 'accessing',
fn: function (anAction){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@action"]=anAction;
self._travel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setAction:",{anAction:anAction},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAction"],
source: "setAction: anAction\x0a\x09action := anAction.\x0a\x09self travel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["travel"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "setRequestActionFromMessage:",
protocol: 'actions',
fn: function (aMessage){
var self=this;
var url,data;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $TDRequestAction(){return $globals.TDRequestAction||(typeof TDRequestAction=="undefined"?nil:TDRequestAction)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$receiver;
url=$recv($recv(self._client())._actions())._at_($recv(aMessage)._selector());
$3=$recv(aMessage)._arguments();
if(($receiver = $3) == null || $receiver.isNil){
$2=[];
} else {
$2=$3;
};
$1=$recv($2)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asTideArgument();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
data=$recv($JSON())._stringify_($1);
$4=$recv($TDRequestAction())._on_(self);
$recv($4)._requestUrl_(url);
$recv($4)._data_(data);
$5=$recv($4)._yourself();
self._setAction_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setRequestActionFromMessage:",{aMessage:aMessage,url:url,data:data},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "setRequestActionFromMessage: aMessage\x0a\x09| url data |\x0a\x09url := self client actions at: aMessage selector.\x0a\x09data := JSON stringify: ((aMessage arguments ifNil: [ #() ])\x0a\x09\x09collect: [ :each | each asTideArgument ]).\x0a\x09self setAction: ((TDRequestAction on: self)\x0a\x09\x09requestUrl: url;\x0a\x09\x09data: data;\x0a\x09\x09yourself)",
referencedClasses: ["JSON", "TDRequestAction"],
//>>excludeEnd("ide");
messageSends: ["at:", "actions", "client", "selector", "stringify:", "collect:", "ifNil:", "arguments", "asTideArgument", "setAction:", "requestUrl:", "on:", "data:", "yourself"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "stepTravel",
protocol: 'traveling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._action();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["action"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._nextTravel();
} else {
$recv(self._action())._resolve();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepTravel",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepTravel\x0a\x09self action\x0a\x09\x09ifNil: [ self nextTravel ]\x0a\x09\x09ifNotNil: [ self action resolve ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "action", "nextTravel", "resolve"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "then:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $TDCallbackAction(){return $globals.TDCallbackAction||(typeof TDCallbackAction=="undefined"?nil:TDCallbackAction)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._isAssigned();
if($core.assert($1)){
$recv($recv(self._client())._future())._then_(aBlock);
} else {
self._setAction_($recv($recv($TDCallbackAction())._on_(self))._callback_(aBlock));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"then:",{aBlock:aBlock},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "then: aBlock\x0a\x09self isAssigned\x0a\x09\x09ifTrue: [ self client future then: aBlock ]\x0a\x09\x09ifFalse: [ self setAction: ((TDCallbackAction on: self) callback: aBlock) ]",
referencedClasses: ["TDCallbackAction"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isAssigned", "then:", "future", "client", "setAction:", "callback:", "on:"]
}),
$globals.TDPromise);

$core.addMethod(
$core.method({
selector: "travel",
protocol: 'traveling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._previous();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["previous"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isNil();
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._previous())._isResolved();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
self._stepTravel();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"travel",{},$globals.TDPromise)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "travel\x0a\x09(self previous isNil or: [ self previous isResolved ])\x0a\x09\x09ifTrue: [ self stepTravel ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "isNil", "previous", "isResolved", "stepTravel"]
}),
$globals.TDPromise);


$globals.TDPromise.klass.iVarNames = ['errorHandler'];
$core.addMethod(
$core.method({
selector: "errorHandler",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@errorHandler"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "errorHandler\x0a\x09^ errorHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise.klass);

$core.addMethod(
$core.method({
selector: "errorHandler:",
protocol: 'accessing',
fn: function (anErrorHandler){
var self=this;
self["@errorHandler"]=anErrorHandler;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorHandler"],
source: "errorHandler: anErrorHandler\x0a\x09errorHandler := anErrorHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromise.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._client_(aClient);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aClient:aClient},$globals.TDPromise.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "on: aClient\x0a\x09^ self new\x0a\x09\x09client: aClient;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["client:", "new", "yourself"]
}),
$globals.TDPromise.klass);

$core.addMethod(
$core.method({
selector: "use:during:",
protocol: 'accessing',
fn: function (anErrorHandler,aBlock){
var self=this;
var oldErrorHandler;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
oldErrorHandler=self._errorHandler();
self._errorHandler_(anErrorHandler);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["errorHandler:"]=1;
//>>excludeEnd("ctx");
$recv(aBlock)._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorHandler_(oldErrorHandler);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"use:during:",{anErrorHandler:anErrorHandler,aBlock:aBlock,oldErrorHandler:oldErrorHandler},$globals.TDPromise.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anErrorHandler", "aBlock"],
source: "use: anErrorHandler during: aBlock\x0a\x09| oldErrorHandler |\x0a\x0a\x09oldErrorHandler := self errorHandler.\x0a\x09self errorHandler: anErrorHandler.\x0a\x09aBlock ensure: [ self errorHandler: oldErrorHandler ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["errorHandler", "errorHandler:", "ensure:"]
}),
$globals.TDPromise.klass);


$core.addClass('TDSessionErrorHandler', $globals.Object, ['hooks'], 'Tide-Amber-Core');
$core.addMethod(
$core.method({
selector: "addHook:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._hooks())._add_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addHook:",{aBlock:aBlock},$globals.TDSessionErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "addHook: aBlock\x0a\x09self hooks add: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "hooks"]
}),
$globals.TDSessionErrorHandler);

$core.addMethod(
$core.method({
selector: "handleSessionError",
protocol: 'error handling',
fn: function (){
var self=this;
function $TDSessionError(){return $globals.TDSessionError||(typeof TDSessionError=="undefined"?nil:TDSessionError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._hooks();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hooks"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($TDSessionError())._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._hooks())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleSessionError",{},$globals.TDSessionErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleSessionError\x0a\x09self hooks ifEmpty: [ TDSessionError signal ].\x0a\x09self hooks do: [ :each | each value ]",
referencedClasses: ["TDSessionError"],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "hooks", "signal", "do:", "value"]
}),
$globals.TDSessionErrorHandler);

$core.addMethod(
$core.method({
selector: "hooks",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@hooks"];
if(($receiver = $2) == null || $receiver.isNil){
self["@hooks"]=$recv($OrderedCollection())._new();
$1=self["@hooks"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hooks",{},$globals.TDSessionErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hooks\x0a\x09^ hooks ifNil: [ hooks := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TDSessionErrorHandler);


$globals.TDSessionErrorHandler.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.TDSessionErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TDSessionErrorHandler.klass);

$core.addMethod(
$core.method({
selector: "handleSessionError",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._handleSessionError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleSessionError",{},$globals.TDSessionErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleSessionError\x0a\x09self current handleSessionError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["handleSessionError", "current"]
}),
$globals.TDSessionErrorHandler.klass);

$core.addMethod(
$core.method({
selector: "onSessionError:",
protocol: 'adding',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._addHook_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSessionError:",{aBlock:aBlock},$globals.TDSessionErrorHandler.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onSessionError: aBlock\x0a\x09self current addHook: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addHook:", "current"]
}),
$globals.TDSessionErrorHandler.klass);

$core.addMethod(
$core.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asTideObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideObject\x0a\x09^ self collect: [ :each | each asTideObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "asTideObject"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "onPromiseFailureDo:",
protocol: '*Tide-Amber-Core',
fn: function (failureBlock){
var self=this;
function $TDPromise(){return $globals.TDPromise||(typeof TDPromise=="undefined"?nil:TDPromise)}
function $TDAsyncPromiseFailureHandler(){return $globals.TDAsyncPromiseFailureHandler||(typeof TDAsyncPromiseFailureHandler=="undefined"?nil:TDAsyncPromiseFailureHandler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TDPromise())._use_during_($recv($TDAsyncPromiseFailureHandler())._action_(failureBlock),self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onPromiseFailureDo:",{failureBlock:failureBlock},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["failureBlock"],
source: "onPromiseFailureDo: failureBlock\x0a\x09^ TDPromise\x0a\x09\x09use: (TDAsyncPromiseFailureHandler action: failureBlock)\x0a\x09\x09during: self",
referencedClasses: ["TDPromise", "TDAsyncPromiseFailureHandler"],
//>>excludeEnd("ide");
messageSends: ["use:during:", "action:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
var dictionary;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
dictionary=$recv(self._class())._new();
self._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(dictionary)._at_put_(key,$recv(value)._asTideObject());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=dictionary;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{dictionary:dictionary},$globals.HashedCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideObject\x0a\x09| dictionary |\x0a\x09dictionary := self class new.\x0a\x09self keysAndValuesDo: [ :key :value |\x0a\x09\x09dictionary at: key put: value asTideObject ].\x0a\x0a\x09^ dictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "keysAndValuesDo:", "at:put:", "asTideObject"]
}),
$globals.HashedCollection);

$core.addMethod(
$core.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
function $TDClient(){return $globals.TDClient||(typeof TDClient=="undefined"?nil:TDClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TDClientProxy())._client_($recv($TDClient())._fromJson_(self));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTideObject",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideObject\x0a\x09^ TDClientProxy client: (TDClient fromJson: self)",
referencedClasses: ["TDClientProxy", "TDClient"],
//>>excludeEnd("ide");
messageSends: ["client:", "fromJson:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asTideArgument",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideArgument\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asTideObject",
protocol: '*Tide-Amber-Core',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asTideObject\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
