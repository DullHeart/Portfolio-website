// Theme toggle functionality
document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Active link highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  // Attach the click event listener to the send button
  const sendButton = document.getElementById("sendButton");
  
  sendButton.addEventListener("click", function() {
    // Select all inputs and textareas with the "contact-input" class
    const inputs = document.querySelectorAll(".contact-input");
    
    // Clear the value of each selected element
    inputs.forEach(input => {
      input.value = "";
    });
  });
});

