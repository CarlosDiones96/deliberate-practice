// ==> Page 425 : Querying Selected Text

//
function getSelectedText(){
    if(window.getSelection){
        return window.getSelection().toString();
    }else if(document.selection){
        //IE
        return document.selection.createRange().text;
    }
}

//
var q;
if (window.getSelection){
    q = window.getSelection().toString();
}else if(document.selection){
    q = document.selection.createRange().text;
}
void window.open('https://en.wikipedia.org/wiki/' + q);
//

elt.value.substring(elt.selectionStart, elt.selectionEnd);

//
onload(function(){
    var editor = document.getElementById('editor');
    editor.contentDocument.designMode = 'on';
});

//
function bold(){
    document.execCommand('bold', false, null); //deprecated
}

function link(){
    var url = prompt('Enter link destination');
    if(url) document.execCommand('createLink', false, url); //deprecated
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
function shake(e, oncomplete, distance, time){
    if(typeof e === 'string') {
        e = document.getElementById(e);
    }
    if(!time) time = 500;
    if(!distance) distance = 5;

    var originalStyle = e.style.cssText;
    e.style.position = 'relative';
    var start = (new Date()).getTime();

    animate();

    function animate(){
        var now = (new Date()).getTime();
        var elapsed = now - start;
        var fraction = elapsed/time;

        if(fraction < 1){
            var x = distance * Math.sin(fraction*4*Math.PI);
            e.style.left = x + 'px';

            setTimeout(animate, Math.min(25, time-elapsed));
        }else{
            e.style.cssText = originalStyle;
            if(oncomplete) onclomplete(e);
        }
    }
}

function fadeOut(e, oncomplete, time){
    if(typeof e === 'string'){
        e = document.getElementById(e);
    }
    if(!time) time = 500;

    var ease = Math.sqrt;
    var start = (new Date()).getTime();

    animate();

    function animate(){
        var elapsed = (new Date()).getTime()-start;
        var fraction = elapsed/time;
        if(fractrion < 1){
            var opacity = 1 - ease(fraction);
            e.style.opacity = String(opacity);
            setTimeout(animate, 
                Math.min(25, time-elapsed)
                );
        }else{
            e.style.opacity = '0';
            if(oncomplete) oncomplete(e);
        }
    }
}

// => Page 454 (Computed Styles)
var title = document.getElementById("section1title");
var titlestyles = window.getComputedStyle(element, nulll);

//Querying computed styles and setting inline styles
function scale(e, factor){
    var size = parseInt(window.getComputedStyle(e, "").fontSize);
    e.style.fontSize = factor*size + "px";
}

function scaleColor(e, factor){
    var color = window.getComputedStyle(e, "").backgroundColor;
    var components = color.match(/[\d\.]+/g);
    for(var i =0; i < 3; i++){
        var x = Number(components[i]) * factor;
        x = Math.round(Math.min(Math.max(x, 0), 255));
        components[i] = String(x);
    }
    if(components.length == 3){
        e.style.backgroundColor = "rgb(" + components.join() + ")";
    }else{
        e.style.backgroundColor = "rgba(" + components.join() + ")";
    }
}

//
function grabAttention(e){
    e.className = "attention";
}

function releaseAttention(e){
    e.className = "";
}
//

// treat className as set of CSS classes
function classList(e){
    if(e.classList){
        return e.classList;
    }else{
        return new CSSClassList(e);
    }
}

function CSSClassList(e){
    this.e = e;
}

CSSClassList.prototype.contains = function(c){
    if(c.length === 0 || c.indexOf(" ") != -1){
        throw new Error("Invalid class name: '" + c + "'");
    }
    var classes = this.e.className;
    if(!classes) return false;
    if(classes === c) return true;

    return classes.search("\\b"+ c + "\\b") != -1;
};

CSSClassList.prototype.add = function(c){
    if(this.contains(c)) return;
    var classes = this.e.className;
    if(classes && classes[classes.length-1] != " "){
        c = " " + c;
    }
    this.e.className += c;
};

CSSClassList.prototype.remove = function(c){
    if(c.length === 0 || c.indexOf(" ") != -1){
        throw new Error("Invalid class name : '" + c + "'");
    }
    var pattern = new RegExp("\\b" + "\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

CSSClassList.prototype.toggle = function(c){
    if(this.contains(c)){
        this.remove(c)
        return false;
    }else{
        this.add(c);
        return true;
    }
};

CSSClassList.ptototype.toString = function(){
    return this.e.className;
};

CSSClassList.prototype.toArray = function(){
    return this.e.className.match(/\b\w+\b/g) || [];
}

//--------------------
function disableStylesheets(ss){
    if(typeof ss === "number"){
        document.styleSheets[ss].disabled = true;
    }else{
        var sheets = document.querySelectorAll(ss);
        for(var i = 0; i < sheets.length; i++){
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

for(var i = 0; i < rules; i++){
    var rule = rules[i];
    if(!rule.selectorText) continue;

    var selector = rule.selectorText;
    var ruleText = rule.style.cssText;

    if(selector == "h1"){
        if(ss.insertRule){
            ss.insertRule("h2 { "+ ruleText+"}", rules.length);
        }else if(ss.addRule){
            ss.addRule("h2", ruleText, rules.length);
        }
    }

    if(rule.style.textDecoration){
        if(ss.deleteRule){
            ss.deleteRule(i);
        }else if(ss.removeRule){
            ss.removeRule(i);
        }
        i--;
    }
}

//creating a new stylesheet
function addStyles(styles){
    var styleElt, styleSheet;
    if(document.createStyleSheet){
        styleSheet = document.createStyleSheet();
    }else{
        var head = document.getElementsByTagName("head")[0];
        styleElt = document.createElement("style");
        head.appendChild(styleElt);
        styleSheet = document.styleSheets[document.styleSheets.length-1];
    }

    if(typeof styles === "string"){
        if(styleElt){
            styleElt.innerHTNL = styles;
        }else{
            styleSheet.cssText = styles;
        }
    }else{
        var i = 0;
        for(selector in styles){
            if(styleSheet.insertRule){
                var rule = selector + "{" + styles[selector] + "}";
                styleSheet.insertRules(rule, i++);
            }else{
                styleSheet.addRule(selector, styles[selector], i++);
            }
        }
    }
}

// NEXT >>> Page 463 [Handling Events]