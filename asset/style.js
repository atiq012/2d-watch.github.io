document.getElementById("grey").style.border = "5px solid green";
document.getElementById("light-grey").style.border = "none";
document.getElementById("yellow").style.border = "none";

document.getElementById("blue-selected").style.border = "5px solid red";
document.getElementById("black-selected").style.border = "none";
document.getElementById("white-selected").style.border = "none";

function dialChange(name) {
  if (name == "light-grey") {
    document.getElementById("light-grey").style.border = "5px solid green";
    document.getElementById("grey").style.border = "none";
    document.getElementById("yellow").style.border = "none";

    document.getElementById("primary-img").style.backgroundImage =
      "url('images/Protype-2.png')";
    document.getElementById("thumbnail-image-front").style.backgroundImage =
      "url('images/Protype-2.png')";
    document.getElementById("thumbnail-image-side").style.backgroundImage =
      "url('images/prototype-side-1.png')";
    document.getElementById("thumbnail-image-back").style.backgroundImage =
      "url('images/Protype-Back-2.png')";

    document
      .getElementById("thumbnail-anchor-front")
      .setAttribute("data-big", "images/Protype-2.png");
    document
      .getElementById("thumbnail-anchor-side")
      .setAttribute("data-big", "images/prototype-side-1.png");
    document
      .getElementById("thumbnail-anchor-back")
      .setAttribute("data-big", "images/Protype-Back-2.png");
  }
  if (name == "grey") {
    document.getElementById("grey").style.border = "5px solid green";
    document.getElementById("light-grey").style.border = "none";
    document.getElementById("yellow").style.border = "none";

    document.getElementById("primary-img").style.backgroundImage =
      "url('images/Protype-1.png')";
    document.getElementById("thumbnail-image-front").style.backgroundImage =
      "url('images/Protype-1.png')";
    document.getElementById("thumbnail-image-side").style.backgroundImage =
      "url('images/prototype-side-grey-4.png')";
    document.getElementById("thumbnail-image-back").style.backgroundImage =
      "url('images/Protype-Back-1.png')";

    document
      .getElementById("thumbnail-anchor-front")
      .setAttribute("data-big", "images/Protype-1.png");
    document
      .getElementById("thumbnail-anchor-side")
      .setAttribute("data-big", "images/prototype-side-grey-4.png");
    document
      .getElementById("thumbnail-anchor-back")
      .setAttribute("data-big", "images/Protype-Back-1.png");
  }
  if (name == "yellow") {
    document.getElementById("yellow").style.border = "5px solid green";
    document.getElementById("light-grey").style.border = "none";
    document.getElementById("grey").style.border = "none";

    document.getElementById("primary-img").style.backgroundImage =
      "url('images/Protype-3.png')";
    document.getElementById("thumbnail-image-front").style.backgroundImage =
      "url('images/Protype-3.png')";
    document.getElementById("thumbnail-image-side").style.backgroundImage =
      "url('images/prototype-side-yellow-5.png')";
    document.getElementById("thumbnail-image-back").style.backgroundImage =
      "url('images/Protype-Back-3.png')";

    document
      .getElementById("thumbnail-anchor-front")
      .setAttribute("data-big", "images/Protype-3.png");
    document
      .getElementById("thumbnail-anchor-side")
      .setAttribute("data-big", "images/prototype-side-yellow-5.png");
    document
      .getElementById("thumbnail-anchor-back")
      .setAttribute("data-big", "images/Protype-Back-3.png");
  }
}

function bandChange(name) {
  if (name == "blue") {
    document.getElementById("blue-selected").style.border = "5px solid red";
    document.getElementById("black-selected").style.border = "none";
    document.getElementById("white-selected").style.border = "none";
    document.getElementById("primary-img").style.backgroundColor = "#00B4FE";
    document.getElementById("thumbnail-image-front").style.backgroundColor =
      "#00B4FE";
    document.getElementById("thumbnail-image-side").style.backgroundColor =
      "#00B4FE";
    document.getElementById("thumbnail-image-back").style.backgroundColor =
      "#00B4FE";
  }
  if (name == "black") {
    document.getElementById("black-selected").style.border = "5px solid red";
    document.getElementById("blue-selected").style.border = "none";
    document.getElementById("white-selected").style.border = "none";
    document.getElementById("primary-img").style.backgroundColor = "#273137";
    document.getElementById("thumbnail-image-front").style.backgroundColor =
      "#273137";
    document.getElementById("thumbnail-image-side").style.backgroundColor =
      "#273137";
    document.getElementById("thumbnail-image-back").style.backgroundColor =
      "#273137";
  }
  if (name == "white") {
    document.getElementById("white-selected").style.border = "5px solid red";
    document.getElementById("blue-selected").style.border = "none";
    document.getElementById("black-selected").style.border = "none";
    document.getElementById("primary-img").style.backgroundColor = "#FFFFFF";
    document.getElementById("thumbnail-image-front").style.backgroundColor =
      "#FFFFFF";
    document.getElementById("thumbnail-image-side").style.backgroundColor =
      "#FFFFFF";
    document.getElementById("thumbnail-image-back").style.backgroundColor =
      "#FFFFFF";
  }
}

$(".thumbnail").on("click", function () {
  var clicked = $(this);
  var newSelection = clicked.data("big");
  var $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("slow"));
});
