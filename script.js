const chatInput = document.querySelector(".chatInput textarea")
const sendChatBtn = document.querySelector(".chatInput button");
const chatBox = document.querySelector(".chatBox")


let userMessage;
let displayedBotResponses = [];

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "moi" ? `<p>${message}</p><img src="images/ippo.png" alt="">` : `<img src="images/kamogawa.png" alt=""><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

// je crée un tableau de réponse possible pour le bot kamogawa
const botResponses = [
    "KOZO ! Essaie de rentrer dans ta tête, tu es plus rapide !",
    "Pourquoi frappes-tu ? Que poursuis-tu? Tu devrais déjà connaître la réponse à cela. Pour devenir fort. ",
    "Courez jusqu'à ce que tu ne puisses plus courir, puis recommence. Un effort constant est le plus grand raccourci de la vie.",
    "Le moment où tu recules est le moment où tu perds!",
    "Il y a des moments où travailler dur peut ne pas suffire. Mais ceux qui réussissent ont travaillé dur.",
    "Parfois, quel que soit le type d'effort que tu déploies, cela ne porte pas vraiment ses fruits."
];

// je choisis au hasard une réponse dans le tableau
const getRandomBotResponse = () => {
    //Je filtre les réponses disponibles du bot en utilisant la méthode filter() qui vérifie tout dans le tableau et inclut uniquement celles qui 
    // sont pas dans le tableau displayedBotReponses en créant un nouveau tableau availableResponses
    const availableResponses = botResponses.filter(response => !displayedBotResponses.includes(response));
    if (availableResponses.length === 0) {
       
        displayedBotResponses = [];
    }
    // je chosis une ligne du tableau availableResponses au hasard grâce à Math.random()
    const randomIndex = Math.floor(Math.random() * availableResponses.length);
    //Je récupère une réponse au hasard dans availableResponses
    const selectedResponse = availableResponses[randomIndex];
    //J'ajoute cette réponse au tableau displayedBotResponses pour dire qu'elle a été affichée et qu'il faudra plus la réutiliser
    displayedBotResponses.push(selectedResponse);
    // Je retourne la réponse sélectionner
    return selectedResponse;
};

// je génère la réponse
const generateResponse = () => {
    const botResponse = getRandomBotResponse();
    
    
    setTimeout(() => {
        chatBox.appendChild(createChatLi(botResponse, "bot"));
    }, 1000); // 
};

const handleChat =() => {
    userMessage = chatInput.value.trim()
    if(!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "moi"));

    generateResponse();

}

sendChatBtn.addEventListener("click", handleChat);