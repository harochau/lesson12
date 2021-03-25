let max=400, mmedia,play,mute,bar,progress,volume,loop;
function init() {
    // alert("player.js works");
    mmedia = document.getElementById("media");
    play = document.getElementById("play");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volume = document.getElementById("volume");
    
    play.addEventListener("click",startPlayback)
}
function startPlayback() {
    if (mmedia.paused == true || mmedia.ended == true){
    mmedia.play();
    play.value = "Пауза";
    } else {
        mmedia.pause();
        play.value = "Воспр.";

    }
    

    
    
}
addEventListener("load",init);