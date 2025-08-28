jQuery(document).ready(function($) {
    //PC環境の場合
    if (window.matchMedia( '(min-width: 649px)' ).matches) {　//切り替える画面サイズ
        $.ajax({
            url: '/saiyou/js/menu_animation.js',
            dataType: 'script',
            cache: false
      	});
    //モバイル環境の場合
    } else {
       $.ajax({
            url: '',
            dataType: 'script',
            cache: false
        });
    };
});