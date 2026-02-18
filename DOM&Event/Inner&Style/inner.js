console.log("Inner");

const btnItem = document.getElementById("myBtn");
const textItem = document.getElementById("myText");



btnItem.addEventListener("click", () => {
    console.log("You clicked didn't you?");
    textItem.innerHTML = "So you really clicked";
    textItem.style.color = "red";
    textItem.style.backgroundColor = "yellow";
    textItem.classList.add("text");
})

backBtn.addEventListener("click", () => {
    console.log("Really? A second time?");
    textItem.innerHTML = "You really don't know when to stop";
    textItem.classList.remove("text");
})