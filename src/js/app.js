Barba.Pjax.start();
var box_item = document.getElementsByClassName('box_item');

const ShutterAnimation = Barba.BaseTransition.extend({
 
  start: function() {
    this.pullDown(1000)
      .then(this.newContainerLoading)
      .then(this.disapperEl())
      .then(this.transitionCompleted)
      .then(this.finish.bind(this))
  },
 
  pullDown: function(timer) {
    return new Promise( function (resolve) {
      setTimeout(function () {
        resolve();
      }, timer);
    });
  },
 
  
  transitionCompleted: function (){
    for(var i = 0; i < box_item.length; i++){
      (function(pram) {
        setTimeout(function() {
          box_item = document.getElementsByClassName('box_item');
          box_item[pram].classList.add('is-active');
        }, pram * 200);
      })(i);
    };
  },
  disapperEl: function() {
    for(var i = 0; i < box_item.length; i++){
      (function(pram) {
        setTimeout(function() {
          box_item[pram].classList.remove('is-active');
        }, pram * 200);
      })(i);
    };
  },
  // アニメーションの終了を示すためにthis.done()を呼ぶことが必須
  finish: function() {
    this.done();
  }
});
 
Barba.Pjax.getTransition = function() {
  return ShutterAnimation;
};