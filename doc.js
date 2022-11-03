var el = document.querySelector('.heart');
var elOne = document.querySelector('.st1');
var elTwo = document.querySelector('.st2');
var elThree = document.querySelector('.st3');
var elFour = document.querySelector('.st4');
var heading = document.querySelector('.heading');
var overshoot = 1;
var period = 0.3;
var counter = 0;

$(".heart").mousedown(function() {
  TweenMax.to(el, 0.5, {
    scale: 0.7,
    onComplete: function() {
      TweenMax.to(el, 1.2, {
        scale: 1,
        ease: Elastic.easeOut,
        easeParams: [overshoot, period],
        onComplete: bounce
      })
    }
  });
});

$(".heart").click(function() {

  counter++
  console.log(counter);

  if (counter == 5) {

    TweenMax.to(elOne, 0.7, {
      rotation: 25,
      x: -500,
      opacity: 0,

    });

    TweenMax.to(elTwo, 0.5, {
      rotation: 25,
      x: 500,
      opacity: 0,

    });

    TweenMax.to(elThree, 0.6, {
      rotation: 25,
      x: 500,
      opacity: 0,

    });

    TweenMax.to(elFour, 0.4, {
      rotation: 25,
      x: -500,
      opacity: 0,

    });

    TweenMax.to(heading, 0.4, {
      scale: 1.2,
      opacity: 1,

    });

  } else if (counter > 5) {
    $(".heart").hide();
  };

  (function bounce() {
    TweenMax.to(el, 0.1, {
      scale: 0.7,
      onComplete: function() {
        TweenMax.to(el, 1.2, {
          scale: 1,
          ease: Elastic.easeOut,
          easeParams: [overshoot, period],
        })
      }
    })
  }());
});