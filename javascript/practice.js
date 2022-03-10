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

//Looking up multiple elements by ID
function getElements(/*ids...*/){
    var elements = {};
    for(var i = 0; i < arguments.length; i++){
        var id = arguments[i];
        var elt = document.getElementById(id);
        if(elt == null){
            throw new Error("No elemeny with id: " + id);
        }
        elements[id] = elt;
    }
    return elements;
}

var form = document.shipping_adress; //<form name="shipping_adress">

var spans = document.getElementsByTagName("span");

var firstpara = document.getElementsByTagName("p")[0]; //first element
var firstParaSpans = firstpara.getElementsByTagName("span");

document.forms.shipping_adress;

for(var i = 0; i < document.images.length; i++){
    document.images[i].style.display = "none";
}

var content = Array.prototype.map.call(document.getElementsByTagName("p"),
                            function(e) {return e.innerHTML;});


var snapshot = Array.prototype.slice.call(nodelist, 0);

//Find all elements that have "warning" in their class attribute
var warnings = document.getElementsByClassName("warning");
var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");


document.childNodes[0].childNodes[1];
document.firstChild.firstChild.nextSibling;



//Portable document traversal functions
function parent(e, n){
    if(n === undefined) n=1;
    while(n-- && e) e = e.parentNode;
    if(!e || e.nodeType !== 1) return null;
    return e;
}

function sibling(e, n){
    while(e && n!== 0){
        if(n > 0){
            if(e.nextElementSibling) e = e.nextElementSibling;
            else{
                for(e=e.nextSibling; e && e.nodeType !== 1; e=e.nextSibling){
                    //empty loop
                }
            }
            n--;
        }else{
            if(e.previousElementSibling) e = e.previousElementSibling;
            else{
                for(e=e.previousSibling; e&&e.nodeType !==1; e=e.previousSibling){
                    //empty loop
                }
                n++;
            }
        
        }
    }
    return e;
}

function child(e, n){
    if(e.children){
        if(n < 0) n += e.children.length;
        if(n < 0) return null;
        return e.children[n];
    }

    if(n >= 0){
        if(e.firstElementChild) e = e.firstElementChild;
        else{
            for(e = e.firstChild; e && e.nodeType !== 1; e=e.nextSibling){
                //empty
            }
            
        }
        return sibling(e, n);
    }
    else{
        if(e.lastElementChild) e = e.lastElementChild;
        else{
            for(e=e.lastChild; e && e.nodeType !== 1; e=e.previousSibling){
                //empty
            }
        }
        return sibling(e, n+1);
    }
}


//
Element.prototype.next = function(){
    if(this.nextElementSibling) return this.nextElementSibling;
    var sib = this.nextSibling;
    while(sib && sib.nodeType !== 1) sib = sib.nextSibling;
};

//
if(!document.documentElement.children){
    Element.prototype.__defineGetter__("children", function(){
        var kids = [];
        for(var c = this.firstChild; c !== null; c.nextSibling){
            if(c.nodeType === 1) kids.push(c);
        }
        return kids;
    });
}

//==> Page 393 [15.4 Attributes]

var image = document.getElementById("myimage");
var imgurl = image.src;
image.id === "myimage";

//
var f = document.forms[0];
f.action = "https://www.example.com/submit.php";
f.method = "POST";

//
var image = document.images[0];
var width = parseInt(image.getAttribute("WIDTH"));
image.setAttribute("class", "thumbnail");

//Assumes the ES5 Array.map is defined
var sparklines = document.getElementsByClassName("sparkline");
for(var i = 0; i < sparklines.length; i++){
    var dataset = sparklines[i].dataset;
    var ymin = parseFloat(dataset.ymin);
    var ymax = parseFloat(dataset.ymax);
    var data = sparklines[i].textContent.split(" ").map(parseFloat);
    drawSparkLine(sparklines[i], ymin, ymax, data); // Not yet implemented
}

//Another version of the code above
var sparklines = document.getElementsByClassName("sparkline");
for(var i = 0; i < sparklines.length; i++){
    var elt = sparklines[i];
    var ymin = parseFloat(elt.getAttribute("data-ymin"));
    var ymax = parseFloat(elt.getAttribute("data-ymax"));
    var points = elt.getAttribute("data-points");
    var data = elt.textContent.split(" ").map(parseFloat);
    drawSparkline(elt, ymin, ymax, data); //Not yet implemented
}

//
document.body.attributes[0];
document.attributes.bgcolor;
document.body.attributes["ONLOAD"];

//
var para = document.getElementsByTagName("p")[0];
var text = para.textContent;
para.textContent = "Hello World";


//
function textContent(element, value){
    var content = element.textContent;
    if(value === undefined){
        if(content !== undefined) return content;
        else return element.innerText;
    }else{
        if(content !== undefined) element.textContent = value;
        else element.innerText = value;
    }
}

//Finding all Text node descendants of an element
function textContent(e){
    var child, type, s = "";
    for (child = e.firstChild; child != null; child=child.nextSibling){
        type = child.nodeType;
        if(type === 3 || type === 4){
            s += child.nodeValue;
        }else if(type === 1){
            s += textContent(child);
        }
    }
    return s;
}

