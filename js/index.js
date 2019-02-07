$( "#language-english" ).click(function() {
   $("html").attr("lang", "en");
  alert( "English called" );
});

$( "#background-default" ).click(function() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1539639087565-41c59f40f3d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b42ea8a85b535e29424c78d8d128e83f&auto=format&fit=crop&w=1950&q=80')"; //set background to the default image
});

$( "#backgroundwhite" ).click(function() {
  document.body.style.background = "#FFFFFF";  //Remove Background image and make white
});

$( "#backgroundblack" ).click(function() {
  document.body.style.background = "#000000"; //Remove Background image and make black
});



//Change Font size scripts

$( "#fontsize-default" ).click(function() {
  var tags = document.getElementsByTagName("p");
  for (i=0; i<tags.length; i++){
    tags[i].style.fontSize = "18px"; //set variable of all p elements font size to 18
}

 tags = document.getElementsByTagName("h1");
for (i=0; i<tags.length; i++){
  tags[i].style.fontSize = "36px"; //set variable of all h1 elements font size to 36
}

tags = document.getElementsByTagName("h2");
for (i=0; i<tags.length; i++){
 tags[i].style.fontSize = "30px"; //set variable of all h2 elements font size to 30
}

tags = document.getElementsByTagName("li"); //set variable of all li elements font size
for (i=0; i<tags.length; i++){
 tags[i].style.fontSize = "16px"; //set variable of all h2 elements font size to 16
}

});

$( "#fontsize-xxl" ).click(function() {
  var tags = document.getElementsByTagName("p");
  for (i=0; i<tags.length; i++)
{
    tags[i].style.fontSize = "20px";
}

tags = document.getElementsByTagName("h1");
for (i=0; i<tags.length; i++){
 tags[i].style.fontSize = "38px"; //set variable of all h1 elements font size to 38
}

tags = document.getElementsByTagName("h2");
for (i=0; i<tags.length; i++){
tags[i].style.fontSize = "32px"; //set variable of all h2 elements font size to 32
}

tags = document.getElementsByTagName("li");
for (i=0; i<tags.length; i++){
tags[i].style.fontSize = "18px"; //set variable of all li elements font size to 18
}


});

$( "#fontsize-small" ).click(function() {
  var tags = document.getElementsByTagName("p");
  for (i=0; i<tags.length; i++)
{
    tags[i].style.fontSize = "14px"; //set variable of all p elements font size to 14
}

tags = document.getElementsByTagName("h1");
for (i=0; i<tags.length; i++){
 tags[i].style.fontSize = "34px"; //set variable of all h1 elements font size to 34
}

tags = document.getElementsByTagName("h2");
for (i=0; i<tags.length; i++){
tags[i].style.fontSize = "28px"; //set variable of all h2 elements font size to 28
}

tags = document.getElementsByTagName("li");
for (i=0; i<tags.length; i++){
tags[i].style.fontSize = "14px"; //set variable of all li elements font size to 14
}

});

$( "#settings" ).click(function() {
    if($(".settings-area").is(':hidden')){
        $(".settings-area").attr("hidden", false);  //unhide settings drop down menu
    }
    else {
      $(".settings-area").attr("hidden", true); //hide settings drop down menu
      }

});

//End of font size script changers
