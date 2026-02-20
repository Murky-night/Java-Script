console.log("Lsbwork 5");

const fetchData = async () => {
    const response = await fetch("http://localhost:8000/users");
    const value = await response.json();
    const tbody = document.querySelector("#users");
    if (value && value.length) {
        value.forEach((user, index) => {
            tbody.innerHTML += `
        <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
        </tr>`
        });
    }

}
fetchData()

