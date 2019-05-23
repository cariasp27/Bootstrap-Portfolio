// LINKEDIN HOVER ANIMATION
$("#lnkd").on("mouseenter", function() {
    TweenMax.to(this, 0.4, {scale:1.4, ease:Bounce.easeOut})
    TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  })
  // PICTURE HOVER ANIMATION
  $(".pict").on("mouseenter", function() {
    TweenMax.to(this, 0.4, {scale:1.1, ease:Bounce.easeOut})
    TweenMax.to(this, 0.2, {scale:1, delay:0.4})
  })

  