define("tide/Tide-Amber-Exceptions", ["amber/boot", "amber_core/Kernel-Exceptions"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Tide-Amber-Exceptions');
$core.packages["Tide-Amber-Exceptions"].innerEval = function (expr) { return eval(expr); };
$core.packages["Tide-Amber-Exceptions"].transport = {"type":"amd","amdNamespace":"tide"};

$core.addClass('TDPromiseNotFound', $globals.Error, ['selector'], 'Tide-Amber-Exceptions');
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="No promise was found for selector ".__comma(self._selector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.TDPromiseNotFound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'No promise was found for selector ', self selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "selector"]
}),
$globals.TDPromiseNotFound);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromiseNotFound);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDPromiseNotFound);



$core.addClass('TDRequestError', $globals.Error, ['xhr'], 'Tide-Amber-Exceptions');
$core.addMethod(
$core.method({
selector: "xhr",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@xhr"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xhr\x0a\x09^ xhr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestError);

$core.addMethod(
$core.method({
selector: "xhr:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@xhr"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "xhr: anObject\x0a\x09xhr := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDRequestError);



$core.addClass('TDServerError', $globals.Error, ['code'], 'Tide-Amber-Exceptions');
$core.addMethod(
$core.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@code"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "code\x0a\x09^ code",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDServerError);

$core.addMethod(
$core.method({
selector: "code:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@code"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "code: aString \x0a\x09code := aString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDServerError);



$core.addClass('TDSessionError', $globals.Error, [], 'Tide-Amber-Exceptions');
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return "Tide session error";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Tide session error'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TDSessionError);


});
