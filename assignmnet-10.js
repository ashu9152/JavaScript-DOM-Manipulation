let button_Text = document.querySelector(
  ".col-lg-8 .btn-cta-big .login-btn-text"
)
let press_btn = document.querySelector(".col-lg-8 .btn-cta-big")

function mouseTop() {
  button_Text.style.background = "Red"
}

press_btn.addEventListener("mouseover", mouseTop)