//Recursively convert all text node descendants of n to uppercase
function upcase(n){
    if(n.nodeType == 3 || n.nodeType == 4){
        n.data = n.data.toUpperCase();
    }
    else{
        for(var i = 0; i < n.childNodes.length; i++){
            upcase(n.childNodes[i]);
        }
    }
}

//Asynchronously load and execute a script from a specified URL
function loadasync (url){
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.scr = url;
    head.appendChild(s);
}

//creating nodes
var newnode = document.createTextNode("text node content");

//Insert the child node into parent, so that it becomes child node n
function insertAt(parent, child, n){
    if(n < 0 || n > parent.childNodes.length){
        throw new Error("invalid index");
    }else if(n == parent.childNodes.length){
        parent.appendChild(child);
    }else{
        parent.insertBefore(child, parent.childNodes[n]);
    }
}

//Sorting the rows of a table
function sortrows(table, n, comparator){
    var tbody = table.tBodies[0];
    var rows = tbody.getElementsByTagName("tr");
    rows = Array.prototype.slice.call(rows, 0);

    rows.sort(function(row1, row2){
        var cell1 = row1.getElementsByTagName("td")[n];
        var cell2 = row2.getElementsByTagName("td")[n];
        var val1 = cell1.textContent || cell1.innerText;
        var val2 = cell2.textContent || cell2.innerText;

        if(comparator){
            return comparator(val1, val2);
        }
        if(val1 < val2) return -1;
        else if(val1 > val2) return 1;
        else return 0;
    });

    for(var i = 0; rows.length; i++) tbody.appendChild(rows[i]);
}

function makeSortable(table){
    var headers = table.getElementsByTagName("th");
    for(var i = 0; i < headers.length; i++){
        (function(n){
            headers[i].onclick = function() { sortrows(table, n);};
        })(i);
    }
}

// ==> Page 402 15.6.3 Removing and Replacing Nodes ===================================

n.parentNode.removeChild(n);

n.parentNode.replaceChild(document.createTextNode("[ REDACTED "), n);

// Replace the node n with a  new <b> element and make n a child of that element
function embolden(n){
    if(typeof n == "string") n = document.getElementById(n);
    var parent = n.parentNode;
    var b = document.createElement("b");
    parent.replaceChild(b, n);
    b.appendChild(n);
}

// Implementing the outerHTML property using innerHTML
(function(){
    if(document.createElement("div").outerHTML) return;

    function outerHTMLGetter(){
        var container = document.createElement("div");
        container.appendChild(this.cloneNode(true));
        return container.innerHTML;
    }

    function outerHTMLSetter(value){
        var container = document.createElement("div");
        container.innerHTML = value;
        while(container.firstChild){
            this.parentNode.insertBefore(container.firstChild, this);
        }
        this.parentNode.removeChild(this);
    }

    if(Object.defineProperty){
        Object.defineProperty(Element.prototype, "outerHTML", {
            get: outerHTMLGetter,
            set: outerHTMLSetter,
            enumerable: false, 
            configurable: true
        });
    }else{
        Element.prototype.__defineGetter__("outerHTML", outerHTMLGetter);
        Element.prototype.__defineSetter__("outerHTML", outerHTMLSetter);
    }
}());

//Using DocumentFragments
var frag = document.createDocumentFragment();

// Reverse the order of the children of Node n
function reverse(n){
    var f = document.createDocumentFragment();
    while(n.lastChild) f.appendChild(n.lastChild);
    n.appendChild(f);
}

// Implementing insertAdjacentHTML() using innerHTML
var Insert = (function(){
    if(document.createElement("div").insertAdjacentHTML){
        return {
            before: function(e, h) {e.insertAdjacentHTML("beforebegin", h);},
            after: function(e, h) {e.insertAdjacentHTML("afterend", h);},
            atStart: function(e, h) {e.insertAdjacentHTML("afterbegin", h);},
            atEnd: function(e, h) {e.insertAdjacentHTML("beforeend", h);}
        };
    }

    function fragment(html){
        var elt = document.createElement("div");
        var frag = document.createDocumentFragment();
        elt.innerHTML = html;
        while(elt.firstChild){
            frag.appendChild(elt.firstChild);
        }
        return frag;
    }

    var Insert = {
        before: function(elt, html){
            elt.parentNode.insertBefore(fragment(html), elt);
        },
        after: function(elt, html){
            elt.parentNode.insertBefore(fragment(html), elt.nextSibling);
        },
        atStart: function(elt, html){
            elt.insertBefore(fragment(html), elt.firstChild);
        },
        atEnd: function(elt, html){
            elt.appendChild(fragment(html));
        }
    };

    Element.prototype.insertAdjacent = function(pos, html){
        switch(pos.toLowerCase()){
            case "beforebegin": return Insert.before(this, html);
            case "afterend": return Insert.after(this, html);
            case "afterbegin": return Insert.atStart(this, html);
            case "beforeend": return Insert.atEnd(this, html);
        }
    };
    return Insert;
}());

