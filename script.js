$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $("#main-header")
      .removeClass("bg-unique-gray")
      .addClass("bg-zinc-900/70 backdrop-blur-xl");
  } else {
    $("#main-header")
      .removeClass("bg-zinc-900/70 backdrop-blur-xl")
      .addClass("bg-unique-gray");
  }
});

$(document).ready(function () {
  function openMenu() {
    $("#mobile-menu").removeClass("translate-x-full");
    $("#overlay").removeClass("hidden");
  }

  function closeMenu() {
    $("#mobile-menu").addClass("translate-x-full");
    $("#overlay").addClass("hidden");
  }

  $("#menu-btn").on("click", openMenu);
  $("#close-btn").on("click", closeMenu);
  $("#overlay").on("click", closeMenu);
});
