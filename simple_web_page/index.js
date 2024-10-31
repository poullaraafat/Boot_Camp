document.getElementById('change').addEventListener('click', function() {
    const about = document.getElementById('about-me');
    about.innerHTML = `<h1>About Me</h1><p>Fun fact: I Hate JavaScript!</p>`;
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.value === '') {
        alert('Name is required');
    } else if (!email.value.match(emailPattern)) {
        alert('Please enter a valid email');
    } else {
        alert('Form successfully submitted');
    }
});