// == > Page 405 Example: Generating a Table of Contents
onLoad(function(){
    var toc = document.getElementById("TOC");
    if(!toc){
        toc = document.createElement("div");
        toc.id = "TOC";
        document.body.insertBefore(toc, document.body.firstChild);
    }

    var headings;
    if(document.querySelectorAll){
        headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    }else{
        headings = findHeadings(document.body, []);
    }

    function findHeadings(root, sects){
        for(var a = root.firstChild; c != null; c.nextSibling){
            if(c.nodeType !== 1) continue;
            if(c.tagName.length == 2 && c.tagName.charAt(0) == "H"){
                sects.push(c);
            }else{
                return sects;
            }
        }
        var sectionNumbers = [0,0,0,0,0,0];

        for(var h = 0; h < headings.length; h++){
            var heading = headings[h];
            if(heading.parentNode == toc) continue;
            var level = parseInt(heading.tagName.charAt(1));
            if(isNaN(level) || level < 1 || level > 6) continue;

            sectionNumbers[level-1]++;
            for(var i = level; i < 6; i++) sectionNumbers[i] = 0;

            var sectionNumber = sectionNumbers.slice(0, level).join(".");

            var span = document.createElement("span");
            span.className = "TOCSectNum";
            span.innerHTML = sectionNumber;
            heading.insertBefore(span, heading.firstChild);

            var anchor = document.createElement("a");
            anchor.name = "TOC" + sectionName;
            heading.parentNode.insertBefore(anchor, heading);
            anchor.appendChild(heading);

            var link = document.createElement("a");
            link.href = "#TOC" + sectionNumber;
            link.innerHTML = heading.innerHTML;

            var entry = document.createElement("div");
            entry.className = "TOCEntry TOCLevel" + level;
            entry.appendChild(link);

            toc.appendChild(entry);
        }
    }
});

//Querying the scrollbar positions of a window
function getScrollOfOffsets(w){
    var w = w || window;
    if(w.pageXOffset != null) {
        return {x: w.pageXOffset, y:w.pageYOffset};
    }

    var d = w.document;
    if(document.compatMode == "CSS1Compat"){
        return {x:d.documentElement.scrollLeft, y:d.documentElement.scrollTop};
    }
    return {x:d.body.scrollLeft, y:body.scrollTop};
}

//Querying the viewport size of a window
function getViewportSize(w){
    w = w || window;

    if(w.innerWidth != null) return {w:w.innerWidth, h:w.innerHeight};

    var d= w.document;
    if(document.compatMode == "CSS1Compat"){
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        };
    }
    return {w: d.body.clientWidth, h:d.body.clientWidth};
}

//
var box = e.getBoundingClientRect();
var offsets = getScrollOffsets();
var y = box.top + offsets.y;

var box = e.getBoundingClientRect();
var w = box.width || (box.right - box.left);
var h = box.height || (box.bottom - box.top);

// ==> Page 411
var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight;
window.scrollTo(0, documentHeight - viewportHeight);

//Scroll 10 px down every 200 ms
javascript:void setInterval(function() {scrollBy(0, 10)}, 200);

//
function getElementPosition(e){
    var x = 0, y = 0;
    while(e != null){
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return {x: x, y: y};
}

function getElementPos(elt){
    var x = 0, y = 0;
    for(var e = elt; e != null; e = e.offsetParent){
        x += e.offsetLeft;
        y += e.offsetTop;
    }

    for(var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode){
        x -= e.scrollLeft;
        y -= e.scrollTop;
    }
    return {x:x, y:y};
}

//
var fields = document.getElementById("adress").getElementsByTagName("input");

document.querySelectorAll('#shipping input[type="radio"]');
document.querySelectorAll('shipping input[type="radio"][name="method"]');

//
document.forms.adress.elements[0];
document.forms.address.elements.street;

//
var methods = document.forms.shipping.elements.method;

var shipping_method;
for(var i = 0; i < methods.length; i++){
    if(methods[i].checked) shipping_method = methods[i].value;
}

//
var zaire = new Option("Zaire", "zaire", false, false);
var countries = document.address.country;
country.options[countries.options.length] = zaire;

//
if(document.referrer.indexOf("http://www.google.com/search?") == 0){
    var args = document.referrer.substring(ref.indexOf("?")+1).split("&");
    for(var i = 0; args.length; i++){
        if(args[i].substring(0, 2) == "q="){
            document.write("<p>Welcome google user. ");
            document.write("You searched for: " + 
                    unescape(args[i].substring(2)).replace('+', ' ')); //depracated
            
            break;
        }
    }
}

//A streaming API for the innerHTML property
function ElementStream(elt){
    if(typeof elt === "string") elt = document.getElementById(elt);
    this.elt = elt;
    this.buffer = "";
}

ElementStream.prototype.write = function(){
    this.buffer += Array.prototype.join.call(arguments, "");
};

ElementStream.prototype.writeln = function(){
    this.buffer += Array.ptototype.join.call(arguments, "") + "\n";
};

ElementStream.prototype.close = function(){
    this.elt.innerHTML = this.buffer;
    this.buffer = "";
};

// ==> Page 425 : Querying Selected Text