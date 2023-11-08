//var video;
var video = document.querySelector(".video");
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    // Reduce the playbackRate by 10%
    video.playbackRate -= 0.1;

    // Log the new speed to the console
    console.log("New video speed: " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    // Increase the playbackRate by 10%
    video.playbackRate += 0.1;

    // Log the new speed to the console
    console.log("New video speed: " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    // Increase video currentTime by 10 seconds
    video.currentTime += 10;

    if (video.currentTime >= video.duration) {
        // If currentTime exceeds video duration, reset to start
        video.currentTime = 0;
    }
});
document.querySelector("#mute").addEventListener("click", function() {
    var muteBtn = document.querySelector("#mute");
    
    // Check if video is already muted
    if(video.muted) {
        // If video is already muted, unmute it and update the button text
        video.muted = false;
        muteBtn.innerHTML = "Mute";
        console.log("Unmute the video");
    } else {
        // If video is not muted, mute it and update the button text
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
        console.log("Mute the video");
    }
});
document.querySelector("#slider").addEventListener("input", function() {
    // Get the value of the slider
    var vsValue = document.querySelector("#slider").value;

    // Update the video volume to the slider value (because the slider value is from 0 to 100, we divide by 100)
    video.volume = vsValue / 100;

    // Update the volume information on the page
    document.querySelector("#volValue").innerHTML = vsValue;

    // Get the volume element to display the current volume
    var volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = "Volume: " + Math.round(video.volume*100) + "%"; 
});
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});


 

