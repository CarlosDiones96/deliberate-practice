// ==> Page 425 : Querying Selected Text

//
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        //IE
        return document.selection.createRange().text;
    }
}

//
var q;
if (window.getSelection) {
    q = window.getSelection().toString();
} else if (document.selection) {
    q = document.selection.createRange().text;
}
void window.open('https://en.wikipedia.org/wiki/' + q);
//

elt.value.substring(elt.selectionStart, elt.selectionEnd);

//
onload(function () {
    var editor = document.getElementById('editor');
    editor.contentDocument.designMode = 'on';
});

//
function bold() {
    document.execCommand('bold', false, null); //deprecated
}

function link() {
    var url = prompt('Enter link destination');
    if (url) document.execCommand('createLink', false, url); //deprecated
}

//SCRIPTING INLINE STYLES
e.style.fontSize = '24px';
e.style.fontWeight = 'bold';
e.style.color = 'red';
e.style.fontFamily = 'sans-serif';
e.style.position = 'absolute';
e.style.backgroundColor = '#ffaa00';
e.style.left = '300px';
e.style.left = (x0 + left_margin + left_border + left_padding) + 'px';
e.style.margin = topMargin + 'px' + rightMargin + 'px' +
    bottomMargin + 'px' + leftMargin + 'px';

e.style.marginTop = topMargin + 'px';
e.style.marginRight = marginRight + 'px';
e.style.marginBottom = bottomMargin + 'px';
e.style.marginLeft = leftMargin + 'px';

//Attributes
e.setAttribute('style', s);
e.style.cssText = s;

s = e.getAttribute('style');
s = e.style.cssText;

//CSS Animations
function shake(e, oncomplete, distance, time) {
    if (typeof e === 'string') {
        e = document.getElementById(e);
    }
    if (!time) time = 500;
    if (!distance) distance = 5;

    var originalStyle = e.style.cssText;
    e.style.position = 'relative';
    var start = (new Date()).getTime();

    animate();

    function animate() {
        var now = (new Date()).getTime();
        var elapsed = now - start;
        var fraction = elapsed / time;

        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + 'px';

            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            e.style.cssText = originalStyle;
            if (oncomplete) onclomplete(e);
        }
    }
}

function fadeOut(e, oncomplete, time) {
    if (typeof e === 'string') {
        e = document.getElementById(e);
    }
    if (!time) time = 500;

    var ease = Math.sqrt;
    var start = (new Date()).getTime();

    animate();

    function animate() {
        var elapsed = (new Date()).getTime() - start;
        var fraction = elapsed / time;
        if (fractrion < 1) {
            var opacity = 1 - ease(fraction);
            e.style.opacity = String(opacity);
            setTimeout(animate,
                Math.min(25, time - elapsed)
            );
        } else {
            e.style.opacity = '0';
            if (oncomplete) oncomplete(e);
        }
    }
}

// => Page 454 (Computed Styles)
var title = document.getElementById("section1title");
var titlestyles = window.getComputedStyle(element, nulll);

//Querying computed styles and setting inline styles
function scale(e, factor) {
    var size = parseInt(window.getComputedStyle(e, "").fontSize);
    e.style.fontSize = factor * size + "px";
}

function scaleColor(e, factor) {
    var color = window.getComputedStyle(e, "").backgroundColor;
    var components = color.match(/[\d\.]+/g);
    for (var i = 0; i < 3; i++) {
        var x = Number(components[i]) * factor;
        x = Math.round(Math.min(Math.max(x, 0), 255));
        components[i] = String(x);
    }
    if (components.length == 3) {
        e.style.backgroundColor = "rgb(" + components.join() + ")";
    } else {
        e.style.backgroundColor = "rgba(" + components.join() + ")";
    }
}

//
function grabAttention(e) {
    e.className = "attention";
}

function releaseAttention(e) {
    e.className = "";
}
//

// treat className as set of CSS classes
function classList(e) {
    if (e.classList) {
        return e.classList;
    } else {
        return new CSSClassList(e);
    }
}

function CSSClassList(e) {
    this.e = e;
}

