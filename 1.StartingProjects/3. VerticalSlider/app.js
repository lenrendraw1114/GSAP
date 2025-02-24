const countDown = document.querySelectorAll(".vertical-slider p");
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // 無限ループで次のアニメーションの前に少し待つ

countDown.forEach((text, index) => {
  tl.from(text, { 
    autoAlpha: 0, 
    y: "100%", 
    duration: 0.3,
    ease: "power2.out" 
  }) // 初期位置から下から上へスライド
  .to(text, { 
    y: "-100%", 
    autoAlpha: 0, 
    duration: 0.3, 
    ease: "power2.in" 
  }, "+=0.6"); // すべてが消えてから次のアニメーションを開始
});
