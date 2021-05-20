let langList = document.querySelector(".langMenu");
let langElements = langList.querySelectorAll("li");
let langDropdownBtn = document.getElementById("langDropdown");
langElements.forEach(function (el) {
  el.addEventListener("click", function () {
    langList.style.display = "none";
    langDropdownBtn.setAttribute("value", el.getAttribute("value"));
    langDropdownBtn.innerHTML = el.outerHTML;a
  });
});
langDropdownBtn.innerHTML = langElements[0].outerHTML;
langDropdownBtn.setAttribute("value", langElements[0].getAttribute("value"));

// toggle list visibility on button click
langDropdownBtn.addEventListener("click", function () {
  if (langList.style.display == "block") {
    langList.style.display = "none";
  } else {
    langList.style.display = "block";
  }
});
// slide


$num = $(".my-card").length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $(".my-card:nth-child(" + $even + ")").addClass("active");
  $(".my-card:nth-child(" + $even + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + $even + ")")
    .next()
    .addClass("next");
} else {
  $(".my-card:nth-child(" + $odd + ")").addClass("active");
  $(".my-card:nth-child(" + $odd + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + $odd + ")")
    .next()
    .addClass("next");
}

$(".my-card").click(function () {
   $slide = $(".active").width();
  if ($(this).hasClass("next")) {
    $(".card-carousel")
      .stop(false, true)
      .animate({ left: "-=" + 145 });
  } else if ($(this).hasClass("prev")) {
    $(".card-carousel")
      .stop(false, true)
      .animate({ left: "+=" + 145});
  }

  $(this).removeClass("prev next");
  $(this).siblings().removeClass("prev active next");

  $(this).addClass("active");
  $(this).prev().addClass("prev");
  $(this).next().addClass("next");
});


