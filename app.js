document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim(); 

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('messageInput'); 
        messageElement.textContent = message;

        const chatBox = document.getElementById('chat-box');
        chatBox.appendChild(messageElement);

        messageInput.value = ''; 
        chatBox.scrollTop = chatBox.scrollHeight;

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {
                            "text": message 
                        }
                    ]
                }
            ],
            "generationConfig": {
                "temperature": 1,
                "topK": 40,
                "topP": 0.95,
                "maxOutputTokens": 8192,
                "responseMimeType": "text/plain"
            }
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBvUO4x7oeLxoB3loRNGymtgusqgl12Xpo", requestOptions)
            .then((response) => response.json()) 
            .then((result) => {
                console.log(result);

                if (result.candidates && result.candidates.length > 0) {
                    let responseMessage = result.candidates[0].content.parts[0].text.trim();

                    responseMessage = responseMessage.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

                    const botMessageElement = document.createElement('div');
                    botMessageElement.classList.add('messageBot'); 
                    botMessageElement.innerHTML = responseMessage; 
                    chatBox.appendChild(botMessageElement);

                    chatBox.scrollTop = chatBox.scrollHeight;
                } else {
                    console.error("API yanıtı beklenilen formatta değil:", result);
                }
            })
            .catch((error) => console.error('API isteği hatası:', error));
    }
});

document.getElementById('message-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
