document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("hZa6SZsQ0LesH0Y6D"); // Replace with your EmailJS Public Key

  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");
  const loading = document.querySelector(".loading");
  const errorMessage = document.querySelector(".error-message");
  const sentMessage = document.querySelector(".sent-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Show loading state
    loading.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    // Send email via EmailJS
    emailjs
      .send("service_ghgq8ye", "template_xtlg8jq", {
        to_email: "naveen@techiemaya.com",
        from_email: emailInput.value,
        message: `A new user has subscribed: ${emailInput.value}`,
      })
      .then(
        () => {
          loading.style.display = "none";
          sentMessage.style.display = "block";
        },
        (error) => {
          loading.style.display = "none";
          errorMessage.style.display = "block";
          errorMessage.textContent = "Failed to send email. Please try again.";
          console.error("EmailJS Error:", error);
        }
      );
  });
});
