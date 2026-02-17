console.log("Listening");

const item = document.getElementById("myBtn");
console.log(item);

const handleButton = () => {
    console.log("You clicked");
}

item.addEventListener("click",handleButton);