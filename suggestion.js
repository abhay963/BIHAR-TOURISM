document.getElementById('suggestionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const popupMessage = document.getElementById('popupMessage');

    // Show the popup message
    popupMessage.style.display = 'suggestion submitted';

    // Simulate a delay to show the popup
    setTimeout(() => {
        popupMessage.style.display = 'none';
        document.getElementById('suggestionForm').reset();
    }, 3000);
});

function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}
