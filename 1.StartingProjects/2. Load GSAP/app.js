const timeLine = gsap.timeline({
	default: {
		ease: "power",
	},
});

timeLine
  .to(".images-container", { 
    height: 400, 
    duration: 1.3, 
    delay: 0.4 
  })
	.to(".bloc-txt", { 
    height: "auto", 
    duration: 0.6 
  }, "-=0.8")
	.to(".bloc-txt h2", { 
    y: 0 
    }, "-=0.6")

// set() を使って２つを同時適用
	.to(".f2", {
    y: 0, 
    duration: 0.6 
  })
	.set(".flip-img1", {
    display: "none"
  })

	.to(".f2", { 
    y: "-100%" 
  })
	.to(".load-container", { 
    autoAlpha: 0, 
    duration: 0.8, 
    delay: 0.7 
  })

// set() を使って２つを同時適用
	.add(() => {
		document.querySelector("video").play();
	}, "-=0.8")
	.set(".load-container", {
    display: "none" 
  });
