// Simple alert on submit
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your request has been submitted. Our team will contact you shortly!");
});
