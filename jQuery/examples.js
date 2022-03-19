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
