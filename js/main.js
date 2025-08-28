// ハンバーガーメニュー
// アイコン
$(function () {
    $('.zdo_drawer_button').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
        $('.zdo_drawer_menu').toggleClass('open');

    });
})

// ハンバーガーメニューからnavを選択したらハンバーガーメニューを非表示
$(function () {
    if ($(window).width()) {
        $('.drawer_nav_item>a').click(function () {
            $('nav').removeClass('open');
            $('.zdo_drawer_button').removeClass('active');

            $('.zdo_drawer_menu').removeClass('open');
        });
    }
})



// アコーディオン////////////////////

$(function () {
    $('.ac-child').css("display", "none");
    $('.ac-parent').on('click', function () {
        //openクラスをつける
        $(this).toggleClass('open', 800);
        //クリックされていないac-parentのopenクラスを取る
        $(".ac-parent").not(this).removeClass("open");
        $(this).next().slideToggle();
        $('.ac-parent').not($(this)).next('.ac-child').slideUp();
    })
});


// ///////////////////////////////////////
//modalを出す
const modalWrapOpen = function (e) {
    //クリックしたボタンのdata属性の値を取得
    const dataModalOpen = e.currentTarget.dataset.modalOpen;
    //works_modal_wrapper classが付与されている要素を全て取得
    //取得した全ての要素からdata属性の値が同じ要素を探す
    //取得した要素へis_open classを付与する
    Array.from(document.querySelectorAll('.works_modal_wrapper')).forEach((e, i) => {
        if (e.getAttribute('data-modal') === dataModalOpen) {
            e.classList.toggle('is_active');
        }
    })
}

//クリックイベントの定義：複数なのでforEachでイテレートさせる
//works_modal_open classが付与された要素を全て取得
//全ての要素に対してクリックイベントを定義する
Array.from(document.querySelectorAll('.works_modal_open')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalWrapOpen);
})

// modalを消す
const modalCloseAction = function (e) {
    //✖が押された要素の親要素(works_modal_wrapper classを持つ)を取得
    //その要素に対してis_openクラスの切り替えを行う
    const targetModal = e.currentTarget.closest('.works_modal_wrapper');
    targetModal.classList.toggle('is_active');

};

//全ての要素に対してクリックイベントを定義する
Array.from(document.querySelectorAll('.works_modal_close')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', modalCloseAction);
})







$(function() {

    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 400) {
        $(".page-top").fadeIn("fast");
      } else {
        $(".page-top").fadeOut("fast");
      }

      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $("footer").innerHeight();

      if ( scrollHeight - scrollPosition  <= footHeight ) {

        $(".page-top").css({
          "position":"absolute",
        });
      } else {
        $(".page-top").css({
          "position":"fixed",
        });
      }
    });

  });

// Swiper初期化
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.staff-voice-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    loop: false,
    centeredSlides: false,
  });
});