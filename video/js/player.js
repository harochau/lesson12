let max=400, mmedia,play,mute,bar,progress,volume,loop;
function init() {
    // alert("player.js works");
    mmedia = document.getElementById("media");
    play = document.getElementById("play");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volume = document.getElementById("volume");
    
    play.addEventListener("click",startPlayback)
    bar.addEventListener("click",changeVideoTiming)

    mmedia.muted=true;
}
function startPlayback() {
    if (mmedia.paused == true || mmedia.ended == true){
    mmedia.play();
    play.value = "Пауза";
    loop = setInterval(status,1000);
    } else {
        mmedia.pause();
        play.value = "Воспр.";
        clearInterval(loop);
    }   
}
function status() {
    if (!mmedia.ended){
    progress.style.width = `${parseInt(max*mmedia.currentTime/mmedia.duration)}px`;
    // loop = setInterval(status,1000);
    } else {
        progress.style.width = `0`;
        play.value = "Воспр."
        clearInterval(loop);
    }
}
function changeVideoTiming(event){
    console.log(event.offsetX);
    mouseX = event.pageX - bar.offsetLeft;
    newTime = mouseX*mmedia.duration/max;
    mmedia.currentTime = newTime; 
    

}
addEventListener("load",init);