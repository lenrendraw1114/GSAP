// 必要なライブラリの読み込み
const sections = document.querySelectorAll('.section');
const tooltip = document.querySelector('.tooltip');
const tooltipImg = document.querySelector('.tooltip-img');
const tooltipText = tooltip.querySelector('p');

// ツールチップの画像とテキスト
const src = [
  "ressources/spartan.svg",
  "ressources/castle.svg",
  "ressources/da-vinci.svg",
  "ressources/airplane.svg",
];

const dates = [
  "-3300 | 476",
  "476 | 1492",
  "1492 | 1792",
  "1792 | AJD",
];

// ScrollTriggerを使用して、スクロールに合わせて動かす
gsap.registerPlugin(ScrollTrigger);

// セクションごとのスクロールトリガー
sections.forEach((section, index) => {
  const trigger = ScrollTrigger.create({
    trigger: section,
    start: "top center", // セクションが中央に来たときにトリガー
    end: "bottom center", // セクションが中央を過ぎたときにトリガー
    scrub: true, // スクロールに合わせて滑らかに動くように設定
    onEnter: () => {
      // 画像とテキストを更新
      tooltipImg.src = src[index];
      tooltipText.textContent = dates[index];
    },
    onUpdate: self => {
      // セクションに応じたスクロール位置を取得
      const scrollPos = self.progress * section.offsetHeight + section.offsetTop;
      
      // ツールチップの位置を更新
      tooltip.style.top = `${scrollPos}px`;

      // セクションが進行している場合は画像とテキストを更新
      if (self.progress > 0 && self.progress < 1) {
        tooltipImg.src = src[index];
        tooltipText.textContent = dates[index];
      }
    },
    onLeave: () => {
      tooltip.style.top = "-100px"; // セクションを離れたらツールチップを非表示
    }
  });
});
