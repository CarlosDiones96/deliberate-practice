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
