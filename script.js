document.addEventListener('DOMContentLoaded', () => {
    const arContainer = document.getElementById('ar-container');
    const arLink = document.getElementById('ar-link');
    const deviceMessage = document.getElementById('device-message');
    const redeemButton = document.getElementById('redeemButton');

    // Hide AR container initially
    arContainer.style.display = 'none';
    deviceMessage.style.display = 'none';

    // Check if device supports AR Quick Look
    const isIOSWithAR = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    function showARContainer() {
        arContainer.style.display = 'flex';
        arContainer.style.opacity = '0';
        requestAnimationFrame(() => {
            arContainer.style.transition = 'opacity 0.3s ease';
            arContainer.style.opacity = '1';
        });
    }

    function hideARContainer() {
        arContainer.style.opacity = '0';
        setTimeout(() => {
            arContainer.style.display = 'none';
            // Reset device message when closing
            deviceMessage.style.display = 'none';
            deviceMessage.style.opacity = '0';
        }, 300);
    }

    // Event Listeners
    redeemButton.addEventListener('click', showARContainer);

    // Handle AR button click
    if (!isIOSWithAR) {
        arLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (deviceMessage.style.display === 'none') {
                deviceMessage.style.display = 'block';
                deviceMessage.style.opacity = '0';
                requestAnimationFrame(() => {
                    deviceMessage.style.opacity = '1';
                });
            }
        });
    }

    // Close AR container when clicking outside content
    arContainer.addEventListener('click', (e) => {
        if (e.target === arContainer) {
            hideARContainer();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && arContainer.style.display === 'flex') {
            hideARContainer();
        }
    });

    // Prevent scrolling when AR container is open
    arContainer.addEventListener('wheel', (e) => {
        if (arContainer.style.display === 'flex') {
            e.preventDefault();
        }
    });

    // Add hover effect to AR button
    arLink.addEventListener('mouseenter', () => {
        arLink.style.transform = 'translateY(-2px)';
    });

    arLink.addEventListener('mouseleave', () => {
        arLink.style.transform = 'translateY(0)';
    });
}); 