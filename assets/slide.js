$(document).ready(function () {
  $(".product_slide_list").slick({
    prevArrow: $(".pre_btn"),
    nextArrow: $(".next_btn"),
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".product_list").slick({
    prevArrow: $(".slide_pre_btn"),
    nextArrow: $(".slide_next_btn"),
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".news_slide_wrapper .news_post_list").slick({
    prevArrow: $(".news_slide_pre_btn"),
    nextArrow: $(".news_slide_next_btn"),
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#recruit_flow").slick({
    infinite: false,
    autoplaySpeed: 1000,
    autoplay: false,
    centerMode: false,
    swipe: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#recuit_activity_list").slick({
    variableWidth: true,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    centerMode: true,
    swipe: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1302,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "36px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  });
});
