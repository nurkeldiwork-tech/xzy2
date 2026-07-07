document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Waitlist Form Simulation
    const waitlistForm = document.getElementById('waitlist-form');
    const formSuccess = document.getElementById('form-success');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('email');
            const submitBtn = waitlistForm.querySelector('button[type="submit"]');
            
            // Basic validation
            if (emailInput.value.trim() === '') return;
            
            // Simulate loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                waitlistForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
            }, 800);
        });
    }
});
