const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function sendEmail(){
  
    let params = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    }
    emailjs.send("service_9h5watf","template_qtq17aw",params)
    .then(
        alert("Email sent")
    )
    .catch(error => {
        console.error("Email send error:", error);
        alert("Failed to send email. Please try again later.");
    });

    


}