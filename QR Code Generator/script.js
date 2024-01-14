const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});

// Navbar JavaScript
$(document).on("ready", function () {
  var menuState = 0;

  $(".btn-select").on("click", function () {
    if (menuState === 0) {
      $(".mini-menu-options").slideDown("slow");
      menuState = 1;
    } else {
      $(".mini-menu-options").slideUp("slow");
      menuState = 0;
    }
  });

  $(".mini-menu-options li").on("click", function () {
    var numHijos = $(this).children().length;
    if (numHijos < 2) {
      $(".mini-menu-options").hide("fast");
      var texto = $(this).text();
      $(".menu-select .menu-actual").text(texto);
    }
    menuState = 0;
  });
});

// // Profile Counter JavaScript
// function getProfileVisitCount() {
//   let count = localStorage.getItem("profileVisitCount");
//   return count ? parseInt(count) : 0;
// }

// function incrementProfileVisitCount() {
//   let count = getProfileVisitCount();
//   count++;
//   localStorage.setItem("profileVisitCount", count);
//   document.getElementById("profileVisitCount").innerText = `Profile Visits: ${count}`;
// }

// function fetchRealTimeVisitCount() {
//   const realTimeCount = Math.floor(Math.random() * 100);
//   document.getElementById("realTimeVisitCount").innerText = `Real-time Visits: ${realTimeCount}`;
// }

// incrementProfileVisitCount();
// setInterval(fetchRealTimeVisitCount, 5000);
