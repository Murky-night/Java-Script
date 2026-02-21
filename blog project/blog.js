console.log("Blog");

const fetchBLog = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const data = await response.json();
    console.log("Check data:", data);

    const tbody = document.querySelector("#blogs");
    if (data && data.length) {
        data.forEach(blog => {
            tbody.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class = "deleteBtn" data-id="${blog.id}">
                        Delete
                    </button>
                </td>
            </tr>`
        });
    }
}

const addNewRow = (blog) => {
    const tableBody = document.querySelector('#blogs');
    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');
    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
                <button class = "deleteBtn" data-id="${blog.id}">
                    Delete
                </button>
            </td>
        </tr>`;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    // Thêm onclick cho dòng vừa tạo
    const newBtn = document.querySelector(`[data-id="${blog.id}"]`);
    newBtn.addEventListener("click", async () => {
        const id = newBtn.getAttribute("data-id");
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'  
            },
        });
        const row = newBtn.closest('tr');
        row.remove();
    })
}

const handleNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");

    const saveBlogBtn = document.getElementById("saveBlog");
    saveBlogBtn.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value)

        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const blog = await rawResponse.json();
        addNewRow(blog);
        console.log(blog);
    })
}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".deleteBtn");

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}

fetchBLog().then(() => {
    handleDeleteBtns();
});
handleNewBlog();
