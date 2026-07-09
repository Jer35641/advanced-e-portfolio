// emailjs.send("service_uctllpc","template_n9z5mgy");
// HRF8fNargpjD_INU1
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
      .sendForm(
          'service_uctllpc',
          'template_n9z5mgy',
          event.target,
          'HRF8fNargpjD_INU1'
      ).then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
  }).catch(() => {
     loading.classList.remove("modal__overlay--visible");
     alert(
        "The email service is temporarliy unavailable. Please contact me directly at Jer35643@gmail.com"
     ); 
  })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
