Barba.Pjax.start();
const index = document.querySelector('.barba-container'),
      box_item = document.getElementsByClassName('box_item');
      
const ShutterAnimation = Barba.BaseTransition.extend({
 
  // Barba.jsで定義されている。コンストラクタと考えてよいそうです。
  start: function() {
    this.pullDown(400)
      .then(this.newContainerLoading)
      .then(this.disapperEl())
      .then(this.finish.bind(this))
      .then(this.transitionCompleted)
  },
 
  pullDown: function(timer) {
    return new Promise( function (resolve) {
      setTimeout(function () {
        resolve();
      }, timer);
    });
  },
 
  // アニメーションの終了を示すためにthis.done()を呼ぶことが必須
  finish: function() {
    this.done();
  },
  transitionCompleted: function (){
    
    for(var i =0; i < 4; i++){
      setTimeout(demo(i), 4000);
      function demo(i) {
        box_item[i].classList.add('is-active');
     }
    }
  },
  disapperEl: function() {
    for(var i =0; i < 4; i++){
      setTimeout(demo(i), 4000);
      function demo(i) {
        box_item[i].classList.remove('is-active');
     }
    }
  }
});
 
Barba.Pjax.getTransition = function() {
  return ShutterAnimation;
};