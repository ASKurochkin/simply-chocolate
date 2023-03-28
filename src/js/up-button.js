window.onscroll = function() {
  var btnToTop = document.getElementById("btnTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
};

