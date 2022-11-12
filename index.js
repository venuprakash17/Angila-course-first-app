var numberOfButtons = document.querySelectorAll(".drum").length;
function makeSound(key) {
  console.log(this.innerHTML);
  switch (key) {
    case "w":
      var audio_w = new Audio("sounds/tom-1.mp3");
      audio_w.play();
      break;
    case "a":
      var audio_a = new Audio("sounds/tom-2.mp3");
      audio_a.play();
      break;
    case "s":
      var audio_s = new Audio("sounds/tom-3.mp3");
      audio_s.play();
      break;
    case "d":
      var audio_d = new Audio("sounds/tom-4.mp3");
      audio_d.play();
      break;
    case "j":
      var audio_j = new Audio("sounds/snare.mp3");
      audio_j.play();
      break;
    case "k":
      var audio_k = new Audio("sounds/crash.mp3");
      audio_k.play();
      break;
    case "l":
      var audio_l = new Audio("sounds/kick-bass.mp3");
      audio_l.play();
      break;
    default:
      break;
  }
}
``;
function buttonAnimation(currentKey) {
  console.log("Called");
  var list = ["w", "a", "s", "d", "j", "k", "l"];
  if (list.includes(currentKey)) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  } else {
    console.log("Out of syllabus");
  }
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
  // console.log(i);
}

var buttonInnerHtml = this.innerHTML;
