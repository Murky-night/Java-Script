console.log("Labwork 4");

const userNameItem = document.getElementById("myUsername");
const passwordItem = document.getElementById("myPassword");
const btnItem = document.getElementById("myBtn");

btnItem.addEventListener("click", () => {
    if (userNameItem.value === "khoi23122005@gmail.com" && passwordItem.value === "217884") {
        alert("Login success!");
        window.location.href = "success.html";
    }
    else {
        alert("Username or password incorrect");
        userNameItem.style.borderColor = "red";
        passwordItem.style.borderColor = "red";
        userNameItem.style.borderWidth = 3;
        passwordItem.style.borderWidth = 3;
    }
})