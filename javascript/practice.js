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
