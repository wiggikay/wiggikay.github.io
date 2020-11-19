var video;
var savedVolume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	if (video.paused) {
		video.play();
	}	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	if (!video.paused) {
		video.pause();
	}
});

document.querySelector("#slower").addEventListener("click", function() {
	if (video.playbackRate > 0.1) {
		let subRate = video.playbackRate * 0.1;
		video.playbackRate = video.playbackRate - subRate;
		console.log("New Speed is " + video.playbackRate);
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	if (video.playbackRate < 3) {
		let subRate = video.playbackRate * 0.1;
		video.playbackRate = video.playbackRate + subRate;
		console.log("New Speed is " + video.playbackRate);
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	let seekpos = video.currentTime + 5;
	if (seekpos < video.seekable.end(0)) {
		video.currentTime = seekpos;
		console.log("Current location" + video.currentTime)
	} else if (seekpos >= video.seekable.end(0)) {
		video.currentTime = video.seekable.start(0);
		console.log("Going back to beginning")
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume > 0) {
		savedVolume = video.volume;
		video.volume = 0;
		document.querySelector("#mute").innerText = "Unmute";
	} else {
		video.volume = savedVolume;
		document.querySelector("#mute").innerText = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let newVolume = 1 * (document.querySelector("#volumeSlider").value / 100);
	video.volume = newVolume;
	console.log(newVolume)
});

document.querySelector("#old").addEventListener("click", function() {
	console.log('old school')
	document.querySelector("#myVideo").style.filter = "grayscale(100%)";
});

document.querySelector("#original").addEventListener("click", function() {
	console.log('normal')
	document.querySelector("#myVideo").style.filter = "grayscale(0%)";
});


