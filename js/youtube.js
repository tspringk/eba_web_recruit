// YouTubeのiframe apiの読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
	'youtube',
	{
	  videoId: 'hrvJd34lklQ', // YouTubeのvideoIdを入れる
	  playerVars: {
		loop: 0, // ループしない
		controls: 1, // コントローラー表示
		autoplay: 0, // 自動再生オフ
		rel: 0,  // オススメ動画を表示させない
		showinfo: 1 // タイトル表示
	  },
	  events: {
		'onReady': onPlayerReady
	  }
	}
  );
}
function onPlayerReady(event) {
  event.target.setVolume(0);
}