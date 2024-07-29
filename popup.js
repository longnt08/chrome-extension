document.getElementById('save-btn').addEventListener('click', () => {
    const apiUrl = document.getElementById('api-url').value;
    chrome.storage.sync.set({apiUrl}, () => {
        alert('API URL saved.');
    });
});