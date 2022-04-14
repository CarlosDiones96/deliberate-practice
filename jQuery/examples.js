// NEXT >> Using jQuery Core >> CSs, styling and dimensions
// https://learn.jquery.com/using-jquery-core/css-styling-dimensions/

$("h1").css("fontSize");
$("h1").css("font-size");

$("h1").css("fontSize", "100px");
$("h1").css({
    fontSize: "100px",
    color: "red"
});

var h1 = $("h1");
h1.addClass("big");
h1.removeClass("big");
h1.toggleClass("big");

if(h1.hasClass("big")){
    //todo
}

//
$("h1").width("50px");
$("h1").width();
$("h1").height("50px");
$("h1").height();

$("h1").position();

//
$("#myDiv").data("keyName", {foo: "bar"});
$("#myDiv").data("keyName");

//
$("#myList li").each(function(){
    var li = $(this);
    var div= li.find("div.content");
    li.data("contentDiv", div);
});

var firstLi = $("#myList li:first");
firstLi.data("contentDiv").html("new content");

// NEXT >> Utility Methods
// https://learn.jquery.com/using-jquery-core/utility-methods/ 

$.trim("    lots of extra space");

$.each(["foo", "bar", "baz"], function(idx, val){
    console.log("element " + idx + " is " + val);
});

$.each({foo: "bar", baz: "bim"}, function(k, v){
    console.log(k + " : " + v);
});

var myArray = [1, 2, 3, 5];

if( $.inArray(4, myArray) !== -1){
    console.log("found it");
}

//
var firstObject = {foo: "bar", a: "b"};
var secondObject = {foo: "baz"};

var newObject = $.extend(firstObject, secondObject);

console.log(firstObject.foo); //baz
console.log(newObject.foo); //baz

//
var myFunction = function() {
    console.log(this);
};
var myObject = {
    foo: "bar"
};

myFunction(); // window

var myProxyFunction = $.proxy(myFunction, myObject);
myProxyFunction(); // myObject

//
var myObject = {
    myF: function(){
        console.log(this);
    }
};

$("#foo").click(myObject.myFn);
$("#foo").click($.proxy(myObject, "myF")); 

//
$.isArray([]);
$.isFunction(function(){});
$.isNumeric(3.14);

$.type(true);
$.type(3);
$.type("text");
$.type(/test/);

// Iterating over jQuery and non-jQuery Objects
// https://learn.jquery.com/using-jquery-core/iterating/