let drumBtns = document.querySelectorAll(".drum");
let noOfDrumBtns = drumBtns.length;

// detecting button press
for (let i = 0; i < noOfDrumBtns; i++) {
	drumBtns[i].addEventListener("click", function () {
		let BtnInnerHTML = this.innerHTML;

		makeSound(BtnInnerHTML);

		buttonAnimation(BtnInnerHTML);
	});
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
	makeSound(event.key);

	buttonAnimation(event.key);
});

function makeSound(key) {
	let audio;
	switch (key) {
		case "w":
			audio = new Audio("./sounds/tom-1.mp3");
			audio.play();
			break;
		case "a":
			audio = new Audio("./sounds/tom-2.mp3");
			audio.play();
			break;
		case "s":
			audio = new Audio("./sounds/tom-3.mp3");
			audio.play();
			break;
		case "d":
			audio = new Audio("./sounds/tom-4.mp3");
			audio.play();
			break;
		case "j":
			audio = new Audio("./sounds/snare.mp3");
			audio.play();
			break;
		case "k":
			audio = new Audio("./sounds/crash.mp3");
			audio.play();
			break;
		case "l":
			audio = new Audio("./sounds/kick-bass.mp3");
			audio.play();
			break;

		default:
			break;
	}
}

function buttonAnimation(currentKey) {
	let activeBtn = document.querySelector("." + currentKey);

	activeBtn.classList.add("pressed");

	// removing the class using setTimeOut()
	setTimeout(function () {
		activeBtn.classList.remove("pressed");
	}, 100);
}
