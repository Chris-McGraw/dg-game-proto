var backhandShot0 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529506728/DG-GAME-PROTO/backhand-drive-0.png";
var backhandShot1 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529683836/DG-GAME-PROTO/backhand-drive-1.png";
var backhandShot2 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-2.png";
var backhandShot3 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-3.png";
var backhandShot4 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-4.png";
var backhandShot5 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-5.png";
var backhandShot6 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529529600/DG-GAME-PROTO/backhand-drive-6.png";
var backhandShot7 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-7.png";
var backhandShot8 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684065/DG-GAME-PROTO/backhand-drive-8.png";
var backhandShot9 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-9.png";
var backhandShot10 = "https://res.cloudinary.com/dtwyohvli/image/upload/v1529684066/DG-GAME-PROTO/backhand-drive-10.png";

var shotStarted = false;

var $playerSprite = $("#player-sprite");
var $disc = $("#disc");
var $discShadow = $("#disc-shadow");
var $discTemp = $("#disc-temp");


function backhandShotAnimation() {
  shotStarted = true;

  $playerSprite.attr("src", backhandShot0);
  $playerSprite.addClass("player-drive-movement");
  $disc.addClass("player-drive-movement");
  $discShadow.addClass("player-drive-movement");
  $discTemp.addClass("player-drive-movement");

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot1);
  }, 180);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot2);
    $discTemp.addClass("hidden");
    $discTemp.removeClass("player-drive-movement");
  }, 360);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot3);
  }, 540);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot4);
  }, 720);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot5);
  }, 900);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot6);
  }, 1080);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot2);
  }, 1170);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot7);
  }, 1260);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot8);
  }, 1350);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot9);
  }, 1440);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot10);
  }, 2340);

  setTimeout(function() {
    $playerSprite.attr("src", backhandShot0);
  }, 2520);
}
