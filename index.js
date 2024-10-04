let url = `https://script.google.com/macros/s/AKfycbzXg6TXS6g5NM4ToDdO7KPGZjL_XW5fgIgVPABbRA9ZCcwRPyf19zwz6mcJ2ckDpKsr/exec`;

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // 10-digit
  const nameRegex = /^[a-zA-Z\s]+$/; // letters and spaces

  // Name
  if (nameRegex.test(name.value)) {
    name.classList.remove("error");
    name.classList.add("success");
  } else {
    name.classList.remove("success");
    name.classList.add("error");
    isValid = false;
  }

  // Email
  if (emailRegex.test(email.value)) {
    email.classList.remove("error");
    email.classList.add("success");
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    isValid = false;
  }

  // Phone
  if (phoneRegex.test(phone.value)) {
    phone.classList.remove("error");
    phone.classList.add("success");
  } else {
    phone.classList.remove("success");
    phone.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    let data = new FormData(form);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.text())
      .then((findResp) => console.log(findResp));

    alert("Data added successfully");
  }

  //   shake effect
  else {
    document.querySelector("form").classList.add("shake");
    setTimeout(() => {
      document.querySelector("form").classList.remove("shake");
    }, 500);

    // Mobile vibration android
    if (navigator.vibrate) {
      navigator.vibrate([300, 100, 300]);
    } else {
      console.log("Vibration not supported on this device.");
    }

    // ios

    let errorSound = new Audio("error-sound.mp3"); // Replace with your own sound file
    errorSound.play();
    
  }
});
