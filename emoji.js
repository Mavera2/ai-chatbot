document.addEventListener("DOMContentLoaded", function () {
    const emojiButton = document.getElementById("emoji-button");
    const emojiPanel = document.getElementById("emoji-panel");
    const messageInput = document.getElementById("message-input");
    
    const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤩",
        "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮",
        "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤",
        "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖",
        "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯",
        "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😡", "😠",
        "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥴",
        "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "👹",
        "👺", "💀", "☠️", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼" ];
    
    emojiButton.addEventListener("click", function () {
        if (emojiPanel.classList.contains("hidden")) {
            emojiPanel.innerHTML = "";
            emojiPanel.classList.remove("hidden");
            emojiPanel.style.display = "block";
            
            emojis.forEach(emoji => {
                const emojiSpan = document.createElement("span");
                emojiSpan.textContent = emoji;
                emojiSpan.classList.add("emoji-item");
                emojiSpan.style.cursor = "pointer";
                emojiSpan.style.fontSize = "1.5rem";
                emojiSpan.style.margin = "5px";
                
                emojiSpan.addEventListener("click", function () {
                    messageInput.value += emoji;
                    emojiPanel.classList.add("hidden");
                    emojiPanel.style.display = "none";
                });
                
                emojiPanel.appendChild(emojiSpan);
            });
        } else {
            emojiPanel.classList.add("hidden");
            emojiPanel.style.display = "none";
        }
    });
    
    document.addEventListener("click", function (event) {
        if (!emojiButton.contains(event.target) && !emojiPanel.contains(event.target)) {
            emojiPanel.classList.add("hidden");
            emojiPanel.style.display = "none";
        }
    });
});

