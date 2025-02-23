const TL = gsap.timeline({ repeat: -1 });
const slider = document.querySelectorAll(".vertical-slider p");

TL.from(slider, {
	y: 100,
	autoAlpha: 0,
	duration: 0.75,
	stagger: 0.75,
}).to(slider, { y: -100, autoAlpha: 0, duration: 0.75, stagger: 0.75 }, 0.75);
