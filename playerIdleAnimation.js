var idleFrame1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1537722265/DG-GAME-PROTO/idle-frame-1.png";
var idleFrame2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1537722265/DG-GAME-PROTO/idle-frame-2.png";
var idleFrame3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1537722265/DG-GAME-PROTO/idle-frame-3.png";

var $discTemp = $("#disc-temp");

var shotStarted = false;


function playerIdleAnimation() {
  setTimeout(function() {
    if(shotStarted === false) {
      $playerSprite.attr("src", idleFrame1);
      $discTemp.css("top", "351px");
    }
  }, 400);

  setTimeout(function() {
    if(shotStarted === false) {
      $playerSprite.attr("src", idleFrame2);
      $discTemp.css("top", "352px");
    }
  }, 800);

  setTimeout(function() {
    if(shotStarted === false) {
      $playerSprite.attr("src", idleFrame3);
      $discTemp.css("top", "351px");
    }
  }, 1200);

  setTimeout(function() {
    if(shotStarted === false) {
      $playerSprite.attr("src", backhandShot0);
      $discTemp.css("top", "350px");
    }
  }, 1600);

  setTimeout(function() {
    if(shotStarted === false) {
      playerIdleAnimation();
    }
  }, 2000);
}
