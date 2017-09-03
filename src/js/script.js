const left = document.getElementsByClassName("left"),
      right = document.getElementsByClassName("right"),
      header = document.getElementsByClassName("header"),
      loading = document.getElementsByClassName("loading_img"),
      text = document.getElementsByClassName("hayatsu"),
      text_second = document.getElementsByClassName("huziwara");  

function moveUp(el){
  Velocity(el, {
    translateY:["-100%", "0%"]
  }, {
    duration:600,
    ease:"swing"
  });
}

function moveBottom(el){
  Velocity(el, {
    translateY:["100%", "0%"]
  }, {
    duration:600,
    ease:"swing"
  });
}

function fadeIn(el){
  Velocity(el, {
    opacity:["1", "0"],
    top:["10px", "0"]
  }, {
    duration:1000,
    ease:"ease-in-out"
  });
}


//ローディングのアニメーション
function fadeOut(el){
 Velocity(el, {
    scale:["1", "0"]
  }, {
    duration:900,
    ease:"ease"
    
  }),
 Velocity(el, {
    scale:["0", "1"]
  }, {
    duration:400,
    delay:300,
    ease:"ease-in-out",
    complete: function(){
      shutter();
      textMove(text)
      textMove_second(text_second)
    }
  }); 
}

function textMove(el) {
 Velocity(el, {
    opacity:["1", "0"],
    translateY:["0px", "50px"]
  }, {
    duration:1000,
    delay:500,
    ease:"ease-in-out"
  }); 
}

function textMove_second(el) {
 Velocity(el, {
    opacity:["1", "0"],
    translateY:["50px", "0"]
  }, {
    duration:1000,
    delay:500,
    ease:"ease-in-out"
  }); 
}


//ローディングが終わったあとのアニメーション上下
function shutter() {
 moveBottom(left)
 moveUp(right)
}

function animate(){
  fadeIn(header);
}


window.onload = () => {
 fadeOut(loading) 
}

animate();