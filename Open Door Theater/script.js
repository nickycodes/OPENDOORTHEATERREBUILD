//Variables

//Slider Variables
const slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

const intervalTime = 5000;
const auto = true; //For auto slider function

//Slider Interval to be set later
let slideInterval;

//Selectors
const dropdownButton = document.querySelector(".dropdown-button");

//Navbar Event Listeners
dropdownButton.addEventListener("click", function openDropDown() {
	let dropdownContent = document.querySelector(".dropdown-content");
	dropdownContent.classList.toggle("dropdown-content-open");
});

//Slider Functions
const nextSlide = () => {
	//Get the current class
	const current = document.querySelector(".current");
	//Remove Current Class from DIV
	current.classList.remove("current");
	//Check for the next slide
	if (current.nextElementSibling) {
		//Add current to next slide
		current.nextElementSibling.classList.add("current");
	} else {
		//Add current to start
		slides[0].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

const previousSlide = () => {
	//Get the current class
	const current = document.querySelector(".current");
	//Remove Current Class from DIV
	current.classList.remove("current");
	//Check for the next slide
	if (current.previousElementSibling) {
		//Add current to next slide
		current.previousElementSibling.classList.add("current");
	} else {
		//Add current to start
		slides[slides.length - 1].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
};

//Slider Event Listeners
nextButton.addEventListener("click", (e) => {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

previousButton.addEventListener("click", (e) => {
	previousSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

//Auto Slide
if (auto) {
	//Run next slide at the interval time
	slideInterval = setInterval(nextSlide, intervalTime);
}
