const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const sliderContainer = document.querySelector(".container");
const slidesArray = Array.from(document.querySelectorAll(".slide"));
const currentSlideNumber = document.querySelector(".counter span:nth-child(1)");
let currentIndex = 0;


    // ①右にスライドイン
const slideInRight = () => {
  const timelineRight = gsap.timeline();
  

  timelineRight.set(currentSlideNumber, {
    innerText: currentIndex + 1 //1からスタート。indexで次のスライド番号を表示
  }).to(slidesArray[currentIndex], { 
    duration: 0.6, 
    x: 0 
  });
};

  // ②左にスライドアウト
const slideOutLeft = () => {
  const timelineLeft = gsap.timeline();
  
  timelineLeft.set(currentSlideNumber, {
    innerText: currentIndex
  }).to(slidesArray[currentIndex], { 
    duration: 0.6, 
    x: "-100%" 
  });
};

  // ③端に達したときにエラーのように震える
const shakeContainer = () => {
  gsap.to(sliderContainer, {
    keyframes: [
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 0 }
    ]
  });
};

  // 作成した３つの関数を条件分岐
const handleSlideTransition = (direction) => {
  if (direction === "next") {
    if (currentIndex === slidesArray.length - 1) {
      shakeContainer();// 現在のスライド（currentIndex）が最後のスライド（slidesArray.length - 1）の場合、次に進めない
      return;
    }
    currentIndex++;
    slideInRight();// それ以外の場合、スライドを右からスライドインする処理（slideInRight()）を実行し、currentIndex を1つ進める
  } else if (direction === "prev") {
    if (currentIndex === 0) {
      shakeContainer();
      return;
    }
    slideOutLeft();
    currentIndex--;
  }
};

// （ボタンイベントリスナー）
nextButton.addEventListener("click", () => {
  handleSlideTransition("next");
});

prevButton.addEventListener("click", () => {
  handleSlideTransition("prev");
});
