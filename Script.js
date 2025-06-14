// JavaScript for mobile navigation toggle

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile navigation
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile navigation when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });
    
    // Close mobile navigation when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
});


// For form validation
document.getElementById("dob").max = new Date().toISOString().split("T")[0];

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  const contact = document.querySelector("input[name='contact']").value;
  const whatsapp = document.querySelector("input[name='whatsapp']").value;

  if (contact.length !== 10 || whatsapp.length !== 10) {
    alert("Contact and WhatsApp must be 10 digits.");
    e.preventDefault();
  }
});

// Form handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting
  alert('Form submission prevented! Data will not be stored.');
});

