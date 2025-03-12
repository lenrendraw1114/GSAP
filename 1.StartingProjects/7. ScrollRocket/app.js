// 各要素の取得
const topRocket = document.querySelector(".top-rocket");  // topRocket要素を取得
const midRocket = document.querySelector(".mid-rocket");  // midRocket要素を取得
const rocket = document.querySelector(".bot-rocket");  // botRocket要素を取得
const supply = document.querySelector(".supply");  // supply要素を取得
const allBlocs = document.querySelectorAll(".bloc");  // すべてのbloc要素を取得

// オフセット値の配列設定
const offsets = [105, 206, 848];  // 各スクロールトリガーの終了位置を決定するオフセット値

// .bloc2, .bloc3, .bloc4に対するスクロールアニメーション設定
gsap.utils.toArray([".bloc2", ".bloc3", ".bloc4"]).forEach((bloc, index) => {
	gsap.to(bloc, {
		y: 0,  // Y軸方向の移動を0に設定（動かない）
		ease: "linear",  // 線形のイージングを設定
		scrollTrigger: {
			trigger: ".container-scroll",  // .container-scroll要素がスクロールトリガー
			start: "top bottom-=50%",  // スクロールの開始位置
			end: `+=${offsets[index]}`,  // 終了位置はoffsets配列の値に基づいて設定
			// markers: true,  // 開発時にスクロール位置を確認するためのマーカー（コメントアウト）
			scrub: true,  // スクロールに合わせてアニメーションを同期
		},
	});
});

// allBlocsの各blocに対するスクロールトリガー設定
allBlocs.forEach((bloc, index) => {
	// 最後のbloc（インデックス3）には特別なスクロールトリガーを設定
	if (index === 3) {
		ScrollTrigger.create({
			trigger: bloc,  // スクロールトリガーをblocに設定
			start: "top+=150 center",  // スクロールの開始位置を150px下に設定
			onEnter: () => {  // スクロールが指定位置に達したとき
				bloc.classList.add("active");  // activeクラスを追加
			},
			onLeaveBack: () => {  // スクロールが戻ったとき
				bloc.classList.remove("active");  // activeクラスを削除
			},
			// markers: true  // 開発時にスクロール位置を確認するためのマーカー（コメントアウト）
		});

		// インデックスが3のときはここで処理を終了
		return;
	}

	// その他のblocには通常のスクロールトリガーを設定
	ScrollTrigger.create({
		trigger: bloc,  // スクロールトリガーをblocに設定
		start: "top center+=10%",  // スクロール開始位置を少し遅らせる
		onEnter: () => {  // スクロールが指定位置に達したとき
			bloc.classList.add("active");  // activeクラスを追加
		},
		onLeaveBack: () => {  // スクロールが戻ったとき
			bloc.classList.remove("active");  // activeクラスを削除
		},
		// markers: true  // 開発時にスクロール位置を確認するためのマーカー（コメントアウト）
	});
});
