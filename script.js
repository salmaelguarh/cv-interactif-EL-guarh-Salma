document.getElementById('toggle-contact').addEventListener('click', function() {
    const contact = document.getElementById('contact-info');
    if (contact.style.display === 'none') {
        contact.style.display = 'block';
    } else {
        contact.style.display = 'none';
    }
});
