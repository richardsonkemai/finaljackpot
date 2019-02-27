// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
var a = document.getElementById("slot1");
var b = document.getElementById("slot2");
var c = document.getElementById("slot3");
var mySound = document.getElementById("you-win");
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}
function nextImage2(el){
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}
function nextImage3(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/water.PNG";
	}else if (el.src.match("images/water.PNG")){
	  el.src = "images/orange_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}
// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function checkImages(el) {
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
	 mySound.play();
	 a.classList.add("opaque");
	 b.classList.add("opaque");
	 c.classList.add("opaque");
	 console.log("all images match");
 }
}
