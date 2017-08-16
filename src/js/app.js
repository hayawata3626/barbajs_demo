Barba.Pjax.start();
const box = document.querySelector('.box_item');
const ShutterAnimation = Barba.BaseTransition.extend({
 
  // Barba.jsで定義されている。コンストラクタと考えてよいそうです。
  start: function() {
    this.shutter(400)
      .then(this.newContainerLoading)
      .then(this.disapperEl())
      .then(this.finish.bind(this))
      .then(this.transitionCompleted)
  },
 
  // シャッターが閉まるようなアニメーションをさせる処理
  shutter: function(timer) {
    return new Promise( function (resolve) {
      // 画面が黄色く埋まるまで（400ms）待つ
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
    var box = document.querySelector('.box_item');
    var index = document.querySelector('.barba-container');
    var sample = document.getElementsByClassName('box_item');
    
    for(var i =0; i < 4; i++){
      setTimeout(demo(i), 4000);
      function demo(i) {
        sample[i].classList.add('is-active');
     }
    }
  },
  disapperEl: function() {
    const box = document.querySelector('.box_item')
    box.classList.remove('is-active');
  }
 
});
 
Barba.Pjax.getTransition = function() {
  return ShutterAnimation;
};