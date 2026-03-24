  
const phone = "918056938174"; // no + for WhatsApp
  const email = "ramana.network24@gmail.com";

  function callNow() {
    window.location.href = "tel:+91" + phone.slice(-10);
  }

  function whatsappNow() {
    window.location.href = "https://wa.me/" + phone;
  }

  function mailNow() {
    window.location.href = "mailto:" + email;

    
  }