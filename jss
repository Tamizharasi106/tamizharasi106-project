let menu = document.querySelector("#menubtn"),
    navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  };

document
  .querySelector(".appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting in the default way
    alert("Appointment Booking Successfully!");
    // You could also clear the form if needed by uncommenting the line below
    // this.reset();
  });


