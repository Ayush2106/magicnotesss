console.log("hello thi sis racinf  moto");
var bluecar = document.getElementById("bluecar");

bluecar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*4))*130);
    bluecar.style.left = random + "px";
})

window.addEventListener("keydown", function(e){
 if (e.keyCode == "39" ){var racecarleft = parseInt(window.getComputedStyle(race).getPropertyValue("left"));
if(racecarleft < 260){
    race.style.left = (racecarleft  +130) + "px";
}
};
if (e.keyCode == "37" ){var racecarleft = parseInt(window.getComputedStyle(race).getPropertyValue("left"));
if(racecarleft > -180){
   race.style.left = (racecarleft - 130) + "px";
}
}
});

   