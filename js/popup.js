var popup_link = document.querySelector(".btn_write_to_us");
var popup = document.querySelector(".write_us_popup");
var popup_close = document.querySelector(".modal_content_close_btn");
var popup_form = popup.querySelector("form");
var popup_name = popup.querySelector("[name=Name]");
var popup_email = popup.querySelector("[name=E-mail]");
var popup_text = popup.querySelector("textarea");
var storage_name = localStorage.getItem("user_name");
var storage_email = localStorage.getItem("user_email");

popup_link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("write_us_popup_show");
  if (storage_name && storage_email) {
    popup_name.value = storage_name;
    popup_email.value = storage_email;
    popup_text.focus();
  } else {
    popup_name.focus();
  };
});

popup_form.addEventListener("submit", function(event){
  if (!popup_name.value || !popup_email.value || !popup_text.value) {
    event.preventDefault();
    popup.classList.remove("modal_error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  } else {
    localStorage.setItem("user_name", popup_name.value);
    localStorage.setItem("user_email", popup_email.value);
  };
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("write_us_popup_show")) {
      popup.classList.remove("write_us_popup_show");
      popup.classList.remove("modal_error");
    };
  };
});

popup_close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("write_us_popup_show");
  popup.classList.remove("modal_error");
});