CSSClassList.prototype.contains = function (c) {
    if (c.length === 0 || c.indexOf(" ") != -1) {
        throw new Error("Invalid class name: '" + c + "'");
    }
    var classes = this.e.className;
    if (!classes) return false;
    if (classes === c) return true;

    return classes.search("\\b" + c + "\\b") != -1;
};

CSSClassList.prototype.add = function (c) {
    if (this.contains(c)) return;
    var classes = this.e.className;
    if (classes && classes[classes.length - 1] != " ") {
        c = " " + c;
    }
    this.e.className += c;
};

CSSClassList.prototype.remove = function (c) {
    if (c.length === 0 || c.indexOf(" ") != -1) {
        throw new Error("Invalid class name : '" + c + "'");
    }
    var pattern = new RegExp("\\b" + "\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

CSSClassList.prototype.toggle = function (c) {
    if (this.contains(c)) {
        this.remove(c)
        return false;
    } else {
        this.add(c);
        return true;
    }
};

CSSClassList.ptototype.toString = function () {
    return this.e.className;
};

CSSClassList.prototype.toArray = function () {
    return this.e.className.match(/\b\w+\b/g) || [];
}

//--------------------
function disableStylesheets(ss) {
    if (typeof ss === "number") {
        document.styleSheets[ss].disabled = true;
    } else {
        var sheets = document.querySelectorAll(ss);
        for (var i = 0; i < sheets.length; i++) {
            sheets[i].disabled = true;
        }
    }
}


//
var firstRule = document.styleSheets[0].cssRules[0];

document.styleSheets[0].insertRule("H1 { text-weight: bold; }", 0);

//
var ss = document.styleSheets[0];
var rules = ss.cssRules ? ss.cssRules : ss.rules;

for (var i = 0; i < rules; i++) {
    var rule = rules[i];
    if (!rule.selectorText) continue;

    var selector = rule.selectorText;
    var ruleText = rule.style.cssText;

    if (selector == "h1") {
        if (ss.insertRule) {
            ss.insertRule("h2 { " + ruleText + "}", rules.length);
        } else if (ss.addRule) {
            ss.addRule("h2", ruleText, rules.length);
        }
    }

    if (rule.style.textDecoration) {
        if (ss.deleteRule) {
            ss.deleteRule(i);
        } else if (ss.removeRule) {
            ss.removeRule(i);
        }
        i--;
    }
}

//creating a new stylesheet
function addStyles(styles) {
    var styleElt, styleSheet;
    if (document.createStyleSheet) {
        styleSheet = document.createStyleSheet();
    } else {
        var head = document.getElementsByTagName("head")[0];
        styleElt = document.createElement("style");
        head.appendChild(styleElt);
        styleSheet = document.styleSheets[document.styleSheets.length - 1];
    }

    if (typeof styles === "string") {
        if (styleElt) {
            styleElt.innerHTNL = styles;
        } else {
            styleSheet.cssText = styles;
        }
    } else {
        var i = 0;
        for (selector in styles) {
            if (styleSheet.insertRule) {
                var rule = selector + "{" + styles[selector] + "}";
                styleSheet.insertRules(rule, i++);
            } else {
                styleSheet.addRule(selector, styles[selector], i++);
            }
        }
    }
}

// NEXT >>> Page 463 [Handling Events]
window.onload = function () {
    var elt = document.getElementById("shipping_address");
    elt.onsubmit = function () { return ValidityState(this); }
}

//
var b = document.getElementById("myBtn");
b.onclick = function() {
    alert("Thanks");
};
b.addEventListener("click", function() {
    alert("Thanks again");
});

//
document.removeEventListener("mousemove", handleMouseMove, true);
document.removeEventListener("mouseup", handleMouseUp, true);

//
var b = document.getElementById("mybutton");
var handler = function() { alert("Thanks");};
if(b.addEventListener){
    b.addEventListener("click", handler, false);
}else if(b.attachEvent){
    b.attachEvent("onclick", handler);
}

//
function handler(event){
    event = event || window.event;
    // todo
}

//
function addEvent(target, type, handler){
    if(target.addEventListener){
        target.addEventListener(type, handler, false);
    }else{
        target.attachEvent("on" + type, 
                            function(event){
                                return handler.call(target, event);
                            });
    }
}

//
function cancelHandler(event){
    var event = event || window.event;

    if(event.preventDefault) event.preventDefault();
    if(event.returnValue) event.returnValue = false;
    return false;
}

//Invoking functions when the document is ready
var whenReady = (function(){
    var funcs = [];
    var ready = false;

    function handler(e){
        if(ready) return;
        if(e.type === "readystatechange" && document.readyState !== "complete") return;
        
        for(var i = 0; i < funcs.length; i++){
            funcs[i].call(document);
        }
        ready = true;
        funcs = null;
    }

    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded", handler, false);
        document.addEventListener("readystatechange", handler, false);
        window.addEventListener("load", handler, false);
    }else if(document.attachEvent){
        document.attachEvent("onreadystatechange", handler);
        window.attachEvent("onload", handler);
    }

    return function whenReady(f){
        if(ready) f.call(document);
        else funcs.push(f);
    }
}());

<<<<<<< HEAD
// NEXT >>> Page 495 [Mouse Events]
whenReady(function(){
    var clock = document.getElementById("clock");
    var icon = new Image();
    icon.src = "clock-icon.png";

    function displayTime(){
        var now = new Date();
        var hrs = now.getHours(), 
            mins = now.getMinutes();
        if(mins < 10) mins = "0"+ mins;
        clock.innerHTML = hrs + ":" + mins;
        setTimeout(displayTime, 60000);
    }

    displayTime();

    clock.draggable = true;

    clock.ondragstart = function(event){
        var event = event || window.event;
        var dt = event.dataTransfer;
        dt.setData("Text", Date() + "\n");

        if(dt.setDragImage) dt.setDragImage(icon, 0, 0);
    };
});

// A list as drop target and drag source
whenReady(function(){
    var lists = document.getElementsByTagName("ul");
    var regexp = /\bdnd\b/;
    for(var i = 0; i < lists.length; i++){
        if(regexp.test(lists[i].className)) DelayNode(lists[i]);
    }
    function dnd(list){
        var original_class = list.className;
        var entered = 0;

        list.ondragenter = function(e){
            e = e || window.event;
            var from = e.relatedTarget;
            entered++;
            if((from && !ischild(from, list)) || entered == 1){
                var dt = e.dataTransfer;
                var types = dt.types;
                if(!types || (types.contains && types.contains("text/plain")) ||
                (types.indexOf && types.indexOf("text/plain") !== -1)){
                    list.className = original_class + " droppable";
                    return false;
                }
                return;
            }
            return false;
        };

        list.ondragover = function(e) {return false;};

        list.ondragleave = function(e){
            e = e || window.event;
            var to = e.relatedTarget;

            entered--;
            if((to && !ischild(to, list)) || entered <= 0){
                list.className = original_class;
                entered = 0;
            }
            return false;
        };

        list.ondrop = function(e){
            e = e || window.event;
            var dt = e.dataTransfer;
            var text = dt.getData("Text");

            if(text){
                var item = document.createElement("li");
                item.draggable == true;
                item.appendChild(document.createTextNode(text));
                list.appendChild(item);

                list.className = original_class;
                entered = 0;

                return false;
            }
        };

        var items = list.getElementsByTagName("li");
        for(var i = 0; i < items.length; i++){
            items[i].draggable = true;
        }

        list.ondragstart = function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName !== "LI") return false;
            var dt = e.dataTransfer;
            dt.setData("Text", target.innerHTML || target.textContent);
            dt.effectAllowed = "copyMove";
        };

        list.ondragend = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(e.dataTransfer.dropEffect === "move"){
                target.parentNode.removeChild(target);
            }
        };

        function ischild(a, b){
            for(;a;a=a.parentNode) {
                if(a === b) return true;
            }
            return false;
        }

    }
});

//
function dataAtualFormatada(){
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    
    return diaF + '/' + mesF + '/' + anoF;
}

$('#Data').value(dataAtualFormatada);

//ES8
function dataAtualFormatada2(){
    var data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
}

// NEXT >>> Page 495 [Mouse Events]
// NEXT >> Page 499 [TEXT EVENTS]