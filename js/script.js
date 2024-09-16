let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let Questions = document.getElementById("Questions");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "This cannot be left blank";
        console.log("Failed!");
    }
    else {
        console.log("Successful");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    Questions.innerHTML += `
    <div>
    <br>
    <h4>${data.text}</h4>
    <p>${data.text}</p>
    </div>
    `;
    input.value = "";
};
