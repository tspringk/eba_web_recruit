/*$(function () {

	// falg変数のデフォルト値として「up」を指定    
	var flag = "up";

	// scrollイベントを取得した際の処理を定義
	$(window).on("scroll", function () {
		// scrollTop()が「0」より大きい場合
		if ($(this).scrollTop() > 0) {
			// flag変数が「up」だった場合の処理
			if (flag === "up") {
				// ヘッダーバーに対して、stop()メソッドを実行してから、
				// animate()メソッドを実行
				$(".saiyou_header").stop().animate({
					// topの位置を「-56px」から「0」になるまでアニメーション
					top: 0
					// アニメーション時間を「500ms」に設定
				}, 500)
				// flag変数の値を「down」に変更
				flag = "down";
			}
		// scrollTop()が「0」の場合
		} else {
			// flag変数が「down」だった場合の処理
			if (flag === "down") {
				// ヘッダーバーに対して、stop()メソッドを実行してから、
				// animate()メソッドを実行
				$(".saiyou_header").stop().animate({
					// topの位置を「0」から「-56px」になるまでアニメーション
					top: "-10%"
					// アニメーション時間を「500ms」に設定
				}, 300);
				// flag変数の値を「up」に変更
				flag = "up";
			}

		}

	});
});*/

$(function () {
	var flag = "left_side_menu";

	$(window).on("scroll", function () {

		if ($(this).scrollTop() > 0) {

			if (flag === "left_side_menu") {
				$(".side_navi").stop().animate({
					left: "-200px",
					opacity:0
				}, 400);
				flag = "left_side_menu_hide";
			}

		} else {

			if (flag === "left_side_menu_hide") {
				$(".side_navi").stop().animate({
					left: 0,
					opacity:1
				}, 600)
				flag = "left_side_menu";

			}

		}

	});
});