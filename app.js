var button1 = document.getElementById("video-one");
button1.addEventListener('click', function(){
  var frame = document.querySelector("iframe");
  frame.setAttribute("src", "https://player.vimeo.com/video/116425952");
});

var button2 = document.getElementById("video-two");
button2.addEventListener('click', function(){
  var frame = document.querySelector("iframe");
  frame.setAttribute("src", "https://player.vimeo.com/video/114509199");
});

var button3 = document.getElementById("video-three");
button3.addEventListener('click', function(){
  var frame = document.querySelector("iframe");
  frame.setAttribute("src", "https://player.vimeo.com/video/88209355");
});

var button4 = document.getElementById("video-four");
button4.addEventListener('click', function(){
  var frame = document.querySelector("iframe");
  frame.setAttribute("src", "https://player.vimeo.com/video/88841300");
});

//1, https://player.vimeo.com/video/116425952
//2, https://player.vimeo.com/video/114509199
//3, https://player.vimeo.com/video/88209355
//4, https://player.vimeo.com/video/88841300

// var w = window.innerWidth;
// if (window.innerWidth < 1000) {
//   var player = document.getElementById("playback");
//   player.setAttribute("style", "width: 90%");
// }
