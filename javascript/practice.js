// Invokes a function when the document loads
function onLoad(f){
    if(onLoad.loaded){
        window.setTimeout(f, 0);
    }else if(window.addEventListener){
        window.addEventListener("load", f, false);
    }else if(window.attachEvent){
        window.attachEvent("onload", f);
    }
}

onLoad.loaded = false;
onLoad(function() { onLoad.loaded = true;});

//====================================================

// Copying property attributes
Object.defineProperty(Object.prototype,
    "extend",
    {
        writable: true,
        enumerable: false,
        confugurable: true,
        value: function(o){
            var names = Object.getOwnPropertyNames(o);
            for(var i = 0; i < names.length; i++){
                if(names[i] in this) continue;
                var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                Object.defineProperty(this, names[i], desc);
            }
        }
    });

//====================================================

//Creating a new object that inherits from a prototype
function inherit(p){
    if(p == null){
        throw TypeError();
    }
    if(Object.create){
        return Object.create(p);
    }
    var t = typeof p;
    if(t !== "object" && t !== "function"){
        throw TypeError();
    }
    function f() {};
    f.prototype = p;
    return new f();
}

//====================================================

//This function uses arguments.callee, so it won't work
//in strict mode
function check(args){
    var actual = args.length;
    var expected = args.calee.length;
    if(actual !== expected){
        throw Error("Expected: "+ expected + "args; got " + actual);
    }
}

function f(x, y, z){
    check(arguments);
    return x + y + z;
}

//====================================================

//Replace the method named m of the object o with a version that logs
//messages before and after invoking the original method
function trace(o, m){
    var original = o[m];
    o[m] = function() {
        console.log(new Date(), "Entending:", m);
        var result = original.apply(this, arguments);
        console.log(new Date(), "Exiting:", m);
        return result;
    };
}


//====================================================

window.location = "https://www.example.com";
setTimeout(function(){alert("hello")}, 2000);

var timestamp = document.getElementById("timestamp");

if(timestamp.firstChild == null){
    timestamp.appendChild(
        document.createTextNode(new Date().toString())
    );
}

timestamp.style.backgroundColor = "yellow";
timestamp.className = "highlight";

timestamp.onclick = function() {this.innerHTML = new Date().toString();}


//Simple client-side javascript for revealing content
window.onload = function(){
    var elements = document.getElementsByClassName("reveal");
    for(var i = 0; i < elements.length; i++){
        var elt = elements[i];
        var title = elt.getElementsByClassName("handle")[0];
        title.onclick = function(){
            if(elt.className == "reveal"){
                elt.className = "revealed";
            }else if(elt.className == "revealed"){
                elt.className = "reveal";
            }
        };
    }
};

//Define a function to display the current time
function displayTime(){
    var elt = document.getElementById("clock");
    var now = new Date();
    elt.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}
window.onload = displayTime;


//====================================================

var e = "", r = "";
do{
    e = prompt("Expression: " + e + "\n" + r + "\n", e);
    try{
        r = "Result: " + eval(e);
    }catch(ex){
        r = ex;
    }

}while(e);
void 0;

//====================================================

//Generating document content at load time
function factorial(n){
    if(n <= 1) return n;
    else return n*factorial(n-1);
}

document.write("<table>");
document.write("<tr><th>n</th><th>n!</th></tr>");
for(var i = 1; i <= 10; i++){
    document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}
document.write("</table>");
document.write("Generated at: " + new Date());

//Asynchronously loading and executing a script
function loadasync(url){
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);
}

//====================================================

window.onload = function() {};
document.getElementById("button1").onclick = function(){};
function handleResponse(){}
request.onreadystatechange = handleResponse;

window.addEventListener("load", function() {}, false);
request.addEventListener("readystatechange", function(){}, false);

window.attachEvent("onload", function(){});

//onLoad: invoke a function when the document loads
function onLoad(f){
    if(onLoad.loaded){
        window.setTimeout(f, 0);
    }else if(window.addEventListener){
        window.addEventListener("load", f, false);
    }else if(window.attachEvent){
        window.attachEvent("onload", f);
    }
}

onLoad.loaded = false;
onLoad(function(){onLoad.loaded = true;});

//====================================================
if(element.addEventListener){
    element.addEventListener("keydown", handler, false);
    element.addEventListener("keypress", handler, false);
}else if(element.attachEvent){
    element.attachEvent("onkeydown", handler);
    element.attachEvent("onkeypress", handler);
}else{
    element.onkeydown = element.onkeypress = handler;
}


setInterval(updateClock, 60000);

//A timer utility function
function invoke(f, start, interval, end){
    if(!start) start = 0;
    if(arguments.length <= 2){
        setTimeout(f, start);
    }else{
        setTimeout(repeat, start);
        function repeat(){
            var h = setInterval(f, interval);
            if(end) setTimeout(function() { clearInterval(h);}, end);
        }
    }
}

//Extracting arguments from the search string of a URL
function urlArgs(){
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++){
        var pos = pairs[i].indexOf('=');
        if(pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

//====================================================
if (!XMLHttpRequest) location.replace("staticpage.html");

location = "#top";

location.search = "?page=" + (pagenum+1);

history.go(-2);


//Browser sniffing using navigator.userAgent
var browser = (function(){
    var s = navigator.userAgent.toLowerCase();
    var match = /(webkit)[\/]([\w.]+)/.exec(s) ||
    /(opera)(?:.*version)?[\/]([\w.]+)/.exec(s) ||
    /(msie)([\w.]+)/.exec(s) ||
    !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
    [];
    return {name: match[1] || "", version: match[2] || "o"};
}());



do{
    var name = prompt("What is your name?");
    var correct = confirm("You entered '"+ name + "'.\n");
}while(!correct)
alert("Hello, " + name); //deprecated


//using ShowModalDialog()
var args = dialogArguments;
var text = "<legend>" + args[0] + "</legend>";
for(var i = 0; i < args.length; i++){
    text += "<label>" + args[i] + ": <input id='f" + i + "'></label><br>";
}
document.getElementById("fields").innerHTML = text;

function cancel() { window.close();}

function okay(){
    window.returnValue = [];
    for(var i = 1; args.length; i++){
        window.returnValue[i-1] = document.getElementById("f" + i).value;
    }
    window.close();
}

//Display error messages in a dialog box, but never more than 3
window.onerror = function(msg, url, line){
    if(onerror.num++ < onerror.max){
        alert("Error: " + msg + "\n" + url + ":" + line);
        return true;
    }
}
onerror.max = 3;
onerror.num = 0;

//
var ui = ["input", "prompt", "heading"];
ui.forEach(function(id){
    ui[id] = document.getElementById(id);
});

//
var $ = function(id) {return document.getElementById(id);}
ui.prompt = $("prompt");

//
var w = window.open("smallwin.html", "smallwin", "width=400,height=350,status=yes,resizable=yes");

var w = window.open();
w.alert("Example text");
w.location = "https://example.com";

w.opener !== null;
w.open().opener === w;

w.close();

window.close();

//
parent.history.back();

parent == self;

var iframeElement = document.getElementById("f1");
var childFrame = document.getElementById("f1").contentWindow;

var elt = document.getElementById("f1");
var win = elt.contentWindow;
win.frameElement === elt; //always true for frames
window.frameElement === null; //for toplevel windows

//====================================================
