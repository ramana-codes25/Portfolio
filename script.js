  
const phone = "918056938174"; 
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

function sendMessage() {

  // Get values
  const name = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !userEmail || !message) {
    alert("Please fill all fields");
    return;
  }

  const text = encodeURIComponent(
    `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`
  );

  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}