let form = document.getElementById("form");
let inputName = document.getElementById("firstAndLastname");
let inputQuestion = document.getElementById("questionInput");
let msg = document.getElementById("msg");
let Questions = document.getElementById("Questions");

let data = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if (inputName.value === "" || inputQuestion.value === "") {
        msg.innerHTML = "This cannot be left blank";
        console.log("Failed!");
    }
    else {
        msg.innerHTML = "";
        acceptData();
        console.log("Successful");
    }
};

let acceptData = () => {
    // To create a new question object with name and question
    let question = {
        name: inputName.value,
        question: inputQuestion.value
    };

    data.push(question);
    createPost(question);
    inputName.value = "";
    inputQuestion.value = "";

    console.log(data);
    //createPost();
};

let createPost = (question) => {
    Questions.innerHTML += `
    <div>
    <h4>${question.name}</h4>
    <p>${question.question}</p>
    </div>
    `;
    //input.value = "";
};