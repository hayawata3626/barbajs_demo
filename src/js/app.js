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

//headの情報を非同期で更新する処理
Barba.Dispatcher.on( 'newPageReady', function( currentStatus, oldStatus, container, newPageRawHTML ) {
  if ( Barba.HistoryManager.history.length === 1 ) {
      return;
  }
  var head = document.head,
      newPageRawHead = newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
      newPageHead = document.createElement( 'head' );
  newPageHead.innerHTML = newPageRawHead;
  var headTags = [
      "meta[name='keywords']",
      "meta[name='description']",
      "meta[property^='og']",
      "meta[name^='twitter']",
      "meta[itemprop]",
      "link[itemprop]",
      "link[rel='prev']",
      "link[rel='next']",
      "link[rel='canonical']",
      "link[rel='alternate']"
  ].join( ',' );
  var oldHeadTags = head.querySelectorAll( headTags );
  for ( var i = 0; i < oldHeadTags.length; i++ ) {
      head.removeChild( oldHeadTags[ i ] );
  }
  var newHeadTags = newPageHead.querySelectorAll( headTags );
  for ( var i = 0; i < newHeadTags.length; i++ ) {
      head.appendChild( newHeadTags[ i ] );
  }
});

Barba.Pjax.getTransition = () =>  {
  return ShutterAnimation;
};
