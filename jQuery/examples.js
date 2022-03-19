$("h1").remove();

//
$(document).ready(function(){
    console.log("ready");
});

$(function(){
    console.log("ready");
});

function readyFn(jQuery){
    // code goes here
}

$(document).ready(readyFn);
$(window).on("load", readyFn);

//
$(document).ready(function(){
    console.log("document loaded");
});

$(window).on("load", function(){
    console.log("window loaded");
});

//-----------------------------------
// Avoiding conflicts with other libraries

var $j = jQuery.noConflict();
$j(document).ready(function(){
    $j("div").hide();
});


window.onload = function(){
    var mainDiv = $("main"); // this is no jQuery
};

//------------------------------------
jQuery.noConflict();
jQuery(document).ready(function(){
    $("div").hide();
});

window.onload = function(){
    var mainDiv = $("main");
};
//---------------------------

// Including jQuery before other libraries
//<script src="jquery.js"></script>
//<script src="prototype.js"></script>
jQuery(document).ready(function(){
    jQuery("div").hide();
}); 

window.onload = function(){
    var mainDiv = $("div");
};
//--------------------------------
var $jq = jQuery.noConflict();

//
jQuery.noConflict();
(function($){
    // code here
})(jQuery);

jQuery(document).ready(function(){
    // todo
});

jQuery(function($){
    // todo
});

// Learn jQuery => Using jQuery Core > Attributes
// https://learn.jquery.com/using-jquery-core/attributes/ 

$("a").attr("href", "allMyHrefsAreTheSameNow.html");

$("a").attr({
    title: "all the title are the same too",
    href: "something.html"
});

$("a").attr("href");

//
$(".myClass");
$("input[name='first_name'");
$("#contents ul.people li");
$("div.myClass, ul.people");

//Pseudo-selectors
$("a.external:first");
$("tr:odd");

$("#myForm:input");
$("div:visible");
$("div:gt(2)");
$("div:animated");

if($("div.foo").length){
    //todo
}

var divs = $("div");

$("div.foo").has("p");
$("h1").not(".bar");
$("ul li").filter(".current");
$("ul li").first();
$("ul li").eq(5);

$("form :checked");

$("form :disabled");
$("form :enabled");
$("form :input");
$("form :selected");

//-----------------
$("h1").html("hello world!");
$("h1").html(); //hello world!

$("h1").html().addClass("test");

$("#content").find("h3").eq(2).html("new text");

$("#content")
    .find("h3")
    .eq(2)
    .html("new text");

$("#content")
    .find("h3")
    .eq(2)
        .html("new text")
        .end()
    .eq(0)
        .html("alternative text");

// Manipulating Elements
$("#myDiv p:first").html("New <strong>first</strong> paragraph.");

var li = $("#myList li:first").appendTo("#MyList");

$("#myList").append($("#myList li:first"));

$("#myList li:first").clone().appendTo("#myList");


//creating new elements
$("<p>This is a new paragraph</p>");
$('<li class="new">New item</li>');

$("<a/>", {
    html: "This is a new <strong>link</strong>", 
    "class" : "new",
    href: "foo.html"
});

//
var myNewElement = $("<p>New element</p>");
myNewElement.appendTo("#content");
myNewElement.insertAfter("ul:last");
$("ul").last().after(myNewElement.clone());

$("ul").append("<li>list item</li>");

//
var myItems = [];
var myList = $("#myList");

for(var i = 0; i < 100; i++){
    myItems.push("<li>item "+ i+"</li>");
}
myList.append(myItems.join(""));

//-----------------------
$("#myDiv a:first").attr("href", "newdestination.html");

$("#myDiv a:first").attr({
    href: "newdestination.html",
    rel: "nofollow"
});

$("#myDiv a:first").attr({
    rel: "nofollow",
    href: function(idx, href){
        retun "/new/" + href;
    }
});

$("#myDiv a:first").attr("href", function(idx, href){
    return "/new/" + href;
});

// Using jQuery Core >> The jQuery Object
// https://learn.jquery.com/using-jquery-core/jquery-object/ 