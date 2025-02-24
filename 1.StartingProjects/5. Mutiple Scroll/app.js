const mountainImage = document.querySelector(".home-mountains img");
const title = document.querySelector("h1");

gsap.to(mountainImage, {
	y: 100,
	scrollTrigger: {
		trigger: "home-mountains",// トリガーとなる要素
		scrub: true,
	},
});

gsap.to(title, {
	y: 500,
	scrollTrigger: {
		trigger: "home-mountains",
		scrub: true,
	},
});