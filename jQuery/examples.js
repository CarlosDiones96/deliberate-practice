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

//------------------------------------------------------
$('nav a').on('click', function(e){
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + '#content').hide().fadeIn('slow');
});

//
$('#selector a').on('click', function(e){
    e.preventDefault();
    var queryString = 'vote=' + event.target.id;
    $.get('votes.php', queryString, function(data){
        $('#selector').html(data);
    });
});

$('#register').on('submit', function(e){
    e.preventDefault();
    var details = $('#register').serialize();
    $.post('register.php', details, function(data){
        $('#register').html(data);
    });
});

//-----------------------------------
$(function(){
    var times;
    $.ajax({
        beforeSend: function(xhr){
            if(xhr.overrideMimeType){
                xhr.overrideMimeType("application/json");
            }
        }
    });    
});

function loadTimetable(){
    $.getJSON('data/example.json')
    .done(function(data){
        times = data;
    }).fail(function(){
        $('#event').html('Sorry');
    });
}

loadTimetable();

//-------------------------------------
$('#content').on('click', '#sessions li a', function(e){
    e.preventDefault();
    var fragment = this.href;

    fragment = fragment.replace('#', ' #');
    $('#details').load(fragment);

    $('#sessions a.current').removeClass('current');
    $(this).addClass('current');
});

$('nav a').on('click', function(e){
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('slow');
});

$(function(){
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function(){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var newText = $('input:text').val();
        $('li:last').after('<li>' +  newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
});



// Iterating over jQuery and non-jQuery Objects
// https://learn.jquery.com/using-jquery-core/iterating/

var sum = 0;
var arr = [1 ,2 , 3, 4, 5];

for(var i = 0, l = arr.length; i < l; i++){
    sum += arr[i];
}

console.log(sum); // 15

$each(arr, function(index, value){
    sum += value;
});

//
var sum = 0;
var obj = {
    foo: 1,
    bar: 2
};

for(var item in obj){
    sum += obj[item];
}
console.log(sum);

$.each(obj, function(key, value){
    sum += value;
});
console.log(sum);

//
$('li').each(function(index, element){
    console.log($(this).text());
});

//
$('li').each(function(index, listItem){
    this === listItem;
    $.ajax({
        success: function(data){
            this !== listItem;
        }
    });
});

//
$('li').each(function(index, el){
    $(el).addClass('newClass');
});

$('li').addClass('newClass');

//
$('input').each(function(i, el){
    var elem = $(el);
    elem.val(elem.val() + '%');
});

//
var newArr = [];
$('li').each(function(){
    newArray.push(this.id);
});

$('li').map(function(index, element){
    return this.id;
}).get();


// Using jQuery’s .index() Function
// https://learn.jquery.com/using-jquery-core/understanding-index/
