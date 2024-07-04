
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const noThanksBtn = document.getElementById('noThanksBtn');

    // Show the popup after 2 seconds
    setTimeout(() => {
        popupOverlay.style.display = 'flex';
    }, 2000);

    closeBtn.addEventListener('click', function() {
        closePopup();
    });

    noThanksBtn.addEventListener('click', function() {
        closePopup();
    });

    function closePopup() {
        popupOverlay.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 500);
    }
});

