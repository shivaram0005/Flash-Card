//create and delete buttons in header
let createFlashCard = document.querySelector(".create-card");
let deleteFlashCards = document.querySelector(".delete-card");
let dummyDiv = document.querySelector(".dummy-div");


//flashcard div
let createFlashCardDiv = document.querySelector(".flash-card-div");




//save and close buttons
let flashCardSave = document.querySelector(".flash-card-save-button");
let flashCardClose = document.querySelector(".flash-card-close-button");


//question and answer textarea
let questions = document.querySelector("#question");
let answers = document.querySelector("#answer");


createFlashCard.addEventListener("click", ()=> {
   createFlashCardDiv.style.display = "block";
    
})

flashCardClose.addEventListener("click", ()=> {
    createFlashCardDiv.style.display = "none";
})

flashCardSave.addEventListener("click", ()=>{
    let ques = questions.value;
    let ans = answers.value;
    if(ques == ""  || ans == ""){
        alert("please add question and answer to create a card")
    }
    else{
        let flashCardsDiv = document.createElement("div");
        flashCardsDiv.classList.add("flash-cards");
        let flashCardsInsideDiv = document.createElement("div");
        let flashCardsQuestion = document.createElement("h2");
        let flashCardsAnswer = document.createElement("h3")
        flashCardsDiv.appendChild(flashCardsInsideDiv);
        flashCardsInsideDiv.appendChild(flashCardsQuestion);
        flashCardsInsideDiv.appendChild(flashCardsAnswer);
        dummyDiv.appendChild(flashCardsDiv);
        flashCardsQuestion.innerHTML = ques;
        flashCardsAnswer.innerHTML = ans;
    }
 
   
})

deleteFlashCards.addEventListener("click", ()=> {
    dummyDiv.remove();
    
    setTimeout(() => {
        let setTimeoutMessage = document.querySelector(".setTimeoutMessage");
        setTimeoutMessage.style.color = "red";
        setTimeoutMessage.style.textAlign = "center";
        setTimeoutMessage.style.fontSize = "30px"
        setTimeoutMessage.style.marginTop = "50px"
        setTimeoutMessage.innerHTML = "Please refresh the page to add new Cards"
    }, 1000);
})