console.log("Async/Await");

fetch("http://localhost:8000/users")
    .then(response => response.json())
    .then(value => console.log("fetch promise:",value))

const fetchData = async () => {
    const response = await fetch("http://localhost:8000/users");
    const value = await response.json();
    console.log("fetch async await:",value);
}
fetchData()