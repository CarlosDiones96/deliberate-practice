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