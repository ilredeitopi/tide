define("tide/Tide-Amber-Examples", ["amber/boot"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Tide-Amber-Examples');
$core.packages["Tide-Amber-Examples"].innerEval = function (expr) { return eval(expr); };
$core.packages["Tide-Amber-Examples"].transport = {"type":"amd","amdNamespace":"tide"};

$core.addClass('TDCounterWidget', null, ['counter', 'header'], 'Tide-Amber-Examples');
$core.addMethod(
$core.method({
selector: "counter",
protocol: 'accessing',
fn: function (){
var self=this;
function $TDClientProxy(){return $globals.TDClientProxy||(typeof TDClientProxy=="undefined"?nil:TDClientProxy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@counter"];
if(($receiver = $2) == null || $receiver.isNil){
self["@counter"]=$recv($TDClientProxy())._on_("/counter");
$1=self["@counter"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counter",{},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "counter\x0a\x09^ counter ifNil: [ counter := TDClientProxy on: '/counter' ]",
referencedClasses: ["TDClientProxy"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "on:"]
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "counter:",
protocol: 'accessing',
fn: function (aCounter){
var self=this;
self["@counter"]=aCounter;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCounter"],
source: "counter: aCounter\x0a\x09counter := aCounter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "decrease",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._decrease();
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decrease",{},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decrease\x0a\x09self counter decrease.\x0a\x09self counter then: [ self update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["decrease", "counter", "then:", "update"]
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "increase",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._increase();
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._update();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increase",{},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increase\x0a\x09self counter increase.\x0a\x09self counter then: [ self update ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["increase", "counter", "then:", "update"]
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "render",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv($1)._connect();
$recv(self._counter())._then_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._appendToJQuery_("body"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09self counter connect.\x0a\x09self counter then: [ \x0a\x09\x09self appendToJQuery: 'body' asJQuery ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "counter", "then:", "appendToJQuery:", "asJQuery"]
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
self["@header"]=$recv($recv(html)._h1())._with_($recv($recv(self._counter())._count())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("++");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._increase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._button();
$recv($3)._with_("--");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._decrease();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1 with: self counter count asString.\x0a\x09html button \x0a\x09\x09with: '++';\x0a\x09\x09onClick: [ self increase ].\x0a\x09html button \x0a\x09\x09with: '--';\x0a\x09\x09onClick: [ self decrease ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "asString", "count", "counter", "button", "onClick:", "increase", "decrease"]
}),
$globals.TDCounterWidget);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@header"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv($recv(self._counter())._count())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.TDCounterWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09header contents: [ :html |\x0a\x09\x09html with: self counter count asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:", "asString", "count", "counter"]
}),
$globals.TDCounterWidget);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22self new render\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDCounterWidget.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'not yet classified',
fn: function (aProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._counter_(aProxy);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aProxy:aProxy},$globals.TDCounterWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy"],
source: "on: aProxy\x0a\x09^ self new\x0a\x09\x09counter: aProxy;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["counter:", "new", "yourself"]
}),
$globals.TDCounterWidget.klass);

});
