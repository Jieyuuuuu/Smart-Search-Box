const userInput = document.getElementById('userInput');
const sendMessageBtn = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

sendMessageBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        addUserMessage(userMessage);
        userInput.value = '';
        setTimeout(() => {
            simulateAiResponse(userMessage);
        }, 800); 
    }
});

function addUserMessage(message) {
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('chat-message', 'user-message');

    const userLabel = document.createElement('span');
    userLabel.textContent = 'You: ';
    userLabel.classList.add('message-sender');

    const messageContent = document.createElement('p');
    messageContent.textContent = message;
    messageContent.classList.add('message-content');

    userMessageElement.appendChild(userLabel);
    userMessageElement.appendChild(messageContent);

    chatMessages.appendChild(userMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAiMessage(message) {
    const aiMessageElement = document.createElement('div');
    aiMessageElement.classList.add('chat-message', 'ai-message');
    chatMessages.appendChild(aiMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const aiTextElement = document.createElement('p');
    aiTextElement.textContent = "AI: " + message;
    aiMessageElement.appendChild(aiTextElement);

    
    aiTextElement.style.color = '#000'; 

   
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 30 * message.length); 
}

let previousUserMessage = "";

sendMessageBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        addUserMessage(userMessage);
        userInput.value = '';
        previousUserMessage = userMessage; 
        setTimeout(() => {
            simulateAiResponse(userMessage);
        }, 800);
    }
});

function simulateAiResponse(userMessage) {
    let aiResponse = "";

    if (userMessage.includes("我想找一張風景的圖片放到我的影片裡")) {
        aiResponse = "請問是想要找什麼樣的風景呢?";
        previousUserMessage = userMessage;
    } else if (previousUserMessage.includes("我想找一張風景的圖片放到我的影片裡") && userMessage.includes("想要找歐洲的風景")) {
        aiResponse = "好的，根據您的需求，我判斷您在尋找一張關於歐洲風景的無版權圖片，以添加到您的影片裡，這裡是一張Unsplash上的無版權圖片，符合您的需求。";
        addAiMessage(aiResponse);
        setTimeout(() => {
            const imageElement = document.createElement('img');
            imageElement.src = 'https://images.unsplash.com/photo-1565841449778-e06ca37068c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80';
            imageElement.classList.add('message-content', 'image-content');
            chatMessages.appendChild(imageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
        previousUserMessage = "";
        return;
    } else if (userMessage.includes("幫我找一款價格1000左右的體脂計，要是知名品牌的")) {
        aiResponse = "這裡找到了一款日本知名品牌的體脂計，包含了體重、體脂、內臟脂肪及BMI的功能。經由多個購物網站比對，目前以蝦皮購物最便宜，可以配合折價券使用，提供以下購買連結：https://shopee.tw/【TANITA】四合一體組成計-體脂肪計-體脂計-FS-102，好禮三選一-i.28704232.11259422320";
    } else if (userMessage.includes("路易莎的燕麥拿鐵熱量是多少?")) {
        aiResponse = "根據路易莎的官網，大杯全糖的燕麥拿鐵熱量為303大卡";
    } else {
        aiResponse = "抱歉，我不太明白您的需求。";
    }

    setTimeout(() => {
        addAiMessage(aiResponse);
    }, 800);
}

const button1 = document.getElementById('fillMessageButton1');
const button2 = document.getElementById('fillMessageButton2');
const button3 = document.getElementById('fillMessageButton3');
const dynamicButtonsContainer = document.getElementById('dynamicButtons');
const buttonEurope = document.getElementById('fillMessageButtonEurope');

button1.addEventListener('click', () => {
    userInput.value = "路易莎的燕麥拿鐵熱量是多少?";
 
});

button2.addEventListener('click', () => {
    userInput.value = "我想找一張風景的圖片放到我的影片裡";
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    dynamicButtonsContainer.style.display = 'block';
    buttonEurope.style.display = 'block';
});

buttonEurope.addEventListener('click', () => {
    userInput.value = "想要找歐洲的風景";
    dynamicButtonsContainer.style.display = 'none';
    button1.style.display = 'block';
    button2.style.display = 'block';
    button3.style.display = 'block';
    buttonEurope.style.display = 'none';
});

button3.addEventListener('click', () => {
    userInput.value = "幫我找一款價格1000左右的體脂計，要是知名品牌的";
    
});

