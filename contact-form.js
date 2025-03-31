/**
 * Contact Form Handler
 * Stores form data in local storage
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDataObj = {};
            
            // Convert FormData to object
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Add timestamp
            formDataObj.timestamp = new Date().toISOString();
            formDataObj.id = Date.now(); // unique ID
            
            // Show loading message
            const loadingMessage = showMessage('Processing your message...', 'loading');
            
            // Simulate server delay
            setTimeout(() => {
                // Remove loading message
                if (loadingMessage) {
                    loadingMessage.remove();
                }
                
                // Save message to localStorage
                saveMessage(formDataObj);
                
                // Show success message
                showMessage('Thank you for your message! We will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Redirect to thank you page after a delay
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 2000);
            }, 800);
        });
    }
    
    function saveMessage(messageData) {
        // Get existing messages or initialize empty array
        let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        
        // Add new message
        messages.push(messageData);
        
        // Save back to localStorage
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        
        // Log for debugging
        console.log('Message saved to localStorage:', messageData);
    }
    
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Add styling to the message
        messageElement.style.padding = '10px';
        messageElement.style.marginTop = '15px';
        messageElement.style.borderRadius = '4px';
        
        if (type === 'success') {
            messageElement.style.backgroundColor = '#d4edda';
            messageElement.style.color = '#155724';
            messageElement.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            messageElement.style.backgroundColor = '#f8d7da';
            messageElement.style.color = '#721c24';
            messageElement.style.border = '1px solid #f5c6cb';
        } else if (type === 'loading') {
            messageElement.style.backgroundColor = '#e2e3e5';
            messageElement.style.color = '#383d41';
            messageElement.style.border = '1px solid #d6d8db';
        }
        
        // Insert message after form
        contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
        
        // Remove success/error message after 5 seconds (but not loading message)
        if (type !== 'loading') {
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
        
        return messageElement;
    }
}); 