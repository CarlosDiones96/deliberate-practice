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