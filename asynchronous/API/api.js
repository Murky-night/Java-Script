console.log("API");

//fetch => raw data (Response) => Object

const temp = fetch("http://localhost:8000/users");

temp
.then(Response => Response.json())
.then(Data => console.log(Data))