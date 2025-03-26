document.addEventListener('DOMContentLoaded', () => {
    const arContainer = document.querySelector('.ar-container');
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('.intro-video');
    const videoClose = document.querySelector('.video-close');
    const arContent = document.querySelector('.ar-content');
    const claimButton = document.querySelector('.claim-button');
    const arLink = document.getElementById('ar-link');
    const deviceMessage = document.getElementById('device-message');
    const redeemButton = document.getElementById('redeemButton');

    // Hide AR container initially
    arContainer.style.display = 'none';
    deviceMessage.style.display = 'none';

    // Check if device supports AR Quick Look
    const isIOSWithAR = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    function showVideo() {
        arContainer.style.display = 'flex';
        videoContainer.style.display = 'flex';
        video.play();
    }

    function hideVideo() {
        videoContainer.style.display = 'none';
        arContent.style.display = 'block';
        video.pause();
        video.currentTime = 0;
    }

    function closeAR() {
        arContainer.style.display = 'none';
        videoContainer.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    }

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
    redeemButton.addEventListener('click', function(e) {
        e.preventDefault();
        showVideo();
    });

    videoClose.addEventListener('click', function() {
        hideVideo();
    });

    video.addEventListener('ended', function() {
        hideVideo();
    });

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
            closeAR();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && arContainer.style.display === 'flex') {
            closeAR();
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