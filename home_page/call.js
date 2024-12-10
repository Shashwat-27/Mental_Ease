// Start Call Button - Simulate starting a call
document.getElementById('startCall').addEventListener('click', function() {
    alert("Starting the call...");
});
// Handle Topic Selection
document.querySelectorAll('#topicModal .list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        const selectedTopic = this.getAttribute('data-topic');
        document.getElementById('selectedTopic').textContent = `Topic: ${selectedTopic}`;
        $('#topicModal').modal('hide');
    });
});

// Handle Country Selection
document.querySelectorAll('#countryModal .list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        const selectedCountry = this.getAttribute('data-country');
        document.getElementById('selectedCountry').textContent = `Country: ${selectedCountry}`;
        $('#countryModal').modal('hide');
    });
});

