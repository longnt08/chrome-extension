chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    }, () => {
        chrome.tabs.sendMessage(tab.id, {action: "cleanAndCompress"}, (response) => {
            if (response && response.html) {
                chrome.storage.sync.get('apiUrl', (data) => {
                    if (data.apiUrl) {
                        fetch(data.apiUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({html: response.html})
                        })
                        .then(response => response.json())
                        .then(data => console.log('Success:', data))
                        .catch((error) => console.error('Error', error));
                    } else {
                        console.error('API URL not configured');
                    }
                });
            }
        });
    });
});