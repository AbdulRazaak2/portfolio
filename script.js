document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    document.getElementById('contact-form').reset();
});